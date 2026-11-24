# /// script
# requires-python = ">=3.13,<3.14"
# dependencies = ["numpy==2.3.3", "shapely==2.1.2", "trimesh==4.9.0"]
# ///
"""Generate the residence globe offline. No Python or map service is used by the site."""
import json
import math
import random
import sys
from pathlib import Path
from urllib.request import urlopen

import numpy as np
import shapely as geo
import trimesh
from shapely.geometry import shape, box

SOURCE = 'https://raw.githubusercontent.com/nvkelso/natural-earth-vector/v5.1.2/geojson/ne_110m_land.geojson'
TARGET = Path(__file__).resolve().parents[1] / 'public/maps/residences.glb'
rng = random.Random(453)
vertices, colors = [], []


def normal(lon, lat):
    a, b = math.radians(lon), math.radians(lat)
    return np.array([math.cos(a)*math.cos(b), math.sin(b), -math.sin(a)*math.cos(b)])


def face(points, color):
    vertices.extend(points)
    # glTF COLOR_0 is linear, not sRGB.
    rgb = [int(color[i:i+2], 16)/255 for i in (0, 2, 4)]
    colors.extend([[round(255*((v+0.055)/1.055)**2.4) for v in rgb] + [255]] * 3)


def biome(lon, lat):
    if lat < -58 or lat > 70 or (-57 < lon < -24 and lat > 60):
        return 'e8f2ec', 'b0cdd4'
    if (111 < lon < 155 and -45 < lat < -10) or (-17 < lon < 62 and 16 < lat < 33):
        return 'e6a268', 'aa6652'
    return ('89ad56' if abs(lat) < 52 else '79a168'), '567b47'


def globe_face(coords, radius, color):
    points = [normal(*p)*radius for p in coords]
    if np.dot(np.cross(points[1]-points[0],points[2]-points[0]), points[0]) < 0:
        points.reverse()
    face(points, color)


def coast(poly):
    # Split into small patches BEFORE projecting: long triangles would cut through the ocean.
    west, south, east, north = poly.bounds
    for x in range(math.floor(west/8)*8, math.ceil(east), 8):
        for y in range(math.floor(south/8)*8, math.ceil(north), 8):
            patch = poly.intersection(box(x,y,x+8,y+8))
            for tri in geo.constrained_delaunay_triangles(patch).geoms:
                coords = list(tri.exterior.coords)[:3]
                tint, _ = biome(tri.centroid.x,tri.centroid.y)
                globe_face(coords, 1.038, tint)
    for ring in [poly.exterior, *poly.interiors]:
        points = list(ring.segmentize(4).coords)
        for p, q in zip(points, points[1:]):
            # Wall winding follows exterior CCW / interior CW rings.
            a,b = normal(*p),normal(*q)
            _,cliff = biome(*p)
            for low,high,col in [(0.985,1.012,'cfb480'),(1.012,1.038,cliff)]:
                face([a*low,b*low,b*high],col)
                face([a*low,b*high,a*high],col)


def place(lon,lat,mesh,col,scale,altitude):
    up = normal(lon,lat)
    east = normal(lon+90,0)
    north = np.cross(up,east)
    world = mesh.vertices * np.array(scale) @ np.array([east,north,up]) + up*altitude
    for tri in mesh.faces:
        face(world[tri],col)


def peak(lon,lat,height,radius):
    cone = trimesh.creation.cone(radius=1,height=1,sections=5)
    place(lon,lat,cone,'8c836a',(radius,radius,height),1.033)
    place(lon,lat,cone,'fff3de',(radius*.38,radius*.38,height*.38),1.033+height*.62)


def miniatures(land):
    pine = trimesh.creation.cone(radius=1,height=1,sections=5)
    # Cluster the trees to leave legible stretches of land at sidebar scale.
    for lon,lat in [(139,37),(148,-35),(146,-20),(137,-13),(100,23),(104,55),(19,60),(-107,57),(-74,-8),(24,-5),(148,-6),(171,-42),(122,48),(79,15)]:
        for _ in range(18):
            x,y = lon+rng.uniform(-7,7),lat+rng.uniform(-5,5)
            if geo.contains_xy(land,x,y):
                h = rng.uniform(.045,.09)
                place(x,y,pine,rng.choice(['267c65','34694f','46895f']),(h*.29,h*.29,h),1.034)
    for lon,lat,h in [(137,36,.09),(146,-6,.1),(170,-44,.1),(86,28,.16),(81,30,.12),(92,29,.1),(11,46,.09),(-71,-27,.12),(-110,42,.12),(37,-3,.085)]:
        peak(lon,lat,h,h*.59)
    cube = trimesh.creation.box()
    roof = trimesh.creation.cone(radius=1,height=1,sections=4)
    for lon,lat in [(139,35),(147,-36),(174,-37),(13,51),(-81,37),(118,30)]:
        for dx,dy in [(0,0),(-1.6,1.2),(1,1.8)]:
            place(lon+dx,lat+dy,cube,'ffe5ba',(.028,.023,.035),1.052)
            place(lon+dx,lat+dy,roof,'bd6053',(.025,.023,.023),1.069)
    # A little red hull and a triangular sail on otherwise empty ocean.
    hull = trimesh.creation.icosphere(subdivisions=0)
    sail = trimesh.Trimesh(vertices=[[-.026,0,0],[.015,0,0],[.014,0,.065]], faces=[[0,1,2],[2,1,0]],process=False)
    for lon,lat in [(166,7),(-135,-32),(-38,20),(65,-19)]:
        place(lon,lat,hull,'b55142',(.045,.018,.018),1.003)
        place(lon,lat,sail,'fff0ce',(1,1,1),1.013)


def main():
    data = json.loads(Path(sys.argv[1]).read_bytes() if len(sys.argv)>1 else urlopen(SOURCE,timeout=30).read())
    land = geo.union_all([shape(f['geometry']) for f in data['features']]).simplify(.38)
    ocean = trimesh.creation.icosphere(subdivisions=2)
    for tri in ocean.faces:
        face(ocean.vertices[tri],rng.choice(['54bcca','4db5c7','56c3ce','50bdc9']))
    for poly in geo.get_parts(geo.orient_polygons(land)):
        if poly.area>.6:
            coast(poly)
    miniatures(land)
    # Share positions only where the palette matches. Omit normals for glTF flat shading.
    attr, indices = np.unique(np.column_stack([np.round(vertices,6),colors]), axis=0, return_inverse=True)
    mesh = trimesh.Trimesh(vertices=attr[:,:3],faces=indices.reshape(-1,3),vertex_colors=attr[:,3:].astype('uint8'),process=False)
    scene = trimesh.Scene(); scene.add_geometry(mesh,geom_name='Residence world')
    TARGET.write_bytes(trimesh.exchange.gltf.export_glb(scene,include_normals=False))
    print(f'{len(mesh.faces):,} triangles, {TARGET.stat().st_size:,} bytes: {TARGET}')


if __name__ == '__main__':
    main()

import Head from "next/head";
import worksJson from "./works.json";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const Works = () => {
  const works = worksJson;
  const titleRef = useRef<HTMLButtonElement>(null);
  const worksContainerRef = useRef<HTMLDivElement>(null);
  const webappContainerRef = useRef<HTMLDivElement>(null);
  const appContainerRef = useRef<HTMLDivElement>(null);
  const [isApp, setIsApp] = useState(false);
  const { scrollXProgress } = useScroll({
    container: worksContainerRef
  });

  const [clickMeClicked, setClickMeClicked] = useState(false);

  const useParallax = (value: MotionValue<number>, distance: number) => {
    return useTransform(value, [0, 1], [0, -distance]);
  };

  const y = useParallax(scrollXProgress, 28);

  useEffect(() => {
    scrollXProgress.onChange((value) => {
      if (value === 0) {
        setIsApp(false);
      } else if (value === 1) {
        setIsApp(true);
      }
    });
  });

  const toggleWorkType = () => {
    if (isApp) {
      worksContainerRef.current?.scroll({
        left: 0,
        behavior: "smooth"
      });
    } else {
      worksContainerRef.current?.scroll({
        left: worksContainerRef.current.offsetWidth,
        behavior: "smooth"
      });
    }
    setClickMeClicked(true);
  };

  return (
    <motion.div
      className="mx-3 max-w-sm overflow-x-hidden lg:max-w-2xl"
      variants={{
        hidden: { opacity: 0, x: 0, y: 200 },
        enter: { opacity: 1, x: 0, y: 0 }
      }}
      initial="hidden"
      animate="enter"
    >
      <Head>
        <title>My works</title>
      </Head>
      <div className="flex w-full flex-col items-center">
        <div className="mb-2 mt-3 flex w-full">
          <h3
            className="w-fit text-xl font-bold after:float-left after:h-1 after:w-full after:rounded-sm after:bg-gray-700 dark:text-neutral-200 text-neutral-700 after:dark:bg-zinc-500">
            Work
          </h3>
          <h3 className="mx-2 w-fit text-xl font-bold dark:text-neutral-200 text-neutral-700">
            -
          </h3>
          <motion.div className="group relative" whileHover="hover">
            <motion.span
              variants={{
                hover: {
                  scale: 0
                }
              }}
              style={{
                originX: 0,
                scale: 1,
                position: "absolute",
                top: "50%",
                translateY: "-50%",
                left: isApp ? "120%" : "90%"
              }}
              className={`flex min-w-max items-center rounded-md bg-sky-300 p-2 text-sm font-bold text-white shadow-md  dark:bg-teal-300 ${
                clickMeClicked && "hidden"
              }`}
            >
              <div className="absolute left-0 inline-block w-2 -translate-x-full overflow-hidden">
                <div className="h-3 origin-top-right -rotate-45 transform bg-sky-300  dark:bg-teal-300"></div>
              </div>
              Click me!
            </motion.span>
            <button
              onClick={() => toggleWorkType()}
              ref={titleRef}
              className="h-7 cursor-pointer overflow-hidden"
            >
              <motion.h3
                style={{ y }}
                className="w-fit text-xl font-bold dark:text-neutral-200 text-neutral-700"
              >
                Website
              </motion.h3>
              <motion.h3
                style={{ y }}
                className="w-fit text-xl font-bold dark:text-neutral-200 text-neutral-700"
              >
                Mobile App
              </motion.h3>
            </button>
          </motion.div>
        </div>
        <motion.div
          ref={worksContainerRef}
          className="scrollbar flex w-full snap-x snap-mandatory overflow-x-auto py-4"
        >
          <motion.div
            ref={webappContainerRef}
            className="grid h-fit min-w-full snap-center gap-8 lg:grid-cols-2 lg:gap-4"
          >
            {works
              .filter((work) => work.type === "website")
              .map((work, i) => (
                <WorkCard
                  key={i}
                  href={work.href}
                  imgSrcs={work.imgSrcs}
                  imgSrc={work.imgSrc}
                  title={work.title}
                  description={work.description}
                  icons={work.icons}
                />
              ))}
          </motion.div>
          <motion.div
            ref={appContainerRef}
            className="grid h-fit min-w-full snap-center gap-8 lg:grid-cols-2 lg:gap-4"
          >
            {works
              .filter((work) => work.type === "app")
              .map((work, i) => (
                <WorkCard
                  key={i}
                  href={work.href}
                  imgSrcs={work.imgSrcs}
                  imgSrc={work.imgSrc}
                  title={work.title}
                  description={work.description}
                  icons={work.icons}
                />
              ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

interface workCardProps {
  href: string;
  imgSrcs?: string[];
  imgSrc: string;
  title: string;
  description: string;
  icons?: string[];
}

const WorkCard = ({
                    imgSrc,
                    title,
                    description,
                    imgSrcs,
                    href,
                    icons
                  }: workCardProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <motion.a
      draggable={false}
      whileHover={"hover"}
      className="group rounded-md p-4 hover:bg-neutral-200 dark:hover:bg-zinc-800"
      target="_blank"
      variants={{
        hover: {
          boxShadow:
            "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)"
        }
      }}
      href={href}
    >
      <div className="flex justify-center">
        <motion.div
          className={`flex h-36 rounded-md overflow-hidden relative ${
            imgSrcs ? "justify-between w-full" : "justify-center w-fit group-hover:border-2 dark:group-hover:border-white group-hover:border-neutral-400"
          }`}
          variants={{
            hover: {
              scale: 1.05
            }
          }}
        >
          {imgSrcs ? (
            imgSrcs.map((src, i) => (
              <div
                className="flex overflow-hidden rounded-md group-hover:border-2 dark:group-hover:border-white group-hover:border-neutral-400 relative"
                key={i}>
                <motion.img
                  onLoad={() => setIsLoaded(true)}
                  key={i}
                  className={`rounded-md group-hover:blur-sm ${!isLoaded ?? "blur-sm"}}`}
                  src={src}
                  alt="img"
                  draggable={false}
                />
                {!(icons) || icons[i] && (
                  <div
                    className="absolute grid grid-cols-1 w-full h-full items-center justify-items-center invisible opacity-0 duration-200 ease-linear group-hover:visible group-hover:opacity-100">
                    <div className="h-8 aspect-square">
                      <Image width="100%" height="100%" src={`/tech-icons/${icons[i]}`} />
                    </div>
                  </div>
                )}
              </div>
            ))
          ) : (
            <motion.img
              className="rounded-md duration-200 ease-linear group-hover:blur-sm"
              src={imgSrc}
              alt="img"
              draggable={false}
            />
          )}
          {imgSrcs === undefined && (
            <div
              className="absolute grid grid-cols-6 w-full h-full items-center justify-items-center invisible opacity-0 duration-200 ease-linear group-hover:visible group-hover:opacity-100">
              {icons?.map((icon, i) => (
                <div
                  key={i}
                  className={`h-8 aspect-square 
                  ${(icons?.length % 3 === 2 && (i === icons.length - 2 || i === icons.length - 1)) && "col-span-3"} 
                  ${(icons?.length % 3 === 2 && (i !== icons.length - 2 && i !== icons.length - 1)) && "col-span-2"} 
                  ${(icons.length === 4) && "col-span-3"} 
                  ${(icons?.length === 1) && "col-span-6"} 
                  ${icons?.length % 3 === 0 && "col-span-2"}`
                  }>
                  <Image width="100%" height="100%" src={`/tech-icons/${icon}`} />
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
      <div className="mt-5 flex flex-col content-center items-center">
        <motion.h1
          variants={{ hover: { scale: 1.05 } }}
          className="text-center text-4xl font-bold dark:text-neutral-200 text-neutral-700"
        >
          {title}
        </motion.h1>
        <motion.p
          variants={{ hover: { scale: 1.05 } }}
          className="text-center dark:text-neutral-200 text-neutral-700"
        >
          {description}
        </motion.p>
      </div>
    </motion.a>
  );
};

export default Works;

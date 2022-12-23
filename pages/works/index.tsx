import Head from 'next/head';
import worksJson from './works.json';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Works = () => {
  const works = worksJson;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: 0, y: 200 },
        enter: { opacity: 1, x: 0, y: 0 },
      }}
      initial="hidden"
      animate="enter"
      className="mx-3 max-w-sm  lg:max-w-2xl">
      <Head>
        <title>My works</title>
      </Head>
      <div className="flex w-full flex-col items-center">
        <h3 className="mb-2 w-fit self-start text-xl font-bold text-black after:float-left after:h-1 after:w-full after:rounded-sm after:bg-gray-700 dark:text-white after:dark:bg-zinc-500">
          Work
        </h3>
        <div className="grid justify-items-center gap-8 lg:grid-cols-2 lg:gap-4">
          {works.map((work, i) => (
            <WorkCard
              key={i}
              href={work.href}
              imgSrcs={work.imgSrcs}
              imgSrc={work.imgSrc}
              title={work.title}
              description={work.description}
            />
          ))}
        </div>
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
}

const WorkCard = ({
  imgSrc,
  title,
  description,
  imgSrcs,
  href,
}: workCardProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <motion.a
      draggable={false}
      whileHover={'hover'}
      className="group rounded-md p-4 hover:bg-neutral-200 dark:hover:bg-zinc-800"
      target="_blank"
      href={href}>
      <div>
        <div
          className={`flex h-36 ${
            imgSrcs ? 'justify-between' : 'justify-center'
          }`}>
          {imgSrcs ? (
            imgSrcs.map((src, i) => (
              <motion.img
                onLoad={() => setIsLoaded(true)}
                variants={{
                  hover: {
                    scale: 1.05,
                  },
                }}
                key={i}
                className={`rounded-md ${ !isLoaded ?? 'blur-sm' }}`}
                src={src}
                alt="img"
                draggable={false}
              />
            ))
          ) : (
            <motion.img
              variants={{
                hover: {
                  scale: 1.05,
                },
              }}
              className="rounded-md"
              src={imgSrc}
              alt="img"
              draggable={false}
            />
          )}
        </div>
      </div>
      <div className="mt-5 flex flex-col content-center items-center">
        <h1 className="text-4xl font-bold dark:text-white">{title}</h1>
        <p className="text-center dark:text-white">{description}</p>
      </div>
    </motion.a>
  );
};

export default Works;

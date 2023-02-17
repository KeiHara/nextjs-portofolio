import Head from 'next/head'
import worksJson from './works.json'
import { MotionValue, motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'

const Works = () => {
  const works = worksJson
  const worksContainerRef = useRef<HTMLDivElement>(null)
  const webappContainerRef = useRef<HTMLDivElement>(null)
  const appContainerRef = useRef<HTMLDivElement>(null)
  const { scrollXProgress } = useScroll({
    container: worksContainerRef,
  })

  const useParallax = (value: MotionValue<number>, distance: number) => {
    return useTransform(value, [0, 1], [0, -distance])
  }

  const y = useParallax(scrollXProgress, 28)

  return (
    <motion.div
      className="mx-3 max-w-sm overflow-x-hidden lg:max-w-2xl"
      variants={{
        hidden: { opacity: 0, x: 0, y: 200 },
        enter: { opacity: 1, x: 0, y: 0 },
      }}
      initial="hidden"
      animate="enter"
    >
      <Head>
        <title>My works</title>
      </Head>
      <div className="flex w-full flex-col items-center">
        <div className="mb-2 flex w-full">
          <h3 className="w-fit text-xl font-bold text-black after:float-left after:h-1 after:w-full after:rounded-sm after:bg-gray-700 dark:text-white after:dark:bg-zinc-500">
            Work
          </h3>
          <h3 className="mx-2 w-fit text-xl font-bold text-black dark:text-white">
            -
          </h3>
          <div className="h-7 overflow-hidden">
            <motion.h3
              style={{ y }}
              className="w-fit text-xl font-bold text-black dark:text-white"
            >
              Webapp
            </motion.h3>
            <motion.h3
              style={{ y }}
              className="w-fit text-xl font-bold text-black dark:text-white"
            >
              App
            </motion.h3>
          </div>
        </div>
        <motion.div
          ref={worksContainerRef}
          className="scrollbar flex w-full snap-x snap-mandatory overflow-x-auto"
        >
          <motion.div
            ref={webappContainerRef}
            className="grid h-fit min-w-full snap-center gap-8 lg:grid-cols-2 lg:gap-4"
          >
            {works
              .filter((work) => work.type === 'website')
              .map((work, i) => (
                <WorkCard
                  key={i}
                  href={work.href}
                  imgSrcs={work.imgSrcs}
                  imgSrc={work.imgSrc}
                  title={work.title}
                  description={work.description}
                />
              ))}
          </motion.div>
          <motion.div
            ref={appContainerRef}
            className="grid h-fit min-w-full snap-center gap-8 lg:grid-cols-2 lg:gap-4"
          >
            {works
              .filter((work) => work.type === 'app')
              .map((work, i) => (
                <WorkCard
                  key={i}
                  href={work.href}
                  imgSrcs={work.imgSrcs}
                  imgSrc={work.imgSrc}
                  title={work.title}
                  description={work.description}
                />
              ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

interface workCardProps {
  href: string
  imgSrcs?: string[]
  imgSrc: string
  title: string
  description: string
}

const WorkCard = ({
  imgSrc,
  title,
  description,
  imgSrcs,
  href,
}: workCardProps) => {
  const [isLoaded, setIsLoaded] = useState(false)
  return (
    <motion.a
      draggable={false}
      whileHover={'hover'}
      className="group rounded-md p-4 hover:bg-neutral-200 dark:hover:bg-zinc-800"
      target="_blank"
      variants={{
        hover: {
          boxShadow:
            '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        },
      }}
      href={href}
    >
      <div>
        <div
          className={`flex h-36 ${
            imgSrcs ? 'justify-between' : 'justify-center'
          }`}
        >
          {imgSrcs ? (
            imgSrcs.map((src, i) => (
              <motion.img
                onLoad={() => setIsLoaded(true)}
                key={i}
                variants={{
                  hover: {
                    scale: 1.05,
                  },
                }}
                className={`rounded-md ${!isLoaded ?? 'blur-sm'}}`}
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
        <motion.h1
          variants={{ hover: { scale: 1.05 } }}
          className="text-4xl font-bold dark:text-white"
        >
          {title}
        </motion.h1>
        <motion.p
          variants={{ hover: { scale: 1.05 } }}
          className="text-center dark:text-white"
        >
          {description}
        </motion.p>
      </div>
    </motion.a>
  )
}

export default Works

import Head from 'next/head';
import worksJson from './works.json';

const works = () => {
  const works = worksJson;

  return (
    <div className="mx-3 max-w-sm  lg:max-w-2xl">
      <Head>
        <title>My works</title>
      </Head>
      <div className="flex w-full flex-col items-center">
        <h3 className="mb-2 w-fit self-start text-xl font-bold text-black after:float-left after:h-1 after:w-full after:rounded-sm after:bg-gray-700 dark:text-white after:dark:bg-zinc-500">
          Work
        </h3>
        <div className="grid justify-items-center gap-16 lg:grid-cols-2 lg:gap-6">
          {works.map((work) => (
            <WorkCard
              href={work.href}
              imgSrcs={work.imgSrcs}
              imgSrc={work.imgSrc}
              title={work.title}
              description={work.description}
            />
          ))}
        </div>
      </div>
    </div>
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
  return (
    <a
      className="group rounded-md p-4 transition duration-150 ease-in-out hover:bg-neutral-400 dark:hover:bg-zinc-800"
      target="_blank"
      href={href}>
      <div>
        <div
          className={`flex h-36 ${
            imgSrcs ? 'justify-between' : 'justify-center'
          }`}>
          {imgSrcs ? (
            imgSrcs.map((src) => (
              <img
                className="rounded-md transition ease-in-out group-hover:scale-105"
                src={src}
                alt="img"
              />
            ))
          ) : (
            <img
              className="rounded-md transition ease-in-out group-hover:scale-105"
              src={imgSrc}
              alt="img"
            />
          )}
        </div>
      </div>
      <div className="mt-5 flex flex-col content-center items-center">
        <h1 className="text-4xl font-bold dark:text-white">{title}</h1>
        <p className="text-center dark:text-white">{description}</p>
      </div>
    </a>
  );
};

export default works;

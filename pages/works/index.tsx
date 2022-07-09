import Head from 'next/head';
import worksJson from './works.json';

const works = () => {
  const works = worksJson;

  return (
    <div className="m-4 flex max-w-sm justify-center sm:max-w-lg md:max-w-2xl">
      <div className="flex w-11/12 flex-col items-center">
        <Head>
          <title>My works</title>
        </Head>

        <h3 className="mb-2 w-fit self-start text-xl font-bold text-black after:float-left after:h-1 after:w-full after:rounded-sm after:bg-gray-700 dark:text-white after:dark:bg-zinc-500">
          Work
        </h3>
        <div className="grid justify-items-center gap-12 md:grid-cols-2 md:gap-6">
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
    <div>
      <div>
        <a target="_blank" href={href}>
          <div
            className={`flex h-36 ${
              imgSrcs ? 'justify-between' : 'justify-center'
            }`}>
            {imgSrcs ? (
              imgSrcs.map((src) => (
                <img className="rounded-md" src={src} alt="img" />
              ))
            ) : (
              <img className="rounded-md" src={imgSrc} alt="img" />
            )}
          </div>
        </a>
      </div>
      <div className="mt-5 flex flex-col content-center items-center">
        <h1 className="text-4xl font-bold dark:text-white">{title}</h1>
        <p className="text-center dark:text-white">{description}</p>
      </div>
    </div>
  );
};

export default works;

import type { NextPage } from 'next';
import profile from '../public/profile_pic.jpg';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { IconType } from 'react-icons/lib';
import { createElement } from 'react';

const Home: NextPage = () => {
  return (
    <div className="sm:max-w-xl xl:max-w-2xl">
      <div className="m-4 sm:m-auto">
        {/* Intro */}
        <div className="flex justify-between pt-4">
          <div>
            <h1 className="text-4xl font-bold text-black dark:text-white">
              Keisuke Hara
            </h1>
            <p className="dark:text-white">
              Digital Artist (Frontend Engineer / Musician)
            </p>
          </div>
          {/* prof pic */}
          <div className="flex h-fit w-24 overflow-hidden rounded-full border-2">
            <a target="_blank" href="https://www.linkedin.com/in/keisuke-hara/">
              <div className="group flex items-center justify-center">
                <img
                  className="rounded-full duration-200 ease-linear group-hover:blur-sm"
                  src={profile.src}
                  alt="prof-pic"
                />
                <FaLinkedin
                  className="invisible absolute text-white opacity-0 duration-200 ease-linear group-hover:visible group-hover:opacity-100"
                  size={28}
                />
              </div>
            </a>
          </div>
        </div>
        {/* Work */}
        <div className="mt-4 flex flex-col">
          <h3 className="mb-2 w-fit text-xl font-bold text-black after:float-left after:h-1 after:w-full after:rounded-sm after:bg-gray-700 dark:text-white after:dark:bg-zinc-500">
            Work
          </h3>
          <p className="text-justify tracking-wide dark:text-white">
            Keisuke is a second-year student studying a Bachelor of Science at
            the University of Auckland, majoring in Computer Science. He is
            passionate about taking on opportunities to actively improve my web
            development skills. He is currently working as a Frontend engineer /
            Research assistant at the University Auckland helping research
            project called&nbsp;
            <a
              className="hover:text-sky500 inline-block origin-bottom-right indent-0 text-sky-700 duration-200 ease-linear after:float-left after:h-0.5 after:w-full after:origin-center after:scale-0 after:rounded-sm after:bg-sky-700 after:duration-200 hover:text-sky-600 hover:after:scale-100  hover:after:bg-sky-600 dark:text-teal-300 after:dark:bg-teal-300 hover:dark:text-teal-200 hover:after:dark:bg-teal-200"
              href="https://habits-uat.xyz/"
              target="_blank">
              Habits
            </a>
            .
          </p>
        </div>
        {/* Bio */}
        <div className="mt-4 flex flex-col">
          <h3 className="mb-2 w-fit text-xl font-bold after:float-left after:h-1 after:w-full after:rounded-sm after:bg-gray-700 dark:text-white after:dark:bg-zinc-500">
            Bio
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="font-bold dark:text-white">2003</div>
            <p className="dark:text-white">Born in Tokyo(東京), Japan.</p>

            <div className="font-bold dark:text-white">2001</div>
            <p className="dark:text-white">
              Started studying Computer Science at University of Auckland
            </p>

            <div className="font-bold dark:text-white">2021 to present</div>
            <p className="dark:text-white">
              Working as a frontend(Angular) engineer at Kekeno Tech
            </p>

            <div className="font-bold dark:text-white">2021 to present</div>
            <p className="dark:text-white">
              Working as a front(Angular) engineer at university of auckland
              helping research project called&nbsp;
              <a
                className="inline-block origin-bottom-right indent-0 text-sky-700 duration-200 ease-linear after:float-left after:h-0.5 after:w-full after:origin-center after:scale-0 after:rounded-sm after:bg-sky-700 after:duration-200 hover:text-sky-600 hover:after:scale-100  hover:after:bg-sky-600 dark:text-teal-300 after:dark:bg-teal-300 hover:dark:text-teal-200 hover:after:dark:bg-teal-200"
                href="https://habits-uat.xyz/"
                target="_blank">
                Habits
              </a>
            </p>
          </div>
        </div>
        {/* Hobbies */}
        <div className="mt-4 flex flex-col">
          <h3 className="mb-2 w-fit text-xl font-bold after:float-left after:h-1 after:w-full after:rounded-sm after:bg-gray-700 dark:text-white after:dark:bg-zinc-500">
            I ❤️
          </h3>
          <p className="dark:text-white">Game, music, piano, UI/UX</p>
        </div>
        {/* Social media */}
        <div className="mt-4 flex flex-col">
          <h3 className="mb-2 w-fit text-xl font-bold after:float-left after:h-1 after:w-full after:rounded-sm after:bg-gray-700 dark:text-white after:dark:bg-zinc-500">
            On the web
          </h3>
          <div className="flex flex-col">
            <MediaLink
              icon={(props) => <FaLinkedin />}
              text="@keisuke-hara"
              mediaLink="https://www.linkedin.com/in/keisuke-hara/"
            />
            <MediaLink
              icon={(props) => <FaGithub />}
              text="@keiHara"
              mediaLink="https://github.com/KeiHara"
            />
            <MediaLink
              icon={(props) => <FaInstagram />}
              text="@kei.9241"
              mediaLink="https://www.instagram.com/kei.9241/"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

interface mediaLinkProps {
  icon: IconType;
  mediaLink: string;
  text: string;
}

const MediaLink = ({ icon, mediaLink, text }: mediaLinkProps) => (
  <a
    target="_blank"
    href={mediaLink}
    className="group flex w-fit items-center rounded-md py-2 px-3 duration-200 ease-linear hover:bg-sky-200 hover:bg-opacity-60 dark:hover:bg-teal-200 dark:hover:bg-opacity-20">
    <div className="text-sky-700 duration-200 ease-linear group-hover:text-sky-600 dark:text-teal-300 dark:group-hover:text-teal-200">
      {createElement(icon)}
    </div>
    <p className="ml-2 inline-block origin-bottom-right indent-0 text-sky-700 duration-200 ease-linear after:float-left after:h-0.5 after:w-full after:origin-center after:scale-0 after:rounded-sm after:bg-sky-700 after:duration-200 group-hover:text-sky-600 group-hover:after:scale-100  group-hover:after:bg-sky-600 dark:text-teal-300 after:dark:bg-teal-300 dark:group-hover:text-teal-200 dark:group-hover:after:bg-teal-200">
      {text}
    </p>
  </a>
);

export default Home;

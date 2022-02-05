import type { NextPage } from 'next';
import profile from '../public/profile_pic.jpg';

const Home: NextPage = () => {
  return (
    <div className="flex h-full w-full justify-center bg-zinc-900">
      <div className="max-w-xl">
        {/* Intro */}
        <div className="flex pt-4">
          <div>
            <h1 className="text-4xl font-bold text-white">Keisuke Hara</h1>
            <p className="text-white">
              Digital Artist (Frontend Engineer / Musician)
            </p>
          </div>
          {/* prof pic */}
          <img
            className="ml-10 w-24 rounded-full border-2"
            src={profile.src}
            alt="prof-pic"
          />
        </div>
        {/* Work */}
        <div className="mt-4 flex flex-col">
          <h3 className="mb-2 w-fit text-xl font-bold text-white after:float-left after:h-1 after:w-full after:rounded-sm after:bg-zinc-500">
            Work
          </h3>
          <p className="text-justify indent-4 text-white">
            Keisuke is a second-year student studying a Bachelor of Science at
            the University of Auckland, majoring in Computer Science. He is
            passionate about taking on opportunities to actively improve my web
            development skills and with his free time. He is currently working
            as a Frontend engineer / Research assistant at the University
            Auckland helping research project called&nbsp;
            <a
              className="inline-block origin-bottom-right indent-0 text-teal-300 transition-all duration-200 ease-linear after:float-left after:h-0.5 after:w-full after:origin-center after:scale-0 after:rounded-sm after:bg-teal-300 after:duration-200  hover:text-teal-200 hover:after:scale-100 hover:after:bg-teal-200"
              href="https://habits-uat.xyz/"
              target="_blank">
              Habits
            </a>
            .
          </p>
        </div>
        {/* Bio */}
        <div className="mt-4 flex flex-col">
          <h3 className="mb-2 w-fit text-xl font-bold text-white after:float-left after:h-1 after:w-full after:rounded-sm after:bg-zinc-500">
            Bio
          </h3>
          <div>
            <p className=" text-white">
              <span className="mr-3 font-bold"> 2003</span>
              Born in Tokyo(東京), Japan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

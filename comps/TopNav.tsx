import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const TopNav = () => {
  const [pageTitle, setPageTitle] = useState('about me 😊');
  const router = useRouter();
  useEffect(() => {
    switch (router.asPath) {
      case '/':
        setPageTitle('about me 😊');
      case '/works':
        setPageTitle('My Works 🔥');
    }
    console.log(pageTitle);
  }, [router.asPath]);

  return (
    <div
      className="bg-neutral fixed flex h-16 w-full bg-neutral-200 shadow-lg dark:bg-zinc-800 dark:text-white
  ">
      <h1 className="my-auto ml-5 ml-7 text-4xl font-bold text-black dark:text-white">
        {pageTitle}
      </h1>
    </div>
  );
};

export default TopNav;

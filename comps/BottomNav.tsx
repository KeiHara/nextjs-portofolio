import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const BottomNav = () => {
    const [pageTitle, setPageTitle] = useState('');
    const router = useRouter();

    useEffect(() => {
        switch (router.asPath) {
            case '/':
                setPageTitle('About me');
                break;
            case '/works':
                setPageTitle('My Works');
                break;
        }
    }, [router.pathname]);

    return (
        <div
            className="w-full flex justify-center bg-neutral-200/50 shadow-sm backdrop-blur-md dark:bg-zinc-800/50 dark:text-white
  ">
            <div className="mx-3 w-full max-w-sm lg:max-w-2xl">
                <h1 className="my-4 text-4xl font-bold text-black dark:text-white">
                    {pageTitle}
                </h1>
            </div>
        </div>
    );
};

export default BottomNav;

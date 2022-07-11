import { forwardRef } from 'react';

export const DogSpinner = () => {
  return (
    <div className="absolute flex h-full w-full items-center justify-center">
      <div className="aspect-square w-7 animate-spin rounded-md bg-sky-300 dark:bg-teal-300"></div>
    </div>
  );
};

export const DogContainer = forwardRef(({ children }, ref) => (
  <div
    ref={ref}
    className="relative mx-auto mb-[-100px] mt-[-50px]  h-[300px] w-[300px]  sm:mt-[-170px] sm:mb-[-220px] sm:h-[640px] sm:w-[640px]">
    {children}
  </div>
));

const Loader = () => {
  return (
    <DogContainer>
      <DogSpinner />
    </DogContainer>
  );
};

export default Loader;

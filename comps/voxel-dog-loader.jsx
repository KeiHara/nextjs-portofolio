import { forwardRef } from 'react';

export const DogSpinner = () => (
  <div className="absolute top-2/4 left-2/4">
    <svg className=" h-5 w-5 animate-spin" viewBox="0 0 24 24"></svg>
  </div>
);

export const DogContainer = forwardRef(({ children }, ref) => (
  <div
    ref={ref}
    className="relative mx-auto h-[300px]  w-[300px]  md:mt-[-140px] md:mb-[-220px] md:h-[640px] md:w-[640px]">
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

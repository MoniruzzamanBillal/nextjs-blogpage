import { ReactNode } from "react";

type TWrapperProps = {
  children: ReactNode;
  className?: string;
};

const Wrapper = ({ children, className }: TWrapperProps) => {
  return (
    <div
      className={`WrapperContainer  w-[94%] sm:w-[92%] md:w-[90%] lg:w-[88%] xl:w-[85%] m-auto ${
        className || ""
      } `}
    >
      {children}
    </div>
  );
};

export default Wrapper;

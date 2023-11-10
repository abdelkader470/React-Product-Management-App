import { ReactNode, ButtonHTMLAttributes } from "react";
interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  width?: "w-full" | "w-fit";
}

const Button = ({ className, children, width = "w-full", ...rest }: IProps) => {
  return (
    <button
      className={`${className} ${width} rounded-lg text-white px-3 py-2 duration-200 font-medium`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;

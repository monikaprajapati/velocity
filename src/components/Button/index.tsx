import React from "react";

const shapes = { circle: "rounded-[50%]", round: "rounded-lg" } as const;
const variants = {
  fill: {
    gray_200: "bg-gray-200 text-gray-400",
    white_A700: "bg-white-A700 text-black-900",
    blue_gray_900: "bg-blue_gray-900 text-white-A700",
  },
  outline: {
    white_A700: "border border-solid border-white-A700 text-white-A700",
  },
} as const;
const sizes = {
  xs: "p-[5px]",
  sm: "p-2",
  md: "p-3",
  lg: "p-[21px] sm:px-5",
} as const;

export type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: string;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
  }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "round",
  size = "md",
  variant = "fill",
  color = "white_A700",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };

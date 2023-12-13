import React from "react";

const sizeClasses = {
  txtLatoSemiBold20Black900: "font-lato font-semibold",
  txtBarlowMedium24: "font-barlow font-medium",
  txtLatoBold16: "font-bold font-lato",
  txtLatoSemiBold14WhiteA700: "font-lato font-semibold",
  txtLatoSemiBold24: "font-lato font-semibold",
  txtLatoBold14: "font-bold font-lato",
  txtLatoBold58: "font-bold font-lato",
  txtLatoSemiBold22: "font-lato font-semibold",
  txtLatoSemiBold20: "font-lato font-semibold",
  txtBarlowBold24: "font-barlow font-bold",
  txtLatoMedium16WhiteA700: "font-lato font-medium",
  txtLatoRegular16Gray700: "font-lato font-normal",
  txtLatoBold18: "font-bold font-lato",
  txtBarlowMedium20: "font-barlow font-medium",
  txtLatoRegular14Black900: "font-lato font-normal",
  txtLatoMedium14Gray700: "font-lato font-medium",
  txtBarlowSemiBold48: "font-barlow font-semibold",
  txtLatoRegular14: "font-lato font-normal",
  txtLatoRegular16Blue800: "font-lato font-normal",
  txtLatoBold14Gray700: "font-bold font-lato",
  txtLatoRegular12: "font-lato font-normal",
  txtLatoRegular14Blue800: "font-lato font-normal",
  txtBarlowMedium20Gray700: "font-barlow font-medium",
  txtLatoBold28: "font-bold font-lato",
  txtLatoSemiBold14: "font-lato font-semibold",
  txtLatoBold16Bluegray900: "font-bold font-lato",
  txtLatoSemiBold12: "font-lato font-semibold",
  txtBarlowBold38: "font-barlow font-bold",
  txtLatoRegular18: "font-lato font-normal",
  txtLatoBold64: "font-bold font-lato",
  txtLatoRegular16: "font-lato font-normal",
  txtBarlowBold32: "font-barlow font-bold",
  txtLatoSemiBold18: "font-lato font-semibold",
  txtLatoSemiBold16: "font-lato font-semibold",
  txtLatoRegular14YellowA700: "font-lato font-normal",
  txtLatoMedium16Bluegray900: "font-lato font-medium",
  txtLatoBlackItalic16: "font-black font-lato italic",
  txtLatoRegular14Bluegray900: "font-lato font-normal",
  txtLatoMedium12WhiteA700: "font-lato font-medium",
  txtLatoRegular14WhiteA700: "font-lato font-normal",
  txtLatoSemiBold16Bluegray900: "font-lato font-semibold",
  txtBarlowMedium14: "font-barlow font-medium",
  txtLatoBold48: "font-bold font-lato",
  txtBarlowMedium16: "font-barlow font-medium",
  txtBarlowMedium18: "font-barlow font-medium",
  txtBarlowBold14: "font-barlow font-bold",
  txtBarlowMedium24Black900: "font-barlow font-medium",
  txtLatoMedium18: "font-lato font-medium",
  txtLatoSemiBold14Bluegray900: "font-lato font-semibold",
  txtBarlowSemiBold18: "font-barlow font-semibold",
  txtLatoMedium14: "font-lato font-medium",
  txtLatoMedium16: "font-lato font-medium",
  txtLatoMedium12: "font-lato font-medium",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: any;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };

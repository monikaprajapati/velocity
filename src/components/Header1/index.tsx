import React from "react";

import { Img, Line, Text } from "components";

type Header1Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Header1: React.FC<Header1Props> = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="flex flex-row md:gap-10 items-center justify-between mx-auto my-6 w-[86%]">
          <div className="header-row ">
            <Img
              className="h-12"
              src="images/img_provebiologo.svg"
              alt="provebiologo"
            />
            <div className="mobile-menu">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="flex flex-row sm:hidden items-center justify-between w-[13%]">
            <Text
              className="text-right text-sm text-white-A700 tracking-[0.28px]"
              size="txtLatoSemiBold14WhiteA700"
            >
              Buy Now
            </Text>
            <Line className="bg-gray-200_4c h-4 my-2.5 w-px" />
            <Img
              className="h-6 w-6"
              src="images/img_checkmark_white_a700_24x24.svg"
              alt="checkmark"
            />
            <Text
              className="bg-blue_gray-900 flex h-9 items-center justify-center outline outline-[1px] outline-gray-700 rounded-[50%] text-center text-white-A700 text-xs tracking-[0.24px] w-9"
              size="txtLatoSemiBold12"
            >
              PS
            </Text>
          </div>
        </div>
      </header>
    </>
  );
};

Header1.defaultProps = {};

export default Header1;

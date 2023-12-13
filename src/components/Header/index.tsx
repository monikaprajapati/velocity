import React from "react";

import { Img, Line, Text } from "components";

type HeaderProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <>
      <header className={props.className}>
        <Img
          className="h-12"
          src="images/img_provebiologo.svg"
          alt="provebiologo"
        />
        <div className="flex flex-row items-center justify-between md:ml-[0] ml-[940px] md:mt-0 my-1.5 w-[13%] md:w-full">
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
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;

import React from "react";

import { Img, Line, Text } from "components";

type Header2Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Header2: React.FC<Header2Props> = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="flex flex-row items-center justify-center mx-auto my-2.5 w-[98%]">
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
          <ul className="flex md:flex-col flex-row gap-[30px] md:hidden items-start justify-center ml-44 w-[62%] common-row-list">
            <li>
              <Text
                className="text-sm text-white-A700 hover:text-yellow-A700"
                size="txtLatoRegular14WhiteA700"
              >
                Dashboard
              </Text>
            </li>
            <li>
              <Text
                className="text-sm text-yellow-A700"
                size="txtLatoRegular14YellowA700"
              >
                Packages
              </Text>
            </li>
            <li>
              <Text
                className="text-sm text-white-A700 hover:text-yellow-A700"
                size="txtLatoRegular14WhiteA700"
              >
                Users
              </Text>
            </li>
            <li>
              <Text
                className="text-sm text-white-A700 hover:text-yellow-A700"
                size="txtLatoRegular14WhiteA700"
              >
                Voucher History
              </Text>
            </li>
            <li>
              <Text
                className="text-sm text-white-A700 hover:text-yellow-A700"
                size="txtLatoRegular14WhiteA700"
              >
                Credential Verification History
              </Text>
            </li>
            <li>
              <Text
                className="text-sm text-white-A700 hover:text-yellow-A700"
                size="txtLatoRegular14WhiteA700"
              >
                Voucher Reconciliation
              </Text>
            </li>
            <li>
              <Text
                className="text-sm text-white-A700 hover:text-yellow-A700"
                size="txtLatoRegular14WhiteA700"
              >
                Settings
              </Text>
            </li>
          </ul>
          <div className="flex flex-row sm:hidden items-center justify-between ml-[104px] w-[12%]">
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
              YB
            </Text>
          </div>
        </div>
      </header>
    </>
  );
};

Header2.defaultProps = {};

export default Header2;

import React from "react";

import { Text } from "components";

type FooterProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mb-9 mt-[39px] mx-auto w-[86%]">
          <Text className="text-blue_gray-900 text-sm" size="txtBarlowMedium14">
            Velocity Career Labs, All rights reserved
          </Text>
          <ul className="flex sm:flex-col flex-row sm:gap-12 items-start justify-between w-[49%] md:w-full common-column-list">
            <li>
              <Text
                className="text-blue_gray-900 text-right text-sm"
                size="txtBarlowBold14"
              >
                Pricing
              </Text>
            </li>
            <li>
              <Text
                className="text-blue_gray-900 text-right text-sm"
                size="txtBarlowBold14"
              >
                Terms & Conditions
              </Text>
            </li>
            <li>
              <Text
                className="text-blue_gray-900 text-right text-sm"
                size="txtBarlowBold14"
              >
                Privacy Policy
              </Text>
            </li>
            <li>
              <Text
                className="text-blue_gray-900 text-right text-sm"
                size="txtBarlowBold14"
              >
                Contact Us
              </Text>
            </li>
            <li>
              <Text
                className="text-blue_gray-900 text-right text-sm"
                size="txtBarlowBold14"
              >
                Support
              </Text>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;

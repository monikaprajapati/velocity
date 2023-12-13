import React from "react";

import { Button, Img, Line, List, Text } from "components";
import Footer from "components/Footer";

const PricingOnePage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-lato items-center justify-start mx-auto w-full">
        <div className="bg-gray-100 flex flex-col items-center justify-start w-full">
          <div className="flex flex-col items-start justify-start w-full">
            <div className="bg-black-900 flex flex-col items-center justify-start p-6 sm:px-5 w-full">
              <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start max-w-[1170px] mx-auto md:px-5 w-full">
                <Img
                  className="h-12"
                  src="images/img_provebiologo.svg"
                  alt="provebiologo"
                />
                <Button
                  className="cursor-pointer font-semibold min-w-[179px] sm:ml-[0] ml-[801px] text-base text-center"
                  variant="outline"
                >
                  Create an Account
                </Button>
                <Button
                  className="cursor-pointer font-semibold min-w-[95px] ml-4 sm:ml-[0] text-base text-center"
                  variant="outline"
                >
                  Sign in
                </Button>
              </div>
            </div>
            <div className="flex md:flex-col flex-row font-barlow md:gap-5 items-center justify-start max-w-[1170px] mt-[34px] mx-auto md:px-5 w-full">
              <Text
                className="leading-[36.00px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
                size="txtBarlowBold32"
              >
                <>
                  Choose from the
                  <br />
                  available packages!
                </>
              </Text>
              <div className="flex md:flex-1 flex-col gap-4 items-center justify-start md:ml-[0] ml-[60px] rotate-[-90deg] w-[4%] md:w-full">
                <Img
                  className="h-9 w-9"
                  src="images/img_arrowup.svg"
                  alt="arrowup"
                />
                <Img
                  className="h-9 w-9"
                  src="images/img_checkmark.svg"
                  alt="checkmark"
                />
              </div>
              <List
                className="flex flex-col gap-[30px] ml-6 md:ml-[0] w-[66%]"
                orientation="vertical"
              >
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="bg-gradient  flex flex-col items-center justify-start rounded-lg w-full">
                    <div className="h-[138px] md:h-[334px] relative w-full">
                      <Img
                        className="h-[138px] m-auto object-cover rounded-lg w-full"
                        src="images/img_noise_138x770.png"
                        alt="noise"
                      />
                      <div className="absolute border-b-[6px] border-solid border-yellow-A700 flex flex-col h-full inset-[0] items-center justify-center m-auto p-5 rounded-lg w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[95%] md:w-full">
                          <Img
                            className="h-6 w-6"
                            src="images/img_checkmark_white_a700.svg"
                            alt="checkmark"
                          />
                          <div className="flex flex-col gap-[5px] items-start justify-start ml-4 md:ml-[0]">
                            <Text
                              className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                              size="txtBarlowMedium24"
                            >
                              Arrow
                            </Text>
                            <Text
                              className="text-base text-white-A700"
                              size="txtLatoMedium16WhiteA700"
                            >
                              3 Vouchers in this pack.
                            </Text>
                          </div>
                          <Line className="bg-gray-400_87 h-[98px] md:h-px md:ml-[0] ml-[301px] md:w-full w-px" />
                          <Text
                            className="md:ml-[0] ml-[129px] text-5xl sm:text-[38px] md:text-[44px] text-right text-white-A700"
                            size="txtBarlowSemiBold48"
                          >
                            $3
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="bg-gradient1  flex flex-col items-center justify-start rounded-lg w-full">
                    <div className="h-[138px] md:h-[292px] relative w-full">
                      <Img
                        className="h-[138px] m-auto object-cover rounded-lg w-full"
                        src="images/img_noise_138x770.png"
                        alt="noise"
                      />
                      <div className="absolute flex md:flex-col flex-row md:gap-5 h-max inset-[0] items-start justify-center m-auto w-[90%]">
                        <Img
                          className="h-6 md:mt-0 mt-[37px] w-6"
                          src="images/img_contrast.svg"
                          alt="contrast"
                        />
                        <div className="flex flex-col items-start justify-start ml-4 md:ml-[0] md:mt-0 mt-[25px]">
                          <Text
                            className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtBarlowMedium24"
                          >
                            Super
                          </Text>
                          <Text
                            className="mt-[3px] text-base text-white-A700"
                            size="txtLatoMedium16WhiteA700"
                          >
                            50 Vouchers in this pack.
                          </Text>
                        </div>
                        <Line className="bg-gray-400_87 h-[98px] md:h-px md:ml-[0] ml-[292px] md:w-full w-px" />
                        <Text
                          className="md:ml-[0] ml-[102px] md:mt-0 mt-[22px] text-5xl sm:text-[38px] md:text-[44px] text-right text-white-A700"
                          size="txtBarlowSemiBold48"
                        >
                          $50
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="bg-gradient1  flex flex-col items-center justify-start rounded-lg w-full">
                    <div className="h-[138px] md:h-[294px] relative w-full">
                      <Img
                        className="h-[138px] m-auto object-cover rounded-lg w-full"
                        src="images/img_noise_138x770.png"
                        alt="noise"
                      />
                      <div className="absolute flex md:flex-col flex-row md:gap-5 h-max inset-[0] items-center justify-center m-auto w-[90%]">
                        <Img
                          className="h-6 w-6"
                          src="images/img_contrast.svg"
                          alt="contrast"
                        />
                        <div className="flex flex-col gap-[5px] items-start justify-start ml-4 md:ml-[0]">
                          <Text
                            className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtBarlowMedium24"
                          >
                            Advance
                          </Text>
                          <Text
                            className="text-base text-white-A700"
                            size="txtLatoMedium16WhiteA700"
                          >
                            25 Vouchers in this pack.
                          </Text>
                        </div>
                        <Line className="bg-gray-400_87 h-[98px] md:h-px md:ml-[0] ml-[292px] md:w-full w-px" />
                        <Text
                          className="md:ml-[0] ml-[102px] text-5xl sm:text-[38px] md:text-[44px] text-right text-white-A700"
                          size="txtBarlowSemiBold48"
                        >
                          $25
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </List>
            </div>
            <Button
              className="cursor-pointer font-semibold min-w-[175px] md:ml-[0] ml-[1093px] mt-6 text-base text-center"
              color="blue_gray_900"
            >
              Purchase Package
            </Button>
            <Footer className="bg-white-A700 flex font-barlow items-center justify-center mt-[34px] md:px-5 w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingOnePage;

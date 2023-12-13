import React from "react";

import { Button, Img, Line, List, Text } from "components";
import Footer from "components/Footer";
import Header1 from "components/Header1";

const PricingPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-lato items-center justify-start mx-auto w-full">
        <div className="bg-gray-100 flex flex-col items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <Header1 className="bg-black-900 flex flex-col items-center justify-center md:px-5 w-full" />
            <div className="flex md:flex-col flex-row font-barlow md:gap-10 gap-[60px] items-start justify-start max-w-[1170px] mt-[25px] mx-auto md:px-5 w-full">
              <div className="flex md:flex-1 flex-col gap-[17px] items-start justify-start w-[72%] md:w-full">
                <Text
                  className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtBarlowMedium24Black900"
                >
                  Pricing
                </Text>
                <div className="flex md:flex-col flex-row gap-[34px] items-center justify-between w-full">
                  <div className="flex md:flex-1 flex-col gap-4 items-center justify-start rotate-[-90deg] w-[5%] md:w-full">
                    <Img
                      className="h-9 w-9"
                      src="images/img_arrowup.svg"
                      alt="arrowup"
                    />
                    <Img
                      className="h-9 w-9"
                      src="images/img_checkmark.svg"
                      alt="checkmark_One"
                    />
                  </div>
                  <List
                    className="flex flex-col gap-[30px] w-[92%]"
                    orientation="vertical"
                  >
                    <div className="flex flex-col items-center justify-start my-0 w-full">
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
                    <div className="flex flex-col items-center justify-start my-0 w-full">
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
                    <div className="flex flex-col items-center justify-start my-0 w-full">
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
              </div>
              <div className="flex md:flex-1 flex-col font-lato gap-5 items-start justify-start md:mt-0 mt-2 w-[24%] md:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[350px] items-center justify-start w-full"
                    style={{
                      backgroundImage: "url('images/img_voucherbg.png')",
                    }}
                  >
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[350px] items-center justify-start w-full"
                      style={{
                        backgroundImage: "url('images/img_group16.svg')",
                      }}
                    >
                      <div className="h-[350px] relative w-full">
                        <Img
                          className="h-[350px] m-auto object-cover w-full"
                          src="images/img_noise_350x270.png"
                          alt="noise"
                        />
                        <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[83%]">
                          <Img
                            className="h-9"
                            src="images/img_close_gray_400.svg"
                            alt="close"
                          />
                          <Text
                            className="capitalize mt-[13px] text-center text-lg text-white-A700"
                            size="txtLatoRegular18"
                          >
                            Available Vouchers
                          </Text>
                          <Text
                            className="capitalize mt-[7px] text-5xl sm:text-[38px] md:text-[44px] text-center text-yellow-A700"
                            size="txtLatoBold48"
                          >
                            5
                          </Text>
                          <Text
                            className="leading-[140.00%] mt-[11px] text-center text-white-A700 text-xs"
                            size="txtLatoMedium12WhiteA700"
                          >
                            <>
                              If you require additional vouchers,
                              <br />
                              choose from the available packages.
                            </>
                          </Text>
                          <div className="flex flex-col gap-[37px] items-center justify-start mt-4 w-[91%] md:w-full">
                            <Line className="bg-gray-400_87 h-px w-full" />
                            <Button className="cursor-pointer min-w-[202px] text-base text-center">
                              Purchase Vouchers
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col font-barlow items-center justify-start w-full">
                  <div className="bg-gray-100 flex flex-col items-center justify-start rounded-lg w-full">
                    <div className="bg-gradient2  border border-solid flex flex-col gray_400_00_gray_400_00_border items-center justify-start rounded-lg w-full">
                      <div className="h-[188px] relative w-full">
                        <Img
                          className="h-[188px] m-auto object-cover rounded-[7px] w-full"
                          src="images/img_noise_188x268.png"
                          alt="noise_One"
                        />
                        <div className="absolute flex flex-col gap-14 inset-x-[0] items-start justify-start mx-auto top-[12%] w-[83%]">
                          <div className="flex flex-row items-start justify-between w-full">
                            <Text
                              className="text-blue_gray-900 text-lg"
                              size="txtBarlowSemiBold18"
                            >
                              Payment Method
                            </Text>
                            <Img
                              className="h-4 w-4"
                              src="images/img_plus.svg"
                              alt="plus"
                            />
                          </div>
                          <Text
                            className="text-base text-gray-700"
                            size="txtBarlowMedium16"
                          >
                            Please add a payment method
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row font-lato gap-1.5 items-start justify-start w-[42%] md:w-full">
                  <Img
                    className="h-4 w-4"
                    src="images/img_maskgroup.svg"
                    alt="maskgroup"
                  />
                  <Text
                    className="text-blue_gray-900 text-sm"
                    size="txtLatoSemiBold14Bluegray900"
                  >
                    Billing Address
                  </Text>
                </div>
              </div>
            </div>
            <Footer className="bg-white-A700 flex font-barlow items-center justify-center mt-8 md:px-5 w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingPage;

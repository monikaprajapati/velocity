import React from "react";

import { Button, Img, Line, List, Text } from "components";
import Footer from "components/Footer";
import Header2 from "components/Header2";

const AdminPackagesPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-lato items-center justify-start mx-auto w-full">
        <div className="bg-gray-100 flex flex-col items-center justify-start w-full">
          <div className="flex flex-col gap-5 items-center justify-start w-full">
            <Header2 className="bg-black-900 flex flex-col items-center justify-center md:px-5 w-full" />
            <div className="flex sm:flex-col flex-row md:gap-10 items-end justify-between max-w-[1326px] mx-auto md:px-5 w-full">
              <Text
                className="sm:mt-0 mt-[5px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtBarlowMedium24Black900"
              >
                Package Management
              </Text>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[152px]"
                leftIcon={
                  <Img
                    className="h-4 mb-px mr-2"
                    src="images/img_essetional_addcircle.svg"
                    alt="essetional/add-circle"
                  />
                }
                color="blue_gray_900"
                size="sm"
              >
                <div className="font-lato text-center text-sm">
                  Create Package
                </div>
              </Button>
            </div>
            <div className="bg-white-A700 border border-gray-400 border-solid flex flex-col items-center justify-start max-w-[1326px] mx-auto pb-[206px] md:px-5 rounded-lg w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="bg-gray-200 border border-gray-400 border-solid flex flex-row items-center justify-start p-[15px] rounded-tl-lg rounded-tr-lg w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start ml-2 mt-0.5 w-[97%]">
                    <Text
                      className="text-blue_gray-900 text-sm"
                      size="txtLatoBold14"
                    >
                      Package Name
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[457px] text-blue_gray-900 text-sm"
                      size="txtLatoBold14"
                    >
                      No. of Verification Voucher
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[79px] text-blue_gray-900 text-sm"
                      size="txtLatoBold14"
                    >
                      Amount (USD)
                    </Text>
                    <Text
                      className="ml-20 md:ml-[0] text-blue_gray-900 text-sm"
                      size="txtLatoBold14"
                    >
                      Last Updated Date
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[119px] text-blue_gray-900 text-sm"
                      size="txtLatoBold14"
                    >
                      Actions
                    </Text>
                  </div>
                </div>
                <div className="sm:h-[172px] h-[174px] md:h-[759px] mt-2.5 relative w-full">
                  <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
                    <div className="flex flex-col gap-[49px] items-center justify-start w-full">
                      <Line className="bg-gray-200 h-px w-full" />
                      <Line className="bg-gray-200 h-px w-full" />
                      <Line className="bg-gray-200 h-px w-full" />
                    </div>
                  </div>
                  <List
                    className="absolute flex flex-col gap-[31px] inset-[0] items-center justify-center m-auto w-[95%]"
                    orientation="vertical"
                  >
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                      <Text
                        className="text-blue_gray-900 text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        Arrow
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[669px] text-blue_gray-900 text-right text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        3
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[161px] text-blue_gray-900 text-right text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        3
                      </Text>
                      <Text
                        className="ml-20 md:ml-[0] text-blue_gray-900 text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        19 Jul, 2023
                      </Text>
                      <div className="flex md:flex-1 flex-row gap-4 items-center justify-between md:ml-[0] ml-[161px] w-[4%] md:w-full">
                        <Img
                          className="h-4 w-4"
                          src="images/img_edit_blue_gray_900.svg"
                          alt="edit"
                        />
                        <Img
                          className="h-4 w-4"
                          src="images/img_thumbsup.svg"
                          alt="thumbsup"
                        />
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                      <Text
                        className="text-blue_gray-900 text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        Super
                      </Text>
                      <Text
                        className="h-[17px] md:ml-[0] ml-[664px] text-blue_gray-900 text-right text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        50
                      </Text>
                      <Text
                        className="h-[17px] md:ml-[0] ml-[153px] text-blue_gray-900 text-right text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        50
                      </Text>
                      <Text
                        className="ml-20 md:ml-[0] text-blue_gray-900 text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        27 Jun, 2023
                      </Text>
                      <div className="flex md:flex-1 flex-row gap-4 items-center justify-between md:ml-[0] ml-[157px] w-[4%] md:w-full">
                        <Img
                          className="h-4 w-4"
                          src="images/img_edit_blue_gray_900.svg"
                          alt="edit"
                        />
                        <Img
                          className="h-4 w-4"
                          src="images/img_thumbsup.svg"
                          alt="thumbsup"
                        />
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                      <Text
                        className="text-blue_gray-900 text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        Advance
                      </Text>
                      <Text
                        className="h-[17px] md:ml-[0] ml-[647px] text-blue_gray-900 text-right text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        25
                      </Text>
                      <Text
                        className="h-[17px] md:ml-[0] ml-[153px] text-blue_gray-900 text-right text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        25
                      </Text>
                      <Text
                        className="ml-20 md:ml-[0] text-blue_gray-900 text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        27 Jun, 2023
                      </Text>
                      <div className="flex md:flex-1 flex-row gap-4 items-center justify-between md:ml-[0] ml-[157px] w-[4%] md:w-full">
                        <Img
                          className="h-4 w-4"
                          src="images/img_edit_blue_gray_900.svg"
                          alt="edit"
                        />
                        <Img
                          className="h-4 w-4"
                          src="images/img_thumbsup.svg"
                          alt="thumbsup"
                        />
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                      <Text
                        className="text-blue_gray-900 text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        Standard
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[646px] text-blue_gray-900 text-right text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        12
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[154px] text-blue_gray-900 text-right text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        12
                      </Text>
                      <Text
                        className="ml-20 md:ml-[0] text-blue_gray-900 text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        08 Dec, 2022
                      </Text>
                      <div className="flex md:flex-1 flex-row gap-4 items-center justify-between md:ml-[0] ml-[153px] w-[4%] md:w-full">
                        <Img
                          className="h-4 w-4"
                          src="images/img_edit_blue_gray_900.svg"
                          alt="edit"
                        />
                        <Img
                          className="h-4 w-4"
                          src="images/img_thumbsup.svg"
                          alt="thumbsup"
                        />
                      </div>
                    </div>
                  </List>
                  <Line className="absolute bg-blue_gray-900_6c h-40 right-[0] rounded-sm top-[0] w-1" />
                </div>
                <Line className="bg-gray-200 h-px mt-3.5 w-full" />
              </div>
            </div>
            <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1326px] mx-auto md:px-5 w-full">
              <div className="flex sm:flex-1 flex-row gap-2 items-end justify-between w-[13%] sm:w-full">
                <Text
                  className="my-[7px] text-base text-blue_gray-900"
                  size="txtLatoRegular16"
                >
                  Rows
                </Text>
                <Button
                  className="border border-gray-400 border-solid cursor-pointer flex items-center justify-center min-w-[55px]"
                  rightIcon={
                    <Img
                      className="h-3 mt-[3px] mb-1 ml-1"
                      src="images/img_arrowdown_blue_gray_900.svg"
                      alt="arrow_down"
                    />
                  }
                  size="sm"
                >
                  <div className="!text-blue_gray-900 leading-[normal] text-base text-left">
                    10
                  </div>
                </Button>
                <Text
                  className="mb-1 mt-[11px] text-base text-blue_gray-900"
                  size="txtLatoRegular16"
                >
                  per page
                </Text>
              </div>
              <div className="flex sm:flex-1 flex-row gap-[34px] items-center justify-between w-1/4 sm:w-full">
                <Text
                  className="text-gray-700 text-right text-sm"
                  size="txtLatoRegular14"
                >
                  Result: 1 - 10 of 112
                </Text>
                <div className="flex flex-row gap-[15px] items-center justify-between w-[51%]">
                  <Img
                    className="h-7 w-7"
                    src="images/img_arrowleft_gray_700.svg"
                    alt="arrowleft"
                  />
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="text-base text-center text-gray-700"
                      size="txtLatoRegular16Gray700"
                    >
                      1
                    </Text>
                  </div>
                  <Text
                    className="bg-gray-400_7f flex h-7 items-center justify-center rounded-[50%] text-base text-blue_gray-900 text-center w-7"
                    size="txtLatoRegular16"
                  >
                    2
                  </Text>
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="text-base text-center text-gray-700"
                      size="txtLatoRegular16Gray700"
                    >
                      3
                    </Text>
                  </div>
                  <Img
                    className="h-7 w-7"
                    src="images/img_arrowright_gray_700.svg"
                    alt="arrowright"
                  />
                </div>
              </div>
            </div>
            <Footer className="bg-white-A700 flex font-barlow items-center justify-center md:px-5 w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPackagesPage;

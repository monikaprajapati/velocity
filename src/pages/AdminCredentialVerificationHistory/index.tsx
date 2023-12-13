import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import Footer from "components/Footer";
import Header2 from "components/Header2";

const AdminCredentialVerificationHistoryPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-lato items-center justify-start mx-auto w-full">
        <div className="bg-gray-100 flex flex-col items-center justify-start w-full">
          <div className="flex flex-col gap-5 items-center justify-start w-full">
            <Header2 className="bg-black-900 flex flex-col items-center justify-center md:px-5 w-full" />
            <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between max-w-[1326px] mx-auto md:px-5 w-full">
              <Text
                className="sm:mt-0 mt-1 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtBarlowMedium24Black900"
              >
                Credentials Verification Report (618)
              </Text>
              <Input
                name="search"
                placeholder="Search"
                className="!placeholder:text-gray-400 !text-gray-400 font-lato p-0 text-left text-sm w-full"
                wrapClassName="border border-blue_gray-100 border-solid flex sm:flex-1 sm:w-full"
                suffix={
                  <Img
                    className="mt-px mb-0.5 h-3.5 ml-[35px]"
                    src="images/img_contrast_gray_400.svg"
                    alt="contrast"
                  />
                }
                size="sm"
              ></Input>
            </div>
            <div className="bg-white-A700 border border-gray-400 border-solid flex flex-col items-center justify-start max-w-[1326px] mx-auto pb-[170px] md:px-5 rounded-lg w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="bg-gray-200 border border-gray-400 border-solid flex flex-row items-center justify-start p-[15px] rounded-tl-lg rounded-tr-lg w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start ml-2 mt-0.5 w-[95%]">
                    <Text
                      className="text-blue_gray-900 text-sm"
                      size="txtLatoBold14"
                    >
                      Name
                    </Text>
                    <Text
                      className="ml-48 md:ml-[0] text-blue_gray-900 text-sm"
                      size="txtLatoBold14"
                    >
                      Organization
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[342px] text-blue_gray-900 text-sm"
                      size="txtLatoBold14"
                    >
                      Registered On
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[140px] text-blue_gray-900 text-sm"
                      size="txtLatoBold14"
                    >
                      Last Verification Date
                    </Text>
                    <Text
                      className="ml-20 md:ml-[0] text-blue_gray-900 text-sm"
                      size="txtLatoBold14"
                    >
                      Last Verification Date
                    </Text>
                  </div>
                </div>
                <div className="md:h-[174px] h-[175px] sm:h-[764px] mt-2.5 relative w-full">
                  <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
                    <div className="flex flex-col gap-[49px] items-center justify-start w-full">
                      <Line className="bg-gray-200 h-px w-full" />
                      <Line className="bg-gray-200 h-px w-full" />
                      <Line className="bg-gray-200 h-px w-full" />
                    </div>
                  </div>
                  <List
                    className="absolute flex flex-col gap-[30px] inset-[0] items-center justify-center m-auto w-[95%]"
                    orientation="vertical"
                  >
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                      <Text
                        className="text-blue-800 text-sm underline"
                        size="txtLatoRegular14Blue800"
                      >
                        Peter Strauss
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[148px] text-blue_gray-900 text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        Azilen Technology
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[312px] text-blue_gray-900 text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        15 Dec, 2022 12:17 PM
                      </Text>
                      <Text
                        className="h-[17px] sm:ml-[0] ml-[199px] text-blue_gray-900 text-right text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        66
                      </Text>
                      <Text
                        className="ml-20 sm:ml-[0] text-blue_gray-900 text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        30 May, 2023 06:17 PM
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                      <Text
                        className="sm:mt-0 mt-0.5 text-blue-800 text-sm underline"
                        size="txtLatoRegular14Blue800"
                      >
                        Kin Kam
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[177px] text-blue_gray-900 text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        Azilen Technology
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[312px] text-blue_gray-900 text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        22 Nov, 2022 04:45 PM
                      </Text>
                      <Text
                        className="h-[17px] mb-0.5 sm:ml-[0] ml-[198px] text-blue_gray-900 text-right text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        82
                      </Text>
                      <Text
                        className="ml-20 sm:ml-[0] text-blue_gray-900 text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        28 Apr, 2023 10:02 AM
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                      <Text
                        className="sm:mt-0 mt-0.5 text-blue-800 text-sm underline"
                        size="txtLatoRegular14Blue800"
                      >
                        Natalia Pyvovartseva
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[100px] text-blue_gray-900 text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        VCL
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[397px] text-blue_gray-900 text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        07 Jun, 2023 11:31 AM
                      </Text>
                      <Text
                        className="mb-0.5 sm:ml-[0] ml-[203px] text-blue_gray-900 text-right text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        12
                      </Text>
                      <Text
                        className="ml-20 sm:ml-[0] text-blue_gray-900 text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        26 Jun, 2023 05:31 PM
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                      <Text
                        className="text-blue-800 text-sm underline"
                        size="txtLatoRegular14Blue800"
                      >
                        Andrei Buslovich
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[125px] text-blue_gray-900 text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        VCL
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[397px] text-blue_gray-900 text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        07 Jun, 2023 03:24 PM
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[203px] text-blue_gray-900 text-right text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        13
                      </Text>
                      <Text
                        className="ml-20 sm:ml-[0] text-blue_gray-900 text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        21 Aug, 2023 06:30 PM
                      </Text>
                    </div>
                  </List>
                  <Line className="absolute bg-blue_gray-900_6c h-40 right-[0] rounded-sm top-[0] w-1" />
                </div>
                <Line className="bg-gray-200 h-px mt-[13px] w-full" />
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-4 w-[94%] md:w-full">
                  <Text
                    className="md:mt-0 mt-0.5 text-blue-800 text-sm underline"
                    size="txtLatoRegular14Blue800"
                  >
                    Dynamic User
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[142px] text-blue_gray-900 text-sm"
                    size="txtLatoRegular14Bluegray900"
                  >
                    DU
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[402px] text-blue_gray-900 text-sm"
                    size="txtLatoRegular14Bluegray900"
                  >
                    18 Jul, 2023 06:31 PM
                  </Text>
                  <Text
                    className="mb-0.5 md:ml-[0] ml-[215px] text-blue_gray-900 text-right text-sm"
                    size="txtLatoRegular14Bluegray900"
                  >
                    8
                  </Text>
                  <Text
                    className="ml-20 md:ml-[0] text-blue_gray-900 text-sm"
                    size="txtLatoRegular14Bluegray900"
                  >
                    18 Jul, 2023 06:39 PM
                  </Text>
                </div>
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

export default AdminCredentialVerificationHistoryPage;

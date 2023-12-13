import React from "react";

import { Button, Img, Input, Line, List, Switch, Text } from "components";
import Footer from "components/Footer";
import Header2 from "components/Header2";

const AdminUsersPage: React.FC = () => {
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
                User Management
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
            <div className="bg-white-A700 border border-gray-400 border-solid flex flex-col items-center justify-start max-w-[1326px] mx-auto pb-[206px] md:px-5 rounded-lg w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="bg-gray-200 border border-gray-400 border-solid flex flex-row items-center justify-start p-[15px] rounded-tl-lg rounded-tr-lg w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start ml-2 mt-0.5 w-[96%]">
                    <Text
                      className="text-blue_gray-900 text-sm"
                      size="txtLatoBold14"
                    >
                      Name
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[273px] text-blue_gray-900 text-sm"
                      size="txtLatoBold14"
                    >
                      Email
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[245px] text-blue_gray-900 text-sm"
                      size="txtLatoBold14"
                    >
                      Organization
                    </Text>
                    <Text
                      className="ml-20 md:ml-[0] text-blue_gray-900 text-sm"
                      size="txtLatoBold14"
                    >
                      Registered On
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[166px] text-blue_gray-900 text-sm"
                      size="txtLatoBold14"
                    >
                      Available Vouchers
                    </Text>
                    <Text
                      className="ml-20 md:ml-[0] text-blue_gray-900 text-sm"
                      size="txtLatoBold14"
                    >
                      Status
                    </Text>
                  </div>
                </div>
                <div className="sm:h-44 h-[175px] md:h-[912px] mt-2.5 relative w-full">
                  <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
                    <div className="flex flex-col gap-[49px] items-center justify-start w-full">
                      <Line className="bg-gray-200 h-px w-full" />
                      <Line className="bg-gray-200 h-px w-full" />
                      <Line className="bg-gray-200 h-px w-full" />
                    </div>
                  </div>
                  <List
                    className="absolute flex flex-col gap-[30px] inset-[0] items-center justify-center m-auto w-[94%]"
                    orientation="vertical"
                  >
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                      <Text
                        className="md:mt-0 mt-0.5 text-blue-800 text-sm underline"
                        size="txtLatoRegular14Blue800"
                      >
                        Kin Kam
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[258px] text-blue_gray-900 text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        azi1@gmail.com
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[180px] text-blue_gray-900 text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        Azilen
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[123px] text-blue_gray-900 text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        2023-08-16T13:14:39.593Z
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[189px] text-blue_gray-900 text-right text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        5
                      </Text>
                      <Switch
                        onColor="#47b13d"
                        offColor="#47b13d"
                        onHandleColor="#ffffff"
                        offHandleColor="#ffffff"
                        value={true}
                        className="ml-20 md:ml-[0] w-[3%]"
                      />
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                      <Text
                        className="md:mt-0 mt-0.5 text-blue-800 text-sm underline"
                        size="txtLatoRegular14Blue800"
                      >
                        VCL User
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[252px] text-blue_gray-900 text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        azi1@gmail.com
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[180px] text-blue_gray-900 text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        Azilen
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[123px] text-blue_gray-900 text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        2023-08-16T13:14:39.593Z
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[189px] text-blue_gray-900 text-right text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        5
                      </Text>
                      <Switch
                        onColor="#47b13d"
                        offColor="#47b13d"
                        onHandleColor="#ffffff"
                        offHandleColor="#ffffff"
                        value={true}
                        className="ml-20 md:ml-[0] w-[3%]"
                      />
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                      <Text
                        className="md:mt-0 mt-0.5 text-blue-800 text-sm underline"
                        size="txtLatoRegular14Blue800"
                      >
                        Dynamic User
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[223px] text-blue_gray-900 text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        azi1@gmail.com
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[180px] text-blue_gray-900 text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        Azilen
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[123px] text-blue_gray-900 text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        2023-08-16T13:14:39.593Z
                      </Text>
                      <Text
                        className="h-[17px] md:ml-[0] ml-[181px] text-blue_gray-900 text-right text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        27
                      </Text>
                      <Switch
                        onColor="#47b13d"
                        offColor="#47b13d"
                        onHandleColor="#ffffff"
                        offHandleColor="#ffffff"
                        value={true}
                        className="ml-20 md:ml-[0] w-[3%]"
                      />
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                      <Text
                        className="md:mt-0 mt-0.5 text-blue-800 text-sm underline"
                        size="txtLatoRegular14Blue800"
                      >
                        First Last
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[253px] text-blue_gray-900 text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        azi1@gmail.com
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[180px] text-blue_gray-900 text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        Azilen
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[123px] text-blue_gray-900 text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        2023-08-16T13:14:39.593Z
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[189px] text-blue_gray-900 text-right text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        6
                      </Text>
                      <Switch
                        onColor="#47b13d"
                        offColor="#47b13d"
                        onHandleColor="#ffffff"
                        offHandleColor="#ffffff"
                        value={true}
                        className="ml-20 md:ml-[0] w-[3%]"
                      />
                    </div>
                  </List>
                  <Line className="absolute bg-blue_gray-900_6c h-40 right-[0] rounded-sm top-[0] w-1" />
                </div>
                <Line className="bg-gray-200 h-px mt-[13px] w-full" />
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

export default AdminUsersPage;

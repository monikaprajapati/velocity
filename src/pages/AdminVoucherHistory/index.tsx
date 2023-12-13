import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import Footer from "components/Footer";
import Header2 from "components/Header2";

const AdminVoucherHistoryPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-lato items-center justify-start mx-auto w-full">
        <div className="bg-gray-100 flex flex-col items-center justify-start w-full">
          <div className="flex flex-col gap-5 items-center justify-start w-full">
            <Header2 className="bg-black-900 flex flex-col items-center justify-center md:px-5 w-full" />
            <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start max-w-[1326px] mx-auto md:px-5 w-full">
              <Text
                className="md:mt-0 mt-[5px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtBarlowMedium24Black900"
              >
                Voucher History
              </Text>
              <Input
                name="search"
                placeholder="Search"
                className="!placeholder:text-gray-400 !text-gray-400 font-lato p-0 text-left text-sm w-full"
                wrapClassName="border border-blue_gray-100 border-solid flex md:flex-1 md:ml-[0] ml-[804px] w-[23%] md:w-full"
                suffix={
                  <Img
                    className="mt-px mb-0.5 h-3.5 ml-[35px]"
                    src="images/img_contrast_gray_400.svg"
                    alt="contrast"
                  />
                }
                size="sm"
              ></Input>
              <Button
                className="flex h-[34px] items-center justify-center ml-5 md:ml-[0] w-[34px]"
                color="blue_gray_900"
                size="sm"
              >
                <Img className="h-4" src="images/img_user.svg" alt="user" />
              </Button>
            </div>
            <div className="bg-white-A700 border border-gray-400 border-solid flex flex-col items-center justify-start max-w-[1326px] mx-auto pb-[170px] md:px-5 rounded-lg w-full">
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
                      className="ml-36 md:ml-[0] text-blue_gray-900 text-sm"
                      size="txtLatoBold14"
                    >
                      Organization
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[150px] text-blue_gray-900 text-sm"
                      size="txtLatoBold14"
                    >
                      Package Name
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[131px] text-blue_gray-900 text-sm"
                      size="txtLatoBold14"
                    >
                      No. of Voucher
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[79px] text-blue_gray-900 text-sm"
                      size="txtLatoBold14"
                    >
                      Amount (USD)
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[70px] text-blue_gray-900 text-sm"
                      size="txtLatoBold14"
                    >
                      Timestamp
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[166px] text-blue_gray-900 text-sm"
                      size="txtLatoBold14"
                    >
                      Status
                    </Text>
                  </div>
                </div>
                <div className="h-[175px] md:h-[628px] sm:h-[632px] mt-2.5 relative w-full">
                  <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
                    <div className="flex flex-col gap-[49px] items-center justify-start w-full">
                      <Line className="bg-gray-200 h-px w-full" />
                      <Line className="bg-gray-200 h-px w-full" />
                      <Line className="bg-gray-200 h-px w-full" />
                    </div>
                  </div>
                  <List
                    className="absolute flex flex-col gap-[30px] inset-[0] items-center justify-center m-auto w-[96%]"
                    orientation="vertical"
                  >
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[98%] md:w-full">
                      <Text
                        className="md:mt-0 mt-0.5 text-blue-800 text-sm underline"
                        size="txtLatoRegular14Blue800"
                      >
                        Peter Strauss
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[100px] text-blue_gray-900 text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        Azilen Technology
                      </Text>
                      <Text
                        className="mb-0.5 md:ml-[0] ml-[120px] text-blue_gray-900 text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        Credential Verified
                      </Text>
                      <Text
                        className="mb-0.5 md:ml-[0] ml-[188px] text-blue_gray-900 text-right text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        -1
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[164px] text-blue_gray-900 text-right text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        -
                      </Text>
                      <Text
                        className="mb-0.5 md:ml-[0] ml-[70px] text-blue_gray-900 text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        2023-09-12T06:31:32.099Z
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[60px] text-blue_gray-900 text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        Spent
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                      <Text
                        className="sm:mt-0 mt-0.5 text-blue-800 text-sm underline"
                        size="txtLatoRegular14Blue800"
                      >
                        Peter Strauss
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[100px] text-blue_gray-900 text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        Azilen Technology
                      </Text>
                      <Text
                        className="mb-0.5 sm:ml-[0] ml-[120px] text-blue_gray-900 text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        Standard
                      </Text>
                      <Text
                        className="mb-0.5 sm:ml-[0] ml-[245px] text-blue_gray-900 text-right text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        12
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[164px] text-blue_gray-900 text-right text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        -
                      </Text>
                      <Text
                        className="mb-0.5 sm:ml-[0] ml-[70px] text-blue_gray-900 text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        2023-09-10T11:31:47.714Z
                      </Text>
                      <Text
                        className="mb-0.5 sm:ml-[0] ml-[60px] text-blue_gray-900 text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        Purchased
                      </Text>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[98%] md:w-full">
                      <Text
                        className="md:mt-0 mt-0.5 text-blue-800 text-sm underline"
                        size="txtLatoRegular14Blue800"
                      >
                        Peter Strauss
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[100px] text-blue_gray-900 text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        Azilen Technology
                      </Text>
                      <Text
                        className="mb-0.5 md:ml-[0] ml-[120px] text-blue_gray-900 text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        Credential Verified
                      </Text>
                      <Text
                        className="mb-0.5 md:ml-[0] ml-[188px] text-blue_gray-900 text-right text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        -1
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[164px] text-blue_gray-900 text-right text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        -
                      </Text>
                      <Text
                        className="mb-0.5 md:ml-[0] ml-[70px] text-blue_gray-900 text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        2023-09-10T11:28:33.584Z
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[60px] text-blue_gray-900 text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        Spent
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                      <Text
                        className="sm:mt-0 mt-0.5 text-blue-800 text-sm underline"
                        size="txtLatoRegular14Blue800"
                      >
                        Peter Strauss
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[100px] text-blue_gray-900 text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        Azilen Technology
                      </Text>
                      <Text
                        className="mb-0.5 sm:ml-[0] ml-[120px] text-blue_gray-900 text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        Standard
                      </Text>
                      <Text
                        className="mb-0.5 sm:ml-[0] ml-[245px] text-blue_gray-900 text-right text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        12
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[164px] text-blue_gray-900 text-right text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        -
                      </Text>
                      <Text
                        className="mb-0.5 sm:ml-[0] ml-[70px] text-blue_gray-900 text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        2023-09-10T11:31:47.714Z
                      </Text>
                      <Text
                        className="mb-0.5 sm:ml-[0] ml-[60px] text-blue_gray-900 text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        Purchased
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
                    Peter Strauss
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[100px] text-blue_gray-900 text-sm"
                    size="txtLatoRegular14Bluegray900"
                  >
                    Azilen Technology
                  </Text>
                  <Text
                    className="mb-0.5 md:ml-[0] ml-[120px] text-blue_gray-900 text-sm"
                    size="txtLatoRegular14Bluegray900"
                  >
                    Credential Verified
                  </Text>
                  <Text
                    className="mb-0.5 md:ml-[0] ml-[188px] text-blue_gray-900 text-right text-sm"
                    size="txtLatoRegular14Bluegray900"
                  >
                    -1
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[164px] text-blue_gray-900 text-right text-sm"
                    size="txtLatoRegular14Bluegray900"
                  >
                    -
                  </Text>
                  <Text
                    className="mb-0.5 md:ml-[0] ml-[70px] text-blue_gray-900 text-sm"
                    size="txtLatoRegular14Bluegray900"
                  >
                    2023-09-10T11:28:33.584Z
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[60px] text-blue_gray-900 text-sm"
                    size="txtLatoRegular14Bluegray900"
                  >
                    Spent
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

export default AdminVoucherHistoryPage;

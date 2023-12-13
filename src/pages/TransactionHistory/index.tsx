import React from "react";

import { Button, Img, Line, Text } from "components";
import Footer from "components/Footer";
import Header1 from "components/Header1";

const TransactionHistoryPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 font-lato h-[943px] mx-auto relative w-full">
        <div className="absolute bg-gray-100 flex flex-col h-max inset-[0] items-center justify-center m-auto pb-[98px] w-full">
          <div className="flex flex-col gap-[25px] items-center justify-start w-full">
            <Header1 className="bg-black-900 flex flex-col items-center justify-center md:px-5 w-full" />
            <div className="flex flex-col font-barlow items-start justify-start max-w-[1170px] mx-auto md:px-5 w-full">
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtBarlowMedium24Black900"
              >
                Manage Account
              </Text>
              <div className="flex flex-col font-lato items-center justify-start mt-[17px] w-full">
                <div className="flex flex-col gap-2 justify-start w-full">
                  <div className="flex flex-row gap-8 items-center justify-start ml-4 md:ml-[0] w-[29%] md:w-full">
                    <Text
                      className="text-gray-700 text-sm"
                      size="txtLatoRegular14"
                    >
                      My Profile
                    </Text>
                    <Text
                      className="text-black-900 text-sm"
                      size="txtLatoRegular14Black900"
                    >
                      Transaction History
                    </Text>
                    <Text
                      className="text-gray-700 text-sm"
                      size="txtLatoRegular14"
                    >
                      Billing Address
                    </Text>
                  </div>
                  <div className="h-0.5 relative w-full">
                    <Line className="absolute bg-gray-400 bottom-[0] h-px inset-x-[0] mx-auto w-full" />
                    <Line className="absolute bg-black-900 h-0.5 inset-y-[0] left-[9%] my-auto w-[11%]" />
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row font-lato gap-[30px] items-start justify-between mt-6 w-full">
                <div className="flex md:flex-1 flex-col gap-5 items-center justify-start w-3/4 md:w-full">
                  <div className="bg-white-A700 border border-gray-400 border-solid flex flex-col gap-4 items-center justify-start pb-[275px] rounded-lg w-full">
                    <div className="h-[222px] md:h-[404px] sm:h-[456px] relative w-full">
                      <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
                        <div className="flex flex-col items-start justify-start w-full">
                          <div className="bg-gray-200 border border-gray-400 border-solid flex sm:flex-col flex-row sm:gap-5 items-center justify-start p-5 rounded-tl-lg rounded-tr-lg w-full">
                            <Text
                              className="text-blue_gray-900 text-sm"
                              size="txtLatoBold14"
                            >
                              <>
                                Transaction
                                <br />
                                Type
                              </>
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[193px] text-blue_gray-900 text-sm"
                              size="txtLatoBold14"
                            >
                              <>
                                No. of
                                <br />
                                Voucher
                              </>
                            </Text>
                            <Text
                              className="ml-10 sm:ml-[0] text-blue_gray-900 text-sm"
                              size="txtLatoBold14"
                            >
                              <>
                                Payment
                                <br />
                                ($)
                              </>
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[91px] text-blue_gray-900 text-sm"
                              size="txtLatoBold14"
                            >
                              Date
                            </Text>
                            <Text
                              className="ml-10 sm:ml-[0] text-blue_gray-900 text-sm"
                              size="txtLatoBold14"
                            >
                              <>
                                Transaction
                                <br />
                                Status
                              </>
                            </Text>
                            <Text
                              className="ml-10 sm:ml-[0] text-blue_gray-900 text-sm"
                              size="txtLatoBold14"
                            >
                              Receipt
                            </Text>
                            <Text
                              className="ml-10 sm:ml-[0] text-blue_gray-900 text-sm"
                              size="txtLatoBold14"
                            >
                              Invoice
                            </Text>
                          </div>
                          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start ml-5 md:ml-[0] mt-[18px] w-[92%] md:w-full">
                            <Text
                              className="text-blue_gray-900 text-sm"
                              size="txtLatoRegular14Bluegray900"
                            >
                              Credential Verified
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[196px] text-blue_gray-900 text-right text-sm"
                              size="txtLatoRegular14Bluegray900"
                            >
                              1
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[89px] text-blue_gray-900 text-right text-sm"
                              size="txtLatoRegular14Bluegray900"
                            >
                              -
                            </Text>
                            <Text
                              className="ml-10 md:ml-[0] text-blue_gray-900 text-sm"
                              size="txtLatoRegular14Bluegray900"
                            >
                              05 Sep, 2023
                            </Text>
                            <Text
                              className="ml-10 md:ml-[0] text-blue_gray-900 text-sm"
                              size="txtLatoRegular14Bluegray900"
                            >
                              Spent
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[77px] text-blue_gray-900 text-center text-sm"
                              size="txtLatoRegular14Bluegray900"
                            >
                              N/A
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[74px] text-blue_gray-900 text-center text-sm"
                              size="txtLatoRegular14Bluegray900"
                            >
                              -
                            </Text>
                          </div>
                          <Line className="bg-gray-200 h-px mt-[17px] w-full" />
                          <Line className="bg-gray-200 h-px mt-[54px] w-full" />
                        </div>
                      </div>
                      <div className="absolute bottom-1/4 flex md:flex-col flex-row md:gap-5 items-start justify-start left-[2%] w-[92%]">
                        <Text
                          className="text-blue_gray-900 text-sm"
                          size="txtLatoRegular14Bluegray900"
                        >
                          Credential Verified
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[196px] text-blue_gray-900 text-right text-sm"
                          size="txtLatoRegular14Bluegray900"
                        >
                          1
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[89px] text-blue_gray-900 text-right text-sm"
                          size="txtLatoRegular14Bluegray900"
                        >
                          -
                        </Text>
                        <Text
                          className="ml-10 md:ml-[0] text-blue_gray-900 text-sm"
                          size="txtLatoRegular14Bluegray900"
                        >
                          05 Sep, 2023
                        </Text>
                        <Text
                          className="ml-10 md:ml-[0] text-blue_gray-900 text-sm"
                          size="txtLatoRegular14Bluegray900"
                        >
                          Spent
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[77px] text-blue_gray-900 text-center text-sm"
                          size="txtLatoRegular14Bluegray900"
                        >
                          N/A
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[74px] text-blue_gray-900 text-center text-sm"
                          size="txtLatoRegular14Bluegray900"
                        >
                          -
                        </Text>
                      </div>
                      <div className="absolute bottom-[0] flex md:flex-col flex-row md:gap-5 inset-x-[0] items-start justify-start mx-auto w-[93%]">
                        <Text
                          className="text-blue_gray-900 text-sm"
                          size="txtLatoRegular14Bluegray900"
                        >
                          Package Purchased: Arrow
                        </Text>
                        <Text
                          className="mb-[3px] md:ml-[0] ml-[146px] text-blue_gray-900 text-right text-sm"
                          size="txtLatoRegular14Bluegray900"
                        >
                          3
                        </Text>
                        <Text
                          className="mb-[3px] md:ml-[0] ml-[86px] text-blue_gray-900 text-right text-sm"
                          size="txtLatoRegular14Bluegray900"
                        >
                          3
                        </Text>
                        <Text
                          className="ml-10 md:ml-[0] text-blue_gray-900 text-sm"
                          size="txtLatoRegular14Bluegray900"
                        >
                          05 Sep, 2023
                        </Text>
                        <Text
                          className="mb-[3px] ml-10 md:ml-[0] text-blue_gray-900 text-sm"
                          size="txtLatoRegular14Bluegray900"
                        >
                          Purchased
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[46px] md:mt-0 mt-[3px] text-blue-800 text-center text-sm underline"
                          size="txtLatoRegular14Blue800"
                        >
                          View
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[58px] md:mt-0 mt-[3px] text-blue-800 text-center text-sm underline"
                          size="txtLatoRegular14Blue800"
                        >
                          View
                        </Text>
                      </div>
                      <Line className="absolute bg-blue_gray-900_6c bottom-[0] h-40 right-[1%] rounded-sm w-1" />
                    </div>
                    <Line className="bg-gray-200 h-px w-full" />
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                    <div className="flex sm:flex-1 flex-row gap-2 items-end justify-between w-1/5 sm:w-full">
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
                    <div className="flex sm:flex-1 flex-row gap-[34px] items-center justify-between w-[38%] sm:w-full">
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
                </div>
                <div className="flex md:flex-1 flex-col gap-5 items-start justify-start w-[24%] md:w-full">
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
                          <div className="absolute bottom-[10%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-3/4">
                            <Img
                              className="h-9"
                              src="images/img_close_gray_400.svg"
                              alt="close"
                            />
                            <Text
                              className="capitalize mt-[21px] text-center text-lg text-white-A700"
                              size="txtLatoRegular18"
                            >
                              Available Vouchers
                            </Text>
                            <Text
                              className="capitalize mt-[9px] md:text-5xl text-[64px] text-center text-yellow-A700"
                              size="txtLatoBold64"
                            >
                              1
                            </Text>
                            <div className="flex flex-col gap-[39px] items-center justify-start mt-[15px] w-full">
                              <Line className="bg-gray-400_87 h-px w-full" />
                              <Button className="cursor-pointer min-w-[202px] text-base text-center">
                                Buy More
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col font-barlow items-center justify-start w-full">
                    <div className="bg-gray-100 flex flex-col items-center justify-start rounded-lg w-full">
                      <div className="bg-gradient2  border border-solid gray_400_00_gray_400_00_border2 md:h-[188px] h-[190px] relative rounded-lg w-full">
                        <div className="absolute h-[188px] inset-[0] justify-center m-auto w-full">
                          <Img
                            className="h-[188px] m-auto object-cover rounded-[7px] w-full"
                            src="images/img_noise_188x268.png"
                            alt="noise_One"
                          />
                          <div className="absolute flex flex-col gap-8 inset-x-[0] items-start justify-start mx-auto top-[12%] w-[83%]">
                            <div className="flex flex-row items-start justify-between w-full">
                              <Text
                                className="text-blue_gray-900 text-lg"
                                size="txtBarlowSemiBold18"
                              >
                                Payment Method
                              </Text>
                              <Img
                                className="h-4 w-4"
                                src="images/img_edit_blue_gray_900.svg"
                                alt="edit"
                              />
                            </div>
                            <Text
                              className="text-gray-700 text-xl tracking-[1.20px]"
                              size="txtBarlowMedium20Gray700"
                            >
                              xxxx xxxx xxxx 1234
                            </Text>
                          </div>
                        </div>
                        <div className="absolute bg-gray-400_70 bottom-[0] flex flex-row font-lato inset-x-[0] items-center justify-between mx-auto p-[13px] rounded-bl-lg rounded-br-lg w-full">
                          <Text
                            className="ml-2.5 text-gray-700 text-sm"
                            size="txtLatoBold14Gray700"
                          >
                            Exp 05/27
                          </Text>
                          <Text
                            className="italic mr-2.5 text-base text-gray-700 uppercase"
                            size="txtLatoBlackItalic16"
                          >
                            Visa
                          </Text>
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
            </div>
          </div>
        </div>
        <Footer className="absolute bg-white-A700 bottom-[0] flex font-barlow inset-x-[0] items-center justify-center mx-auto md:px-5 w-full" />
      </div>
    </>
  );
};

export default TransactionHistoryPage;

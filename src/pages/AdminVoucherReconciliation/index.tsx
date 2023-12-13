import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import Footer from "components/Footer";
import Header2 from "components/Header2";

const AdminVoucherReconciliationPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto w-full">
        <div className="bg-gray-100 flex flex-col items-start justify-start w-full">
          <Header2 className="bg-black-900 flex flex-col font-lato items-center justify-center md:px-5 w-full" />
          <Text
            className="ml-5 md:ml-[0] mt-[23px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
            size="txtBarlowMedium24Black900"
          >
            Add / Remove Verification Vouchers
          </Text>
          <div className="bg-white-A700 border border-gray-200 border-solid flex flex-col font-lato items-end justify-end max-w-[1326px] mt-5 mx-auto p-[30px] md:px-5 rounded-lg w-full">
            <div className="flex flex-col gap-[30px] justify-start w-[81%] md:w-full">
              <div className="flex flex-col gap-[23px] items-center justify-start mr-[248px] w-[76%] md:w-full">
                <div className="flex flex-col gap-[21px] items-start justify-start w-full">
                  <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-full">
                    <div className="flex md:flex-1 flex-col gap-[7px] items-start justify-start w-[49%] md:w-full">
                      <Text
                        className="text-gray-700 text-sm"
                        size="txtLatoRegular14"
                      >
                        <span className="text-gray-700 font-lato text-left font-normal">
                          Name
                        </span>
                        <span className="text-gray-700 font-lato text-left font-normal">
                          {" "}
                        </span>
                        <span className="text-red-400 font-lato text-left font-normal">
                          *
                        </span>
                      </Text>
                      <Input
                        name="groupEightySeven"
                        placeholder=""
                        className="p-0 w-full"
                        wrapClassName="border border-gray-400 border-solid flex w-full"
                        suffix={
                          <Img
                            className="h-6 ml-[35px] my-auto"
                            src="images/img_checkmark_blue_gray_900.svg"
                            alt="checkmark"
                          />
                        }
                        size="md"
                      ></Input>
                    </div>
                    <div className="flex md:flex-1 flex-col gap-1.5 items-start justify-start w-[49%] md:w-full">
                      <Text
                        className="text-gray-700 text-sm"
                        size="txtLatoRegular14"
                      >
                        <span className="text-gray-700 font-lato text-left font-normal">
                          Type of Operation
                        </span>
                        <span className="text-gray-700 font-lato text-left font-normal">
                          {" "}
                        </span>
                        <span className="text-red-400 font-lato text-left font-normal">
                          *
                        </span>
                      </Text>
                      <Input
                        name="groupEightyEight"
                        placeholder=""
                        className="p-0 w-full"
                        wrapClassName="border border-gray-400 border-solid flex w-full"
                        suffix={
                          <Img
                            className="h-6 ml-[35px] my-auto"
                            src="images/img_checkmark_blue_gray_900.svg"
                            alt="checkmark"
                          />
                        }
                        size="md"
                      ></Input>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[7px] items-start justify-start w-[49%] md:w-full">
                    <Text
                      className="text-gray-700 text-sm"
                      size="txtLatoRegular14"
                    >
                      <span className="text-gray-700 font-lato text-left font-normal">
                        Number of Verification Voucher
                      </span>
                      <span className="text-gray-700 font-lato text-left font-normal">
                        {" "}
                      </span>
                      <span className="text-red-400 font-lato text-left font-normal">
                        *
                      </span>
                    </Text>
                    <Input
                      name="groupEightyNine"
                      placeholder="0"
                      className="p-0 placeholder:text-blue_gray-900 text-base text-left w-full"
                      wrapClassName="border border-gray-400 border-solid w-full"
                      size="lg"
                    ></Input>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                  <Text
                    className="text-blue_gray-900 text-sm tracking-[0.28px]"
                    size="txtLatoRegular14Bluegray900"
                  >
                    <span className="text-blue_gray-900 font-lato text-left font-normal">
                      Reason{" "}
                    </span>
                    <span className="text-red-400 font-lato text-left font-normal">
                      *
                    </span>
                  </Text>
                  <div className="bg-white-A700 border border-gray-400 border-solid h-[88px] rounded-lg w-full"></div>
                </div>
              </div>
              <Button
                className="cursor-pointer min-w-[100px] md:ml-[0] ml-[918px] text-base text-center"
                color="blue_gray_900"
              >
                Save
              </Button>
            </div>
          </div>
          <Footer className="bg-white-A700 flex font-barlow items-center justify-center mt-[106px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default AdminVoucherReconciliationPage;

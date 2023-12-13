import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import Footer from "components/Footer";
import Header1 from "components/Header1";

const BillingAddressPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto w-full">
        <div className="bg-gray-100 flex flex-col items-center justify-start w-full">
          <Header1 className="bg-black-900 flex flex-col font-lato items-center justify-center md:px-5 w-full" />
          <Text
            className="mt-[25px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
            size="txtBarlowMedium24Black900"
          >
            Manage Account
          </Text>
          <div className="flex flex-col font-lato items-center justify-start max-w-[1170px] mt-[17px] mx-auto md:px-5 w-full">
            <div className="flex flex-col gap-2 justify-start w-full">
              <div className="flex flex-row gap-8 items-center justify-start ml-4 md:ml-[0] w-[29%] md:w-full">
                <Text className="text-gray-700 text-sm" size="txtLatoRegular14">
                  My Profile
                </Text>
                <Text className="text-gray-700 text-sm" size="txtLatoRegular14">
                  Transaction History
                </Text>
                <Text
                  className="text-black-900 text-sm"
                  size="txtLatoRegular14Black900"
                >
                  Billing Address
                </Text>
              </div>
              <div className="h-0.5 relative w-full">
                <Line className="absolute bg-gray-400 bottom-[0] h-px inset-x-[0] mx-auto w-full" />
                <Line className="absolute bg-black-900 h-0.5 inset-y-[0] left-[22%] my-auto w-[8%]" />
              </div>
            </div>
          </div>
          <Button
            className="cursor-pointer flex items-center justify-center min-w-[132px] mt-4"
            leftIcon={
              <Img
                className="h-4 mr-2 my-px"
                src="images/img_television.svg"
                alt="television"
              />
            }
            color="blue_gray_900"
            size="sm"
          >
            <div className="font-lato text-center text-sm">Card Details</div>
          </Button>
          <div className="bg-white-A700 border border-gray-200 border-solid flex flex-col font-lato gap-[30px] items-center justify-end max-w-[1170px] mt-4 mx-auto p-5 md:px-5 rounded-lg w-full">
            <div className="flex flex-col gap-[22px] items-center justify-start mt-[11px] w-[56%] md:w-full">
              <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-full">
                <div className="flex md:flex-1 flex-col gap-1.5 items-start justify-start w-[48%] md:w-full">
                  <Text
                    className="text-gray-700 text-sm"
                    size="txtLatoRegular14"
                  >
                    <span className="text-gray-700 font-lato text-left font-normal">
                      Country{" "}
                    </span>
                    <span className="text-red-400 font-lato text-left font-normal">
                      *
                    </span>
                  </Text>
                  <Input
                    name="groupThree"
                    placeholder="United States"
                    className="p-0 placeholder:text-blue_gray-900 text-base text-left w-full"
                    wrapClassName="border border-gray-400 border-solid flex w-full"
                    suffix={
                      <Img
                        className="mt-auto mb-px h-6 ml-[35px]"
                        src="images/img_checkmark_blue_gray_900.svg"
                        alt="checkmark"
                      />
                    }
                    size="xs"
                  ></Input>
                </div>
                <div className="flex md:flex-1 flex-col gap-[7px] items-start justify-start w-[48%] md:w-full">
                  <Text
                    className="text-gray-700 text-sm"
                    size="txtLatoRegular14"
                  >
                    <span className="text-gray-700 font-lato text-left font-normal">
                      State{" "}
                    </span>
                    <span className="text-red-400 font-lato text-left font-normal">
                      *
                    </span>
                  </Text>
                  <Input
                    name="groupFour"
                    placeholder="Colorado"
                    className="p-0 placeholder:text-blue_gray-900 text-base text-left w-full"
                    wrapClassName="border border-gray-400 border-solid w-full"
                    size="lg"
                  ></Input>
                </div>
              </div>
              <div className="flex flex-col gap-[7px] items-start justify-start w-full">
                <Text className="text-gray-700 text-sm" size="txtLatoRegular14">
                  <span className="text-gray-700 font-lato text-left font-normal">
                    Address{" "}
                  </span>
                  <span className="text-red-400 font-lato text-left font-normal">
                    *
                  </span>
                </Text>
                <Input
                  name="groupFive"
                  placeholder="12 George Washington St."
                  className="p-0 placeholder:text-blue_gray-900 text-base text-left w-full"
                  wrapClassName="border border-gray-400 border-solid w-full"
                  size="lg"
                ></Input>
              </div>
              <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-full">
                <div className="flex md:flex-1 flex-col gap-1.5 items-start justify-start w-[48%] md:w-full">
                  <Text
                    className="text-gray-700 text-sm"
                    size="txtLatoRegular14"
                  >
                    <span className="text-gray-700 font-lato text-left font-normal">
                      City{" "}
                    </span>
                    <span className="text-red-400 font-lato text-left font-normal">
                      *
                    </span>
                  </Text>
                  <Input
                    name="groupSix"
                    placeholder="Farmville"
                    className="p-0 placeholder:text-blue_gray-900 text-base text-left w-full"
                    wrapClassName="border border-gray-400 border-solid w-full"
                    size="lg"
                  ></Input>
                </div>
                <div className="flex md:flex-1 flex-col gap-1.5 items-start justify-start w-[48%] md:w-full">
                  <Text
                    className="text-gray-700 text-sm"
                    size="txtLatoRegular14"
                  >
                    <span className="text-gray-700 font-lato text-left font-normal">
                      Zip{" "}
                    </span>
                    <span className="text-red-400 font-lato text-left font-normal">
                      *
                    </span>
                  </Text>
                  <Input
                    name="zipcode"
                    placeholder="142536"
                    className="p-0 placeholder:text-blue_gray-900 text-base text-left w-full"
                    wrapClassName="border border-gray-400 border-solid w-full"
                    size="lg"
                  ></Input>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-5 items-center justify-end w-1/5 md:w-full">
              <Button className="!text-blue_gray-900 border border-blue_gray-900 border-solid cursor-pointer min-w-[100px] text-base text-center">
                Cancel
              </Button>
              <Button
                className="cursor-pointer min-w-[100px] text-base text-center"
                color="blue_gray_900"
              >
                Save
              </Button>
            </div>
          </div>
          <Footer className="bg-white-A700 flex font-barlow items-center justify-center mt-[186px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default BillingAddressPage;

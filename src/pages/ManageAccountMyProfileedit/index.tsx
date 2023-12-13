import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import Footer from "components/Footer";
import Header1 from "components/Header1";

const ManageAccountMyProfileeditPage: React.FC = () => {
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
                <Text
                  className="text-black-900 text-sm"
                  size="txtLatoRegular14Black900"
                >
                  My Profile
                </Text>
                <Text className="text-gray-700 text-sm" size="txtLatoRegular14">
                  Transaction History
                </Text>
                <Text className="text-gray-700 text-sm" size="txtLatoRegular14">
                  Billing Address
                </Text>
              </div>
              <div className="h-0.5 relative w-full">
                <Line className="absolute bg-gray-400 bottom-[0] h-px inset-x-[0] mx-auto w-full" />
                <Line className="absolute bg-black-900 h-0.5 inset-y-[0] left-[1%] my-auto w-[6%]" />
              </div>
            </div>
          </div>
          <div className="bg-white-A700 border border-gray-400 border-solid flex flex-col font-barlow gap-[30px] justify-start max-w-[1170px] mt-6 mx-auto p-7 md:px-5 rounded-lg w-full">
            <div className="flex flex-col items-start justify-start mr-[341px] w-[70%] md:w-full">
              <Text className="text-gray-700 text-lg" size="txtBarlowMedium18">
                Account Information
              </Text>
              <div className="flex flex-col font-lato items-center justify-start mt-[27px]">
                <Text
                  className="text-black-900 text-xl tracking-[0.40px]"
                  size="txtLatoSemiBold20Black900"
                >
                  Peter Strauss
                </Text>
                <Text
                  className="mt-1 text-blue_gray-900 text-sm"
                  size="txtLatoRegular14Bluegray900"
                >
                  Azilen Technologies
                </Text>
              </div>
              <div className="flex md:flex-col flex-row font-lato gap-[30px] items-center justify-between mt-[30px] w-full">
                <div className="flex md:flex-1 flex-col gap-1.5 items-start justify-start w-[49%] md:w-full">
                  <Text
                    className="text-blue_gray-900 text-sm tracking-[0.28px]"
                    size="txtLatoRegular14Bluegray900"
                  >
                    <span className="text-blue_gray-900 font-lato text-left font-normal">
                      First Name{" "}
                    </span>
                    <span className="text-red-400 font-lato text-left font-normal">
                      *
                    </span>
                  </Text>
                  <Input
                    name="groupThirtyTwo"
                    placeholder="Peter"
                    className="p-0 placeholder:text-blue_gray-900 text-base text-left tracking-[0.32px] w-full"
                    wrapClassName="border border-gray-400 border-solid w-full"
                    size="lg"
                  ></Input>
                </div>
                <div className="flex md:flex-1 flex-col gap-1.5 items-start justify-start w-[49%] md:w-full">
                  <Text
                    className="text-blue_gray-900 text-sm tracking-[0.28px]"
                    size="txtLatoRegular14Bluegray900"
                  >
                    <span className="text-blue_gray-900 font-lato text-left font-normal">
                      Last Name{" "}
                    </span>
                    <span className="text-red-400 font-lato text-left font-normal">
                      *
                    </span>
                  </Text>
                  <Input
                    name="groupThirtyThree"
                    placeholder="Strauss"
                    className="p-0 placeholder:text-blue_gray-900 text-base text-left tracking-[0.32px] w-full"
                    wrapClassName="border border-gray-400 border-solid w-full"
                    size="lg"
                  ></Input>
                </div>
              </div>
              <div className="flex md:flex-col flex-row font-lato gap-[30px] items-center justify-between mt-[22px] w-full">
                <div className="flex md:flex-1 flex-col gap-1.5 items-start justify-start w-[49%] md:w-full">
                  <Text
                    className="text-blue_gray-900 text-sm tracking-[0.28px]"
                    size="txtLatoRegular14Bluegray900"
                  >
                    <span className="text-blue_gray-900 font-lato text-left font-normal">
                      Email{" "}
                    </span>
                    <span className="text-red-400 font-lato text-left font-normal">
                      *
                    </span>
                  </Text>
                  <Input
                    name="email_One"
                    placeholder="strauss@email.com"
                    className="p-0 placeholder:text-gray-400 text-base text-left tracking-[0.32px] w-full"
                    wrapClassName="w-full"
                    type="email"
                    color="gray_100"
                    size="lg"
                  ></Input>
                </div>
                <div className="flex md:flex-1 flex-col gap-1.5 items-start justify-start w-[49%] md:w-full">
                  <Text
                    className="text-blue_gray-900 text-sm tracking-[0.28px]"
                    size="txtLatoRegular14Bluegray900"
                  >
                    <span className="text-blue_gray-900 font-lato text-left font-normal">
                      Email{" "}
                    </span>
                    <span className="text-red-400 font-lato text-left font-normal">
                      *
                    </span>
                  </Text>
                  <Input
                    name="groupThirtyFive"
                    placeholder="Azilen Technologies"
                    className="p-0 placeholder:text-blue_gray-900 text-base text-left tracking-[0.32px] w-full"
                    wrapClassName="border border-gray-400 border-solid w-full"
                    size="lg"
                  ></Input>
                </div>
              </div>
            </div>
            <div className="flex flex-row font-lato gap-4 items-center justify-end md:ml-[0] ml-[895px] w-1/5 md:w-full">
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
          <div className="bg-white-A700 border border-gray-400 border-solid flex flex-col font-barlow items-center justify-start max-w-[1170px] mt-5 mx-auto p-[30px] md:px-5 rounded-lg w-full">
            <div className="flex flex-col gap-[19px] items-start justify-start w-full">
              <div className="flex flex-row md:gap-10 items-start justify-between w-full">
                <Text
                  className="text-gray-700 text-lg"
                  size="txtBarlowMedium18"
                >
                  Security
                </Text>
                <div className="flex flex-row font-lato gap-1.5 items-start justify-start">
                  <Img
                    className="h-4 w-4"
                    src="images/img_location.svg"
                    alt="location"
                  />
                  <Text
                    className="text-blue_gray-900 text-right text-sm"
                    size="txtLatoSemiBold14Bluegray900"
                  >
                    Change
                  </Text>
                </div>
              </div>
              <div className="flex flex-col font-lato gap-[7px] items-start justify-start w-[10%] md:w-full">
                <Text className="text-gray-700 text-xs" size="txtLatoRegular12">
                  Password
                </Text>
                <Img
                  className="h-2"
                  src="images/img_group1.svg"
                  alt="groupOne"
                />
              </div>
            </div>
          </div>
          <Footer className="bg-white-A700 flex font-barlow items-center justify-center mt-[34px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default ManageAccountMyProfileeditPage;

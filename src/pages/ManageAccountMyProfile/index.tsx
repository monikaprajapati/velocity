import React from "react";

import { Img, Line, Text } from "components";
import Footer from "components/Footer";
import Header1 from "components/Header1";

const ManageAccountMyProfilePage: React.FC = () => {
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
          <div className="bg-white-A700 border border-gray-400 border-solid flex flex-col font-barlow items-center justify-end max-w-[1170px] mt-6 mx-auto p-[26px] md:px-5 rounded-lg w-full">
            <div className="flex flex-col items-start justify-start mt-0.5 w-full">
              <div className="flex flex-row md:gap-10 items-start justify-between w-full">
                <Text
                  className="text-gray-700 text-lg"
                  size="txtBarlowMedium18"
                >
                  Account Information
                </Text>
                <div className="flex flex-row font-lato gap-[7px] items-center justify-start">
                  <Img
                    className="h-4 w-4"
                    src="images/img_edit.svg"
                    alt="edit"
                  />
                  <Text
                    className="text-blue_gray-900 text-right text-sm"
                    size="txtLatoSemiBold14Bluegray900"
                  >
                    Edit
                  </Text>
                </div>
              </div>
              <div className="flex flex-row font-lato items-center justify-between mt-5 w-[42%] md:w-full">
                <div className="flex flex-col gap-1.5 items-start justify-start">
                  <Text
                    className="text-gray-700 text-xs"
                    size="txtLatoRegular12"
                  >
                    First Name
                  </Text>
                  <Text
                    className="text-base text-blue_gray-900"
                    size="txtLatoRegular16"
                  >
                    Peter
                  </Text>
                </div>
                <div className="flex flex-col gap-1.5 items-start justify-start">
                  <Text
                    className="text-gray-700 text-xs"
                    size="txtLatoRegular12"
                  >
                    Last Name
                  </Text>
                  <Text
                    className="text-base text-blue_gray-900"
                    size="txtLatoRegular16"
                  >
                    Strauss
                  </Text>
                </div>
              </div>
              <div className="flex flex-row font-lato sm:gap-10 items-center justify-between mt-[30px] w-[49%] md:w-full">
                <div className="flex flex-col gap-1.5 items-start justify-start">
                  <Text
                    className="text-gray-700 text-xs"
                    size="txtLatoRegular12"
                  >
                    Email
                  </Text>
                  <Text
                    className="text-base text-blue_gray-900"
                    size="txtLatoRegular16"
                  >
                    strauss@email.com
                  </Text>
                </div>
                <div className="flex flex-col gap-1.5 items-start justify-start">
                  <Text
                    className="text-gray-700 text-xs"
                    size="txtLatoRegular12"
                  >
                    Organization
                  </Text>
                  <Text
                    className="text-base text-blue_gray-900"
                    size="txtLatoRegular16"
                  >
                    Azilen Technologies
                  </Text>
                </div>
              </div>
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
          <Footer className="bg-white-A700 flex font-barlow items-center justify-center mt-[177px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default ManageAccountMyProfilePage;

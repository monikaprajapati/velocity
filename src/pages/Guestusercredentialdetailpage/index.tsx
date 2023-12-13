import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";
import Footer from "components/Footer";

const GuestusercredentialdetailpagePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-lato gap-6 items-start justify-start mx-auto w-full">
        <div className="flex flex-col items-center w-full">
          <div className="bg-black-900 flex flex-col items-center justify-start p-6 sm:px-5 w-full">
            <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start max-w-[1170px] mx-auto md:px-5 w-full">
              <Img
                className="h-12"
                src="images/img_provebiologo.svg"
                alt="provebiologo"
              />
              <Button
                className="cursor-pointer font-semibold min-w-[179px] sm:ml-[0] ml-[801px] text-base text-center"
                variant="outline"
              >
                Create an Account
              </Button>
              <Button
                className="cursor-pointer font-semibold min-w-[95px] ml-4 sm:ml-[0] text-base text-center"
                variant="outline"
              >
                Sign in
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start md:ml-[0] ml-[98px] md:px-5 w-[4%] md:w-full">
          <Img
            className="common-pointer h-[18px] w-[18px]"
            src="images/img_arrowleft_black_900.svg"
            alt="arrowleft"
            onClick={() => navigate(-1)}
          />
          <Text
            className="ml-1 text-black-900 text-sm"
            size="txtLatoSemiBold14"
          >
            Back
          </Text>
        </div>
        <div className="flex flex-col gap-[34px] items-center w-full">
          <div className="bg-white-A700 border border-gray-200 border-solid flex flex-col gap-5 justify-start max-w-[1170px] mx-auto pb-[30px] md:px-5 rounded-lg w-full">
            <div className="flex flex-col relative w-full">
              <div className="h-[120px] mx-auto w-full">
                <Img
                  className="h-[120px] m-auto object-cover rounded-tl-lg rounded-tr-lg w-full"
                  src="images/img_andrewkliatsky.png"
                  alt="andrewkliatsky"
                />
                <Text
                  className="absolute bottom-[14%] left-[17%] text-white-A700 text-xl tracking-[0.40px]"
                  size="txtLatoSemiBold20"
                >
                  Olivia Hafez
                </Text>
              </div>
              <div className="bg-gray-200_01 flex flex-col h-[120px] items-center justify-start ml-[30px] mt-[-60px] outline outline-[1px] outline-gray-200 rounded-[50%] w-[120px] z-[1]">
                <div className="flex flex-col h-[120px] items-center justify-start w-[120px]">
                  <Img
                    className="h-[120px] md:h-auto rounded-[50%] w-[120px]"
                    src="images/img_15790815689021.png"
                    alt="15790815689021"
                  />
                </div>
              </div>
              <div className="bg-white-A700 border border-gray-400 border-solid flex flex-col items-start justify-end ml-auto mr-[30px] mt-[-NaNpx] p-[26px] sm:px-5 rounded-lg w-[81%] z-[1]">
                <div className="flex flex-col gap-[7px] items-start justify-start md:ml-[0] ml-[3px] mt-0.5">
                  <Text
                    className="text-gray-700 text-xs"
                    size="txtLatoMedium12"
                  >
                    License name
                  </Text>
                  <Text
                    className="text-base text-blue_gray-900"
                    size="txtLatoRegular16"
                  >
                    New Jersey Driver’s License
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5 items-center justify-start md:ml-[0] ml-[200px] w-[81%] md:w-full">
              <div className="bg-white-A700 border border-gray-400 border-solid flex flex-col gap-[19px] items-start justify-start p-[29px] sm:px-5 rounded-lg w-full">
                <Text
                  className="text-gray-700 text-lg"
                  size="txtLatoSemiBold18"
                >
                  Legal Employer
                </Text>
                <div className="flex flex-col gap-[7px] items-start justify-start">
                  <Text
                    className="text-gray-700 text-xs"
                    size="txtLatoMedium12"
                  >
                    Name
                  </Text>
                  <Text
                    className="text-base text-blue_gray-900"
                    size="txtLatoRegular16"
                  >
                    New Jersey MVC
                  </Text>
                </div>
                <div className="bg-white-A700 border border-gray-400 border-solid flex flex-col gap-[21px] items-start justify-end p-[27px] sm:px-5 rounded-lg w-full">
                  <Text
                    className="ml-0.5 md:ml-[0] text-gray-700 text-lg"
                    size="txtLatoSemiBold18"
                  >
                    Place
                  </Text>
                  <div className="flex flex-col gap-[5px] items-start justify-start ml-0.5 md:ml-[0]">
                    <Text
                      className="text-gray-700 text-xs"
                      size="txtLatoMedium12"
                    >
                      Region/State
                    </Text>
                    <Text
                      className="text-base text-blue_gray-900"
                      size="txtLatoRegular16"
                    >
                      NJ
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[5px] items-start justify-start ml-0.5 md:ml-[0]">
                    <Text
                      className="text-gray-700 text-xs"
                      size="txtLatoMedium12"
                    >
                      Country
                    </Text>
                    <Text
                      className="text-base text-blue_gray-900"
                      size="txtLatoRegular16"
                    >
                      US
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 border border-gray-400 border-solid flex flex-col gap-[19px] items-start justify-end p-[27px] sm:px-5 rounded-lg w-full">
                <Text
                  className="ml-0.5 md:ml-[0] mt-0.5 text-gray-700 text-lg"
                  size="txtLatoSemiBold18"
                >
                  Validity
                </Text>
                <div className="flex flex-col gap-1.5 items-start justify-start ml-0.5 md:ml-[0]">
                  <Text
                    className="text-gray-700 text-xs"
                    size="txtLatoMedium12"
                  >
                    Renewal date
                  </Text>
                  <Text
                    className="text-base text-blue_gray-900"
                    size="txtLatoRegular16"
                  >
                    6/20/2020
                  </Text>
                </div>
                <div className="flex flex-col gap-1.5 items-start justify-start ml-0.5 md:ml-[0]">
                  <Text
                    className="text-gray-700 text-xs"
                    size="txtLatoMedium12"
                  >
                    Valid until
                  </Text>
                  <Text
                    className="text-base text-blue_gray-900"
                    size="txtLatoRegular16"
                  >
                    6/20/2024
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700 border border-gray-400 border-solid flex flex-col gap-5 items-start justify-end p-[27px] sm:px-5 rounded-lg w-full">
                <Text
                  className="ml-0.5 md:ml-[0] text-gray-700 text-lg"
                  size="txtLatoSemiBold18"
                >
                  Issued to
                </Text>
                <div className="flex flex-col gap-1.5 items-start justify-start ml-0.5 md:ml-[0]">
                  <Text
                    className="text-gray-700 text-xs"
                    size="txtLatoMedium12"
                  >
                    Given name
                  </Text>
                  <Text
                    className="text-base text-blue_gray-900"
                    size="txtLatoRegular16"
                  >
                    Olivia
                  </Text>
                </div>
                <div className="flex flex-col gap-[5px] items-start justify-start ml-0.5 md:ml-[0]">
                  <Text
                    className="text-gray-700 text-xs"
                    size="txtLatoMedium12"
                  >
                    Family name
                  </Text>
                  <Text
                    className="text-base text-blue_gray-900"
                    size="txtLatoRegular16"
                  >
                    Hafez
                  </Text>
                </div>
                <div className="flex flex-col gap-1.5 items-start justify-start ml-0.5 md:ml-[0]">
                  <Text
                    className="text-gray-700 text-xs"
                    size="txtLatoMedium12"
                  >
                    Birth date
                  </Text>
                  <Text
                    className="text-base text-blue_gray-900"
                    size="txtLatoRegular16"
                  >
                    1996-06-20
                  </Text>
                </div>
                <div className="flex flex-col gap-1.5 items-start justify-start ml-0.5 md:ml-[0]">
                  <Text
                    className="text-gray-700 text-xs"
                    size="txtLatoMedium12"
                  >
                    Gender
                  </Text>
                  <Text
                    className="text-base text-blue_gray-900"
                    size="txtLatoRegular16"
                  >
                    Female
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700 border border-gray-400 border-solid flex flex-col items-start justify-end p-[27px] sm:px-5 rounded-lg w-full">
                <div className="flex flex-col gap-1.5 items-start justify-start ml-0.5 md:ml-[0]">
                  <Text
                    className="text-gray-700 text-xs"
                    size="txtLatoMedium12"
                  >
                    License number
                  </Text>
                  <Text
                    className="text-base text-blue_gray-900"
                    size="txtLatoRegular16"
                  >
                    X24680246802468
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <Footer className="bg-white-A700 flex font-barlow items-center justify-center md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default GuestusercredentialdetailpagePage;

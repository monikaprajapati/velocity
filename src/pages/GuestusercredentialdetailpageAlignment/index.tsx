import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, Text } from "components";
import Footer from "components/Footer";

const GuestusercredentialdetailpageAlignmentPage: React.FC = () => {
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
              <div className="bg-gray-200_01 flex flex-col h-[120px] items-center justify-start ml-[30px] mt-[-60px] outline outline-[1px] outline-gray-200 p-[5px] rounded-[50%] w-[120px] z-[1]">
                <div className="flex flex-col h-[110px] items-center justify-start w-[110px]">
                  <Img
                    className="h-[110px] md:h-auto rounded-[50%] w-[110px]"
                    src="images/img_vnfgeneralassembly2023.png"
                    alt="vnfgeneralassem"
                  />
                </div>
              </div>
              <div className="bg-white-A700 border border-gray-400 border-solid flex flex-col items-start justify-end ml-auto mr-[30px] mt-[-NaNpx] p-[27px] sm:px-5 rounded-lg w-[81%] z-[1]">
                <div className="flex flex-col gap-[5px] items-start justify-start ml-0.5 md:ml-[0] mt-0.5">
                  <Text
                    className="text-gray-700 text-xs"
                    size="txtLatoMedium12"
                  >
                    Badge type
                  </Text>
                  <Text
                    className="text-base text-blue_gray-900"
                    size="txtLatoRegular16"
                  >
                    Achievement
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5 items-center justify-start md:ml-[0] ml-[200px] w-[81%] md:w-full">
              <div className="bg-white-A700 border border-gray-400 border-solid flex flex-col gap-5 items-start justify-center p-[29px] sm:px-5 rounded-lg w-full">
                <Text
                  className="text-gray-700 text-lg"
                  size="txtLatoSemiBold18"
                >
                  Alignment
                </Text>
                <List
                  className="flex flex-col gap-5 items-center w-full"
                  orientation="vertical"
                >
                  <div className="bg-white-A700 border border-gray-400 border-solid flex flex-1 flex-col gap-5 items-start justify-end p-[26px] sm:px-5 rounded-lg w-full">
                    <Text
                      className="md:ml-[0] ml-[3px] mt-[3px] text-gray-700 text-lg"
                      size="txtLatoSemiBold18"
                    >
                      targetName 1
                    </Text>
                    <div className="flex flex-col gap-1.5 items-start justify-start md:ml-[0] ml-[3px]">
                      <Text
                        className="text-gray-700 text-xs"
                        size="txtLatoMedium12"
                      >
                        Type
                      </Text>
                      <Text
                        className="text-base text-blue_gray-900"
                        size="txtLatoRegular16"
                      >
                        Alignment
                      </Text>
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-start md:ml-[0] ml-[3px]">
                      <Text
                        className="text-gray-700 text-xs"
                        size="txtLatoMedium12"
                      >
                        URL
                      </Text>
                      <Text
                        className="text-base text-blue-800 underline"
                        size="txtLatoRegular16Blue800"
                      >
                        https://www.targetUrl_1.by/
                      </Text>
                    </div>
                    <div className="flex flex-col gap-1.5 items-start justify-start md:ml-[0] ml-[3px]">
                      <Text
                        className="text-gray-700 text-xs"
                        size="txtLatoMedium12"
                      >
                        Target Framework
                      </Text>
                      <Text
                        className="text-base text-blue_gray-900"
                        size="txtLatoRegular16"
                      >
                        Target Framework 1
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 border border-gray-400 border-solid flex flex-1 flex-col gap-5 items-start justify-end p-[26px] sm:px-5 rounded-lg w-full">
                    <Text
                      className="md:ml-[0] ml-[3px] mt-[3px] text-gray-700 text-lg"
                      size="txtLatoSemiBold18"
                    >
                      targetName 2
                    </Text>
                    <div className="flex flex-col gap-1.5 items-start justify-start md:ml-[0] ml-[3px]">
                      <Text
                        className="text-gray-700 text-xs"
                        size="txtLatoMedium12"
                      >
                        Type
                      </Text>
                      <Text
                        className="text-base text-blue_gray-900"
                        size="txtLatoRegular16"
                      >
                        Alignment
                      </Text>
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-start md:ml-[0] ml-[3px]">
                      <Text
                        className="text-gray-700 text-xs"
                        size="txtLatoMedium12"
                      >
                        URL
                      </Text>
                      <Text
                        className="text-base text-blue-800 underline"
                        size="txtLatoRegular16Blue800"
                      >
                        https://www.targetUrl_2.by/
                      </Text>
                    </div>
                    <div className="flex flex-col gap-1.5 items-start justify-start md:ml-[0] ml-[3px]">
                      <Text
                        className="text-gray-700 text-xs"
                        size="txtLatoMedium12"
                      >
                        Target Framework
                      </Text>
                      <Text
                        className="text-base text-blue_gray-900"
                        size="txtLatoRegular16"
                      >
                        Target Framework 2
                      </Text>
                    </div>
                  </div>
                </List>
              </div>
              <div className="bg-white-A700 border border-gray-400 border-solid flex flex-col items-start justify-end p-[27px] sm:px-5 rounded-lg w-full">
                <div className="flex flex-col gap-1.5 items-start justify-start ml-0.5 md:ml-[0]">
                  <Text
                    className="text-gray-700 text-xs"
                    size="txtLatoMedium12"
                  >
                    ID
                  </Text>
                  <Text
                    className="text-base text-blue_gray-900"
                    size="txtLatoRegular16"
                  >
                    VNF0007
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700 border border-gray-400 border-solid flex flex-col items-start justify-end p-[26px] sm:px-5 rounded-lg w-full">
                <div className="flex flex-col gap-[7px] items-start justify-start md:ml-[0] ml-[3px] mt-0.5">
                  <Text
                    className="text-gray-700 text-xs"
                    size="txtLatoMedium12"
                  >
                    Criteria
                  </Text>
                  <Text
                    className="text-base text-blue_gray-900"
                    size="txtLatoRegular16"
                  >
                    Attendance at the 2023 Velocity Network Foundation General
                    Assembly
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700 border border-gray-400 border-solid flex flex-col items-start justify-end p-[26px] sm:px-5 rounded-lg w-full">
                <div className="flex flex-col gap-1.5 items-start justify-start md:ml-[0] ml-[3px] mt-[3px]">
                  <Text
                    className="text-gray-700 text-xs"
                    size="txtLatoMedium12"
                  >
                    Description
                  </Text>
                  <Text
                    className="text-base text-blue_gray-900"
                    size="txtLatoRegular16"
                  >
                    Badge awarded to individuals who attended the Velocity
                    Network Foundation General Assembly
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700 border border-gray-400 border-solid flex flex-col items-start justify-end p-[26px] sm:px-5 rounded-lg w-full">
                <Text
                  className="md:ml-[0] ml-[3px] text-gray-700 text-lg"
                  size="txtLatoSemiBold18"
                >
                  Achievement
                </Text>
                <div className="flex flex-col gap-[5px] items-start justify-start md:ml-[0] ml-[3px] mt-5">
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
                    Test offer for VL-4861 and VL-5000
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start md:ml-[0] ml-[3px] mt-[22px]">
                  <Text
                    className="text-gray-700 text-xs"
                    size="txtLatoMedium12"
                  >
                    Type
                  </Text>
                  <Text
                    className="mt-1 text-base text-blue_gray-900"
                    size="txtLatoRegular16"
                  >
                    Achievement
                  </Text>
                </div>
                <div className="flex flex-col gap-1.5 items-start justify-start md:ml-[0] ml-[3px] mt-[21px]">
                  <Text
                    className="text-gray-700 text-xs"
                    size="txtLatoMedium12"
                  >
                    Description
                  </Text>
                  <Text
                    className="text-base text-blue_gray-900"
                    size="txtLatoRegular16"
                  >
                    Badge awarded to individuals who attended the Velocity
                    Network Foundation General Assembly
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

export default GuestusercredentialdetailpageAlignmentPage;

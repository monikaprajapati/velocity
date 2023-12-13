import React from "react";

import { Button, Img, Line, List, Text } from "components";
import Footer from "components/Footer";
import Header1 from "components/Header1";

const SignedinuserlandingpagewithcredentialssharedafterVOnePage: React.FC =
  () => {
    return (
      <>
        <div className="bg-white-A700 flex flex-col font-lato items-center justify-start mx-auto w-full">
          <Header1 className="bg-black-900 flex flex-col items-center justify-center md:px-5 w-full" />
          <div className="bg-blue_gray-900 flex flex-col gap-[23px] items-center justify-start p-[34px] sm:px-5 w-full">
            <div className="bg-blue_gray-900_87 border border-solid border-white-A700_87 flex flex-col items-center justify-start max-w-[1170px] mx-auto p-[23px] md:px-5 rounded-lg w-full">
              <div className="flex flex-col gap-5 items-start justify-start my-2.5 w-full">
                <div className="flex sm:flex-col flex-row font-barlow md:gap-10 items-center justify-between w-full">
                  <div className="flex sm:flex-1 flex-col items-center justify-start w-[31%] sm:w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                      size="txtBarlowBold24"
                    >
                      Your Verification Report is ready
                    </Text>
                    <div className="flex flex-row font-lato items-start justify-evenly mt-[3px] w-full">
                      <Text
                        className="text-base text-white-A700"
                        size="txtLatoBold16"
                      >
                        Verified on September 08, 2023 11:41:28 AM
                      </Text>
                      <Img
                        className="h-4 w-4"
                        src="images/img_checkmark_white_a700.svg"
                        alt="checkmark_One"
                      />
                    </div>
                  </div>
                  <div className="flex sm:flex-1 flex-row gap-4 items-center justify-between w-[6%] sm:w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_print.svg"
                      alt="print"
                    />
                    <Img
                      className="h-6 w-6"
                      src="images/img_user.svg"
                      alt="user"
                    />
                  </div>
                </div>
                <Text
                  className="leading-[20.00px] text-base text-white-A700"
                  size="txtLatoBold16"
                >
                  <>
                    Note: For privacy compliance reasons, the Verification
                    Report will
                    <br />
                    not be available after you leave this page. Download or
                    print the
                    <br />
                    report to save it.
                  </>
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start max-w-[1170px] mb-[252px] mx-auto md:px-5 w-full">
              <div className="flex flex-col gap-[26px] items-start justify-start w-full">
                <Text
                  className="text-lg text-white-A700"
                  size="txtLatoRegular18"
                >
                  <span className="text-white-A700 font-lato text-left font-extrabold">
                    Olivia Hafez
                  </span>
                  <span className="text-white-A700 font-lato text-left font-normal">
                    {" "}
                    has shared with you the following Credentials:{" "}
                  </span>
                </Text>
                <List
                  className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
                  orientation="horizontal"
                >
                  <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start rounded-[16px] w-full">
                    <div className="h-60 relative w-full">
                      <Img
                        className="h-60 m-auto object-cover w-full"
                        src="images/img_noise.png"
                        alt="noise"
                      />
                      <div className="absolute flex flex-col h-max inset-[0] items-start justify-center m-auto w-[82%]">
                        <div className="flex flex-row items-start justify-between w-full">
                          <Img
                            className="h-12 md:h-auto object-cover w-12"
                            src="images/img_vcllogo.png"
                            alt="vcllogo"
                          />
                          <Button
                            className="border border-green-500 border-solid cursor-pointer flex items-center justify-center mb-5 min-w-[89px]"
                            rightIcon={
                              <Img
                                className="h-[18px] ml-1.5"
                                src="images/img_checkmark_green_500.svg"
                                alt="checkmark"
                              />
                            }
                            size="xs"
                          >
                            <div className="!text-green-500 font-semibold leading-[normal] text-right text-sm">
                              Verified
                            </div>
                          </Button>
                        </div>
                        <Text
                          className="mt-[33px] text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                          size="txtLatoSemiBold24"
                        >
                          New Jersey MVC
                        </Text>
                        <Text
                          className="mt-[18px] text-blue_gray-900 text-lg"
                          size="txtLatoMedium18"
                        >
                          New Jersey Driver’s License
                        </Text>
                        <Text
                          className="mt-1 text-gray-700 text-sm"
                          size="txtLatoRegular14"
                        >
                          X24680246802468
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start rounded-[16px] w-full">
                    <div className="h-60 relative w-full">
                      <Img
                        className="h-60 m-auto object-cover w-full"
                        src="images/img_noise.png"
                        alt="noise"
                      />
                      <div className="absolute flex flex-col inset-x-[0] items-start justify-start mx-auto top-[14%] w-[82%]">
                        <div className="flex flex-row items-start justify-between w-full">
                          <Img
                            className="h-12 md:h-auto object-cover w-12"
                            src="images/img_vcllogo.png"
                            alt="vcllogo"
                          />
                          <Button
                            className="border border-red-400 border-solid cursor-pointer flex items-center justify-center mb-5 min-w-[71px]"
                            rightIcon={
                              <Img
                                className="h-[18px] ml-1.5"
                                src="images/img_close.svg"
                                alt="close"
                              />
                            }
                            size="xs"
                          >
                            <div className="!text-red-400 font-semibold leading-[normal] text-right text-sm">
                              False
                            </div>
                          </Button>
                        </div>
                        <Text
                          className="mt-[31px] text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                          size="txtLatoSemiBold24"
                        >
                          Email address
                        </Text>
                        <Text
                          className="mt-[21px] text-blue_gray-900 text-lg"
                          size="txtLatoMedium18"
                        >
                          olivia.hafez@example.com
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start rounded-[16px] w-full">
                    <div className="h-60 relative w-full">
                      <Img
                        className="h-60 m-auto object-cover w-full"
                        src="images/img_noise.png"
                        alt="noise"
                      />
                      <div className="absolute flex flex-col inset-x-[0] items-start justify-start mx-auto top-[14%] w-[82%]">
                        <div className="flex flex-row items-start justify-between w-full">
                          <Img
                            className="h-12 md:h-auto object-cover w-12"
                            src="images/img_vcllogo.png"
                            alt="vcllogo"
                          />
                          <Button
                            className="border border-green-500 border-solid cursor-pointer flex items-center justify-center mb-5 min-w-[89px]"
                            rightIcon={
                              <Img
                                className="h-[18px] ml-1.5"
                                src="images/img_checkmark_green_500.svg"
                                alt="checkmark"
                              />
                            }
                            size="xs"
                          >
                            <div className="!text-green-500 font-semibold leading-[normal] text-right text-sm">
                              Verified
                            </div>
                          </Button>
                        </div>
                        <Text
                          className="mt-[31px] text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                          size="txtLatoSemiBold24"
                        >
                          Phone number
                        </Text>
                        <Text
                          className="mt-[19px] text-blue_gray-900 text-lg"
                          size="txtLatoMedium18"
                        >
                          +11112452888
                        </Text>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
            </div>
          </div>
          <Footer className="bg-white-A700 flex font-barlow items-center justify-center md:px-5 w-full" />
        </div>
      </>
    );
  };

export default SignedinuserlandingpagewithcredentialssharedafterVOnePage;

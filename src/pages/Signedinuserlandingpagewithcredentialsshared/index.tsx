import React from "react";

import { Button, Img, Line, List, Text } from "components";
import Footer from "components/Footer";
import Header1 from "components/Header1";

const SignedinuserlandingpagewithcredentialssharedPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-lato items-center justify-start mx-auto w-full">
        <Header1 className="bg-black-900 flex flex-col items-center justify-center md:px-5 w-full" />
        <div className="bg-blue_gray-900 flex flex-col gap-[23px] items-center justify-start p-[34px] sm:px-5 w-full">
          <div className="bg-blue_gray-900_87 border border-solid border-white-A700_87 flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1170px] mx-auto p-6 md:px-5 rounded-lg w-full">
            <Text
              className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
              size="txtBarlowBold24"
            >
              Verify the Credentials you have received from the applicant.
            </Text>
            <Button className="!text-blue_gray-900 cursor-pointer font-lato font-semibold min-w-[194px] text-base text-center">
              Verify Credentials
            </Button>
          </div>
          <div className="flex flex-col items-center justify-start max-w-[1170px] mb-[362px] mx-auto md:px-5 w-full">
            <div className="flex flex-col gap-[26px] items-start justify-start w-full">
              <Text className="text-lg text-white-A700" size="txtLatoRegular18">
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
                    <div className="absolute flex flex-col h-max inset-y-[0] items-start justify-start left-[9%] my-auto w-3/5">
                      <Img
                        className="h-12 md:h-auto object-cover w-12"
                        src="images/img_vcllogo.png"
                        alt="vcllogo"
                      />
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
                    <div className="absolute flex flex-col items-start justify-start left-[9%] top-[14%] w-[57%]">
                      <Img
                        className="h-12 md:h-auto object-cover w-12"
                        src="images/img_vcllogo.png"
                        alt="vcllogo"
                      />
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
                    <div className="absolute flex flex-col items-start justify-start left-[9%] top-[14%] w-[43%]">
                      <Img
                        className="h-12 md:h-auto object-cover w-12"
                        src="images/img_vcllogo.png"
                        alt="vcllogo"
                      />
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

export default SignedinuserlandingpagewithcredentialssharedPage;

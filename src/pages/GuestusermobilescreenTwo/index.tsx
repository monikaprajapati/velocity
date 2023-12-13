import React from "react";

import { Button, Img, Text } from "components";
import Footer from "components/Footer";

const GuestusermobilescreenTwoPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-lato items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="bg-black-900 flex flex-col items-center justify-start p-6 sm:px-5 w-full">
            <div className="flex flex-col gap-8 items-center justify-start max-w-[1170px] mb-2.5 mx-auto md:px-5 w-full">
              <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
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
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-[98%] md:w-full">
                <div className="flex flex-col items-center justify-start w-1/2 md:w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="leading-[48.00px] md:text-4xl sm:text-[34px] text-[38px] text-blue_gray-900"
                      size="txtBarlowBold38"
                    >
                      <span className="text-white-A700 font-barlow text-left font-bold">
                        <>
                          Velocity Network™ makes
                          <br />
                          Credentials
                        </>
                      </span>
                      <span className="text-blue_gray-900 font-barlow text-left font-bold">
                        {" "}
                      </span>
                      <span className="text-white-A700 font-barlow text-left font-bold">
                        100% trusted.
                      </span>
                    </Text>
                    <Text
                      className="leading-[26.00px] mt-4 text-base text-gray-200"
                      size="txtLatoMedium16"
                    >
                      <>
                        A game changing, blockchain based utility layer, that
                        replaces the outdated and
                        <br />
                        fragmented way talent represents its career reputation
                        across the labor market.{" "}
                      </>
                    </Text>
                    <div className="flex flex-row font-lato gap-[30px] items-center justify-start mt-6 w-[53%] md:w-full">
                      <Button className="cursor-pointer font-semibold min-w-[143px] text-base text-center">
                        Learn How
                      </Button>
                      <div className="flex flex-row gap-2 items-center justify-start w-[41%]">
                        <Img
                          className="h-9 w-9"
                          src="images/img_videoaudioimageplaycircle.svg"
                          alt="videoaudioimage"
                        />
                        <Text
                          className="text-base text-center text-white-A700"
                          size="txtLatoSemiBold16"
                        >
                          Play Video
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:h-[200px] h-[232px] relative w-[34%] md:w-full">
                  <div className="absolute bottom-[3%] flex flex-col h-[200px] items-center justify-start left-[21%] w-[200px]">
                    <Img
                      className="h-[200px] md:h-auto rounded-[50%] w-[200px]"
                      src="images/img_africanwoman1.png"
                      alt="africanwomanOne"
                    />
                  </div>
                  <div className="absolute bg-white-A700_4c bottom-[0] flex flex-col h-16 items-center justify-start left-[10%] p-[7px] rounded-lg shadow-bs w-16">
                    <Img
                      className="h-9 md:h-auto my-[5px] object-cover w-[96%]"
                      src="images/img_badgeprofile.png"
                      alt="badgeprofile"
                    />
                  </div>
                  <div className="absolute bg-white-A700_4c flex flex-col h-[76px] items-center justify-start p-2 right-[16%] rounded-lg shadow-bs top-[0] w-[76px]">
                    <Img
                      className="h-[59px] md:h-auto object-cover w-[59px]"
                      src="images/img_badgecourse.png"
                      alt="badgecourse"
                    />
                  </div>
                  <div className="absolute bg-white-A700_4c bottom-[0] flex flex-col h-[84px] items-center justify-end p-2 right-[0] rounded-lg shadow-bs w-[84px]">
                    <Img
                      className="h-[67px] md:h-auto object-cover w-[86%]"
                      src="images/img_badgeeducation.png"
                      alt="badgeeducation"
                    />
                  </div>
                  <div className="absolute bg-white-A700_4c flex flex-col h-16 items-center justify-start left-[0] p-2 rounded-lg shadow-bs top-[11%] w-16">
                    <Img
                      className="h-12 md:h-auto object-cover w-4/5"
                      src="images/img_badgelicense.png"
                      alt="badgelicense"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-[30px] items-center justify-start max-w-[1170px] mt-[29px] mx-auto md:px-5 w-full">
            <div className="flex flex-col gap-[11px] items-start justify-start">
              <Text
                className="text-[22px] text-blue_gray-900 sm:text-lg md:text-xl"
                size="txtLatoSemiBold22"
              >
                Frictionless
              </Text>
              <Text
                className="leading-[24.00px] text-base text-blue_gray-900 w-full"
                size="txtLatoMedium16Bluegray900"
              >
                Instantly verify career data shared by applicants, students, and
                employees, seamlessly achieving significant reductions in the
                time and costs.
              </Text>
            </div>
            <div className="flex flex-col gap-[9px] items-start justify-start">
              <Text
                className="text-[22px] text-blue_gray-900 sm:text-lg md:text-xl"
                size="txtLatoSemiBold22"
              >
                Tamper-proof
              </Text>
              <Text
                className="leading-[24.00px] text-base text-blue_gray-900"
                size="txtLatoMedium16Bluegray900"
              >
                <>
                  The issuers of the Credentials have anchored them to the
                  Velocity
                  <br />
                  Blockchain Network to make them immutable and tamper-proof.
                </>
              </Text>
            </div>
          </div>
          <div className="bg-blue_gray-900 flex flex-col items-center justify-end mt-[26px] p-[34px] sm:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[84px] items-center justify-center mt-0.5 md:px-5 w-3/5 md:w-full">
              <div className="flex flex-col md:gap-10 gap-[114px] items-start justify-start w-[56%] md:w-full">
                <div className="flex flex-col gap-5 items-center justify-start w-full">
                  <Text
                    className="leading-[42.00px] md:text-4xl sm:text-[34px] text-[38px] text-blue_gray-900"
                    size="txtBarlowBold38"
                  >
                    <span className="text-white-A700 font-barlow text-left font-bold">
                      <>
                        Career and Education
                        <br />
                        Made
                      </>
                    </span>
                    <span className="text-yellow-A700 font-barlow text-left font-bold">
                      {" "}
                      Instantly Verifiable
                    </span>
                    <span className="text-white-A700 font-barlow text-left font-bold">
                      .
                    </span>
                  </Text>
                  <Text
                    className="leading-[26.00px] text-lg text-white-A700"
                    size="txtLatoRegular18"
                  >
                    <>
                      Applicants, students, and employees use their career
                      <br />
                      wallets to share their credentials with Relying Parties,
                      <br />
                      making them instantly verifiable.
                    </>
                  </Text>
                </div>
                <div className="flex flex-row gap-4 items-center justify-start w-[21%] md:w-full">
                  <Img
                    className="h-9 w-9"
                    src="images/img_arrowleft.svg"
                    alt="arrowleft"
                  />
                  <Img
                    className="h-9 w-9"
                    src="images/img_arrowright.svg"
                    alt="arrowright"
                  />
                </div>
              </div>
              <div className="bg-white-A700 flex flex-col items-center justify-start outline outline-[2px] outline-black-900 rounded-[16px] w-[34%] md:w-full">
                <div className="h-[450px] relative w-full">
                  <Img
                    className="h-[450px] m-auto object-cover rounded-[16px] w-full"
                    src="images/img_microsoftteamsimage.png"
                    alt="microsoftteamsi"
                  />
                  <div className="absolute bg-white-A700 h-3.5 inset-x-[0] mx-auto top-[0] w-full"></div>
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

export default GuestusermobilescreenTwoPage;

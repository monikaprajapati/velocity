import React from "react";

import { Button, Img, Line, Slider, Text } from "components";
import Footer from "components/Footer";
import Footer1 from "components/Footer1";
import Header from "components/Header";

const SignedinuserlandingpagePage: React.FC = () => {
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-lato items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="bg-black-900 flex flex-col items-center justify-start p-6 sm:px-5 w-full">
            <div className="flex flex-col gap-8 items-center justify-start max-w-[1170px] mb-2.5 mx-auto md:px-5 w-full">
              <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full" />
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-[98%] md:w-full">
                <div className="flex flex-col items-center justify-start w-[49%] md:w-full">
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
            <div className="flex flex-col gap-[11px] items-start justify-start mb-0.5">
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
            <div className="flex flex-col gap-[11px] items-start justify-start">
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
          <Footer1 className="flex md:flex-col md:gap-5 items-center justify-center mt-[26px] md:px-5 w-full" />
          <Footer className="bg-white-A700 flex font-barlow items-center justify-center md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default SignedinuserlandingpagePage;

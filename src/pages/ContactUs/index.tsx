import React from "react";

import { Button, Img, Input, Text, TextArea } from "components";
import Footer from "components/Footer";

const ContactUsPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-end mx-auto w-full">
        <div className="bg-gray-100 flex flex-col items-start justify-start pb-[104px] w-full">
          <div className="bg-black-900 flex sm:flex-col flex-row font-lato sm:gap-5 items-center justify-start p-6 sm:px-5 w-full">
            <Img
              className="h-12 sm:ml-[0] ml-[74px]"
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
          <a
            href="javascript:"
            className="md:ml-[0] ml-[98px] mt-[23px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
          >
            <Text size="txtBarlowMedium24Black900">Contact Us</Text>
          </a>
          <div className="bg-white-A700 border border-gray-200 border-solid flex flex-col font-lato gap-[30px] items-center justify-end max-w-[1170px] mt-[19px] mx-auto p-5 md:px-5 rounded-lg w-full">
            <div className="flex flex-col gap-6 items-center justify-start mt-3 w-[69%] md:w-full">
              <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-full">
                  <div className="flex md:flex-1 flex-col gap-1.5 items-start justify-start w-[49%] md:w-full">
                    <Text
                      className="text-blue_gray-900 text-sm tracking-[0.28px]"
                      size="txtLatoRegular14Bluegray900"
                    >
                      First Name
                    </Text>
                    <Input
                      name="rectangleThree"
                      placeholder=""
                      className="p-0 w-full"
                      wrapClassName="border border-gray-400 border-solid flex h-11 w-full"
                    ></Input>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-1.5 items-start justify-start w-[49%] md:w-full">
                    <Text
                      className="text-blue_gray-900 text-sm tracking-[0.28px]"
                      size="txtLatoRegular14Bluegray900"
                    >
                      Last Name
                    </Text>
                    <Input
                      name="rectangleThree_One"
                      placeholder=""
                      className="p-0 w-full"
                      wrapClassName="border border-gray-400 border-solid flex h-11 w-full"
                    ></Input>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-full">
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
                      name="rectangleThree_Two"
                      placeholder=""
                      className="p-0 w-full"
                      wrapClassName="border border-gray-400 border-solid flex h-11 w-full"
                    ></Input>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-[5px] items-start justify-start w-[49%] md:w-full">
                    <Text
                      className="text-blue_gray-900 text-sm tracking-[0.28px]"
                      size="txtLatoRegular14Bluegray900"
                    >
                      <span className="text-blue_gray-900 font-lato text-left font-normal">
                        Subject{" "}
                      </span>
                      <span className="text-red-400 font-lato text-left font-normal">
                        *
                      </span>
                    </Text>
                    <Input
                      name="rectangleThree_Three"
                      placeholder=""
                      className="p-0 w-full"
                      wrapClassName="border border-gray-400 border-solid flex h-11 w-full"
                    ></Input>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                <Text
                  className="text-blue_gray-900 text-sm tracking-[0.28px]"
                  size="txtLatoRegular14Bluegray900"
                >
                  <span className="text-blue_gray-900 font-lato text-left font-normal">
                    Message{" "}
                  </span>
                  <span className="text-red-400 font-lato text-left font-normal">
                    *
                  </span>
                </Text>
                <TextArea
                  className="bg-white-A700 border border-gray-400 border-solid rounded-lg w-full"
                  name="rectangleThree_Four"
                  placeholder=""
                ></TextArea>
              </div>
            </div>
            <Button
              className="cursor-pointer font-semibold min-w-[84px] text-base text-center"
              color="gray_200"
            >
              Send
            </Button>
          </div>
          <Footer className="bg-white-A700 flex font-barlow items-center justify-center mt-11 md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default ContactUsPage;

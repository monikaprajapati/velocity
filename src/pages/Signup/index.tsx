import React from "react";

import { Button, Img, Input, List, Text } from "components";

const SignupPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-lato items-center justify-start mx-auto w-full">
        <div className="bg-gray-100 flex md:flex-col flex-row md:gap-10 gap-[98px] items-center justify-end md:pl-10 sm:pl-5 pl-[98px] w-full">
          <div className="flex md:flex-1 flex-col items-center justify-start w-[61%] md:w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex flex-col gap-1.5 items-start justify-start">
                <Text
                  className="text-black-900 text-center text-xl"
                  size="txtBarlowMedium20"
                >
                  Get Started!
                </Text>
                <Text className="text-black-900 text-sm" size="txtLatoMedium14">
                  Sign up to get your 5 free verification vouchers
                </Text>
              </div>
              <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between mt-[55px] w-full">
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
                    <span className="text-blue_gray-900 font-lato text-left font-normal">
                      Last Name{" "}
                    </span>
                    <span className="text-red-400 font-lato text-left font-normal">
                      *
                    </span>
                  </Text>
                  <Input
                    name="rectangleThree_One"
                    placeholder=""
                    className="p-0 w-full"
                    wrapClassName="border border-gray-400 border-solid flex h-11 w-full"
                  ></Input>
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between mt-[22px] w-full">
                <div className="flex md:flex-1 flex-col gap-1.5 items-start justify-start w-[49%] md:w-full">
                  <Text
                    className="text-blue_gray-900 text-sm tracking-[0.28px]"
                    size="txtLatoRegular14Bluegray900"
                  >
                    <span className="text-blue_gray-900 font-lato text-left font-normal">
                      Username{" "}
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
                    name="rectangleThree_Three"
                    placeholder=""
                    className="p-0 w-full"
                    wrapClassName="border border-gray-400 border-solid flex h-11 w-full"
                  ></Input>
                </div>
              </div>
              <List
                className="sm:flex-col flex-row gap-[30px] grid md:grid-cols-1 grid-cols-2 justify-center mt-[22px] w-full"
                orientation="horizontal"
              >
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-1.5 items-center justify-start w-full">
                    <div className="flex flex-row items-center justify-between w-full">
                      <Text
                        className="text-blue_gray-900 text-sm tracking-[0.28px]"
                        size="txtLatoRegular14Bluegray900"
                      >
                        <span className="text-blue_gray-900 font-lato text-left font-normal">
                          Password{" "}
                        </span>
                        <span className="text-red-400 font-lato text-left font-normal">
                          *
                        </span>
                      </Text>
                      <Img
                        className="h-3.5 w-3.5"
                        src="images/img_inbox.svg"
                        alt="inbox"
                      />
                    </div>
                    <div className="bg-white-A700 border border-gray-400 border-solid flex flex-col items-end justify-start p-3 rounded-lg w-full">
                      <Img
                        className="h-5 w-5"
                        src="images/img_visibility.svg"
                        alt="visibility"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-1.5 items-center justify-start w-full">
                    <div className="flex flex-row items-center justify-between w-full">
                      <Text
                        className="text-blue_gray-900 text-sm tracking-[0.28px]"
                        size="txtLatoRegular14Bluegray900"
                      >
                        <span className="text-blue_gray-900 font-lato text-left font-normal">
                          Confirm Password{" "}
                        </span>
                        <span className="text-red-400 font-lato text-left font-normal">
                          *
                        </span>
                      </Text>
                      <Img
                        className="h-3.5 w-3.5"
                        src="images/img_inbox.svg"
                        alt="inbox"
                      />
                    </div>
                    <div className="bg-white-A700 border border-gray-400 border-solid flex flex-col items-end justify-start p-3 rounded-lg w-full">
                      <Img
                        className="h-5 w-5"
                        src="images/img_visibilityoff.svg"
                        alt="visibilityoff"
                      />
                    </div>
                  </div>
                </div>
              </List>
              <div className="flex flex-row gap-1.5 items-start justify-start mt-[29px] w-[31%] md:w-full">
                <div className="bg-white-A700 border border-gray-400 border-solid h-3.5 mb-0.5 w-3.5"></div>
                <Text
                  className="text-gray-700 text-sm tracking-[0.28px]"
                  size="txtLatoMedium14Gray700"
                >
                  <span className="text-gray-700 font-lato text-left font-medium">
                    I agree to the{" "}
                  </span>
                  <span className="text-blue_gray-900 font-lato text-left font-semibold">
                    Terms & Conditions
                  </span>
                </Text>
              </div>
              <Button
                className="cursor-pointer font-bold min-w-[370px] mt-[17px] text-base text-center tracking-[0.32px]"
                color="blue_gray_900"
              >
                Register
              </Button>
              <a
                href="javascript:"
                className="mt-[29px] text-black-900 text-sm tracking-[0.28px]"
              >
                <Text size="txtLatoMedium14">
                  <span className="text-gray-700 font-lato text-left font-medium">
                    Already have an account?
                  </span>
                  <span className="text-black-900 font-lato text-left font-medium">
                    {" "}
                  </span>
                  <span className="text-blue_gray-900 font-lato text-left font-bold">
                    Sign In
                  </span>
                </Text>
              </a>
            </div>
          </div>
          <div className="h-[768px] relative w-[32%] md:w-full">
            <Img
              className="h-[768px] m-auto object-cover w-full"
              src="images/img_andrewkliatsky_768x400.png"
              alt="andrewkliatsky"
            />
            <Img
              className="absolute h-[90px] inset-[0] justify-center m-auto"
              src="images/img_provebiologo_gray_100.svg"
              alt="provebiologo"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;

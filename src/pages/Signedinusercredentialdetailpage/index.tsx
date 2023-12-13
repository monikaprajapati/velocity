import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, CheckBox, Img, Line, Text } from "components";
import Footer from "components/Footer";
import Header1 from "components/Header1";

const SignedinusercredentialdetailpagePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-lato items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <Header1 className="bg-black-900 flex flex-col items-center justify-center md:px-5 w-full" />
          <div className="flex flex-row md:gap-10 items-center justify-between max-w-[1170px] mt-[21px] mx-auto md:px-5 w-full">
            <div className="flex flex-row items-center justify-evenly w-[5%]">
              <Img
                className="common-pointer h-[18px] w-[18px]"
                src="images/img_arrowleft_black_900.svg"
                alt="arrowleft"
                onClick={() => navigate(-1)}
              />
              <Text className="text-black-900 text-sm" size="txtLatoSemiBold14">
                Back
              </Text>
            </div>
            <div className="flex flex-row gap-4 items-center justify-between w-[6%]">
              <Img
                className="h-6 w-6"
                src="images/img_print_blue_gray_900.svg"
                alt="print"
              />
              <Img
                className="h-6 w-6"
                src="images/img_lightbulb.svg"
                alt="lightbulb"
              />
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-[30px] items-start justify-start max-w-[1170px] mt-[21px] mx-auto md:px-5 w-full">
            <div className="bg-white-A700 border border-gray-200 border-solid flex md:flex-1 flex-col gap-5 justify-start pb-[30px] rounded-lg w-3/4 md:w-full">
              <div className="flex flex-col relative w-full">
                <div className="h-[120px] mx-auto w-full">
                  <Img
                    className="h-[120px] m-auto object-cover rounded-tl-lg rounded-tr-lg w-full"
                    src="images/img_andrewkliatsky_120x870.png"
                    alt="andrewkliatsky"
                  />
                  <Text
                    className="absolute bottom-[14%] left-[23%] text-white-A700 text-xl tracking-[0.40px]"
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
                <div className="bg-white-A700 border border-gray-400 border-solid flex flex-col items-start justify-end ml-auto mr-[30px] mt-[-NaNpx] p-[26px] sm:px-5 rounded-lg w-[74%] z-[1]">
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
              <div className="flex flex-col gap-5 items-center justify-start md:ml-[0] ml-[200px] w-[74%] md:w-full">
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
            <div className="flex md:flex-1 flex-col gap-[30px] items-center justify-start w-[24%] md:w-full">
              <div className="bg-white-A700 border border-gray-200 border-solid flex flex-col gap-[25px] justify-start pb-6 rounded-lg w-full">
                <div className="bg-gray-200 border border-gray-200 border-solid flex flex-row items-center justify-between p-[17px] rounded-tl-lg rounded-tr-lg w-full">
                  <Text
                    className="ml-[3px] text-base text-blue_gray-900 tracking-[0.32px]"
                    size="txtLatoSemiBold16Bluegray900"
                  >
                    Status
                  </Text>
                  <Button
                    className="border border-green-500 border-solid cursor-pointer flex items-center justify-center min-w-[89px] mr-[3px]"
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
                <div className="flex flex-col gap-[26px] items-start justify-start ml-5 md:ml-[0] w-[59%] md:w-full">
                  <CheckBox
                    className="font-medium text-[13px] text-gray-700 text-left"
                    inputClassName="mr-[5px]"
                    name="issuerverified"
                    id="issuerverified"
                    label="Issuer verified"
                  ></CheckBox>
                  <CheckBox
                    className="font-medium text-[13px] text-gray-700 text-left"
                    inputClassName="mr-[5px]"
                    name="credentialdata"
                    id="credentialdata"
                    label="Credential data verified"
                  ></CheckBox>
                  <CheckBox
                    className="font-medium text-[13px] text-gray-700 text-left"
                    inputClassName="mr-[5px]"
                    name="issuedtoolivia"
                    id="issuedtoolivia"
                    label="Issued to Olivia Hafez"
                  ></CheckBox>
                  <CheckBox
                    className="font-medium text-[13px] text-gray-700 text-left"
                    inputClassName="mr-[5px]"
                    name="credentialnotre_One"
                    id="credentialnotre_One"
                    label="Credential not revoked"
                  ></CheckBox>
                  <CheckBox
                    className="font-medium text-[13px] text-gray-700 text-left"
                    inputClassName="mr-[5px]"
                    name="credentialvalid_One"
                    id="credentialvalid_One"
                    label="Credential valid"
                  ></CheckBox>
                </div>
              </div>
              <div className="bg-gray-200 flex flex-col gap-3 items-start justify-end p-5 rounded-lg w-full">
                <Text
                  className="ml-1 md:ml-[0] mt-1.5 text-blue_gray-900 text-sm"
                  size="txtLatoSemiBold14Bluegray900"
                >
                  <>Important Disclaimer</>
                </Text>
                <Text
                  className="leading-[16.00px] ml-1 md:ml-[0] text-gray-700 text-xs"
                  size="txtLatoMedium12"
                >
                  <>
                    While the verification is considered to
                    <br />
                    be valid and correct at the date of verification, changes in
                    the credential status after the time of verification may
                    impact the accuracy of the information. The information may
                    change without notice and Velocity Career Labs is not in any
                    way liable for the accuracy of any information printed and
                    stored or in any way interpreted and used by a user.
                  </>
                </Text>
              </div>
            </div>
          </div>
          <Footer className="bg-white-A700 flex font-barlow items-center justify-center mt-[34px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default SignedinusercredentialdetailpagePage;

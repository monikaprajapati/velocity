import React from "react";

import { Img, Line, List, Text } from "components";
import Footer from "components/Footer";
import Header2 from "components/Header2";

const AdminDashboardPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-lato items-center justify-start mx-auto w-full">
        <div className="bg-gray-100 flex flex-col items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <Header2 className="bg-black-900 flex flex-col items-center justify-center md:px-5 w-full" />
            <div className="flex flex-col font-barlow items-center justify-start max-w-[1326px] mt-[23px] mx-auto md:px-5 w-full">
              <div className="flex flex-col gap-[19px] items-start justify-start w-full">
                <Text
                  className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtBarlowMedium24Black900"
                >
                  Dashboard
                </Text>
                <List
                  className="sm:flex-col flex-row font-lato gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <div className="bg-gradient  flex flex-col items-center justify-start rounded-lg w-full">
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-[140px] items-center justify-start w-full"
                        style={{
                          backgroundImage: "url('images/img_group16.svg')",
                        }}
                      >
                        <div className="h-[140px] relative w-full">
                          <Img
                            className="h-[140px] m-auto object-cover rounded-lg w-full"
                            src="images/img_noise_138x770.png"
                            alt="noise"
                          />
                          <div className="absolute flex flex-row h-max inset-[0] items-center justify-between m-auto w-[82%]">
                            <Text
                              className="capitalize leading-[24.00px] text-lg text-white-A700"
                              size="txtLatoRegular18"
                            >
                              <>
                                New Organizations Registered
                                <br />
                                This months
                              </>
                            </Text>
                            <Text
                              className="capitalize sm:text-[44px] md:text-[50px] text-[58px] text-center text-yellow-A700"
                              size="txtLatoBold58"
                            >
                              53
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <div className="bg-gradient  flex flex-col items-center justify-start rounded-lg w-full">
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-[140px] items-center justify-start w-full"
                        style={{
                          backgroundImage: "url('images/img_group16.svg')",
                        }}
                      >
                        <div className="h-[140px] relative w-full">
                          <Img
                            className="h-[140px] m-auto object-cover rounded-lg w-full"
                            src="images/img_noise_138x770.png"
                            alt="noise"
                          />
                          <div className="absolute flex flex-row h-max inset-[0] items-center justify-between m-auto w-[82%]">
                            <Text
                              className="capitalize leading-[24.00px] text-lg text-white-A700"
                              size="txtLatoRegular18"
                            >
                              <>
                                New Verification Vouchers
                                <br />
                                Purchased This Month
                              </>
                            </Text>
                            <Text
                              className="capitalize sm:text-[44px] md:text-[50px] text-[58px] text-center text-yellow-A700"
                              size="txtLatoBold58"
                            >
                              85
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <div className="bg-gradient  flex flex-col items-center justify-start rounded-lg w-full">
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-[140px] items-center justify-start w-full"
                        style={{
                          backgroundImage: "url('images/img_group16.svg')",
                        }}
                      >
                        <div className="h-[140px] relative w-full">
                          <Img
                            className="h-[140px] m-auto object-cover rounded-lg w-full"
                            src="images/img_noise_138x770.png"
                            alt="noise"
                          />
                          <div className="absolute flex flex-row h-max inset-[0] items-center justify-between m-auto w-[82%]">
                            <Text
                              className="capitalize leading-[24.00px] text-lg text-white-A700"
                              size="txtLatoRegular18"
                            >
                              <>
                                Total Verifications Done
                                <br />
                                This Month
                              </>
                            </Text>
                            <Text
                              className="capitalize sm:text-[44px] md:text-[50px] text-[58px] text-center text-yellow-A700"
                              size="txtLatoBold58"
                            >
                              192
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
            </div>
            <div className="flex flex-row md:gap-10 items-start justify-between max-w-[1326px] mt-7 mx-auto md:px-5 w-full">
              <Text className="text-gray-700 text-lg" size="txtBarlowMedium18">
                Recent Transactions
              </Text>
              <a
                href="javascript:"
                className="text-blue_gray-900 text-right text-sm"
              >
                <Text size="txtLatoSemiBold14Bluegray900">View More</Text>
              </a>
            </div>
            <div className="bg-white-A700 border border-gray-400 border-solid flex flex-col font-lato items-center justify-start max-w-[1326px] mt-[13px] mx-auto pb-[13px] md:px-5 rounded-lg w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="bg-gray-200 border border-gray-400 border-solid flex flex-row items-center justify-start p-[15px] rounded-tl-lg rounded-tr-lg w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start ml-2 mt-0.5 w-[96%]">
                    <Text
                      className="text-blue_gray-900 text-sm"
                      size="txtLatoBold14"
                    >
                      Name
                    </Text>
                    <Text
                      className="ml-36 md:ml-[0] text-blue_gray-900 text-sm"
                      size="txtLatoBold14"
                    >
                      Organization
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[150px] text-blue_gray-900 text-sm"
                      size="txtLatoBold14"
                    >
                      Package Name
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[131px] text-blue_gray-900 text-sm"
                      size="txtLatoBold14"
                    >
                      No. of Voucher
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[79px] text-blue_gray-900 text-sm"
                      size="txtLatoBold14"
                    >
                      Amount (USD)
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[70px] text-blue_gray-900 text-sm"
                      size="txtLatoBold14"
                    >
                      Timestamp
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[166px] text-blue_gray-900 text-sm"
                      size="txtLatoBold14"
                    >
                      Status
                    </Text>
                  </div>
                </div>
                <div className="h-[175px] md:h-[628px] sm:h-[632px] mt-2.5 relative w-full">
                  <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
                    <div className="flex flex-col gap-[49px] items-center justify-start w-full">
                      <Line className="bg-gray-200 h-px w-full" />
                      <Line className="bg-gray-200 h-px w-full" />
                      <Line className="bg-gray-200 h-px w-full" />
                    </div>
                  </div>
                  <List
                    className="absolute flex flex-col gap-[30px] inset-[0] items-center justify-center m-auto w-[96%]"
                    orientation="vertical"
                  >
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[98%] md:w-full">
                      <Text
                        className="md:mt-0 mt-0.5 text-blue-800 text-sm underline"
                        size="txtLatoRegular14Blue800"
                      >
                        Peter Strauss
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[100px] text-blue_gray-900 text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        Azilen Technology
                      </Text>
                      <Text
                        className="mb-0.5 md:ml-[0] ml-[120px] text-blue_gray-900 text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        Credential Verified
                      </Text>
                      <Text
                        className="mb-0.5 md:ml-[0] ml-[188px] text-blue_gray-900 text-right text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        -1
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[164px] text-blue_gray-900 text-right text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        -
                      </Text>
                      <Text
                        className="mb-0.5 md:ml-[0] ml-[70px] text-blue_gray-900 text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        2023-09-12T06:31:32.099Z
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[60px] text-blue_gray-900 text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        Spent
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                      <Text
                        className="sm:mt-0 mt-0.5 text-blue-800 text-sm underline"
                        size="txtLatoRegular14Blue800"
                      >
                        Peter Strauss
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[100px] text-blue_gray-900 text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        Azilen Technology
                      </Text>
                      <Text
                        className="mb-0.5 sm:ml-[0] ml-[120px] text-blue_gray-900 text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        Standard
                      </Text>
                      <Text
                        className="mb-0.5 sm:ml-[0] ml-[245px] text-blue_gray-900 text-right text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        12
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[164px] text-blue_gray-900 text-right text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        -
                      </Text>
                      <Text
                        className="mb-0.5 sm:ml-[0] ml-[70px] text-blue_gray-900 text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        2023-09-10T11:31:47.714Z
                      </Text>
                      <Text
                        className="mb-0.5 sm:ml-[0] ml-[60px] text-blue_gray-900 text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        Purchased
                      </Text>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[98%] md:w-full">
                      <Text
                        className="md:mt-0 mt-0.5 text-blue-800 text-sm underline"
                        size="txtLatoRegular14Blue800"
                      >
                        Peter Strauss
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[100px] text-blue_gray-900 text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        Azilen Technology
                      </Text>
                      <Text
                        className="mb-0.5 md:ml-[0] ml-[120px] text-blue_gray-900 text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        Credential Verified
                      </Text>
                      <Text
                        className="mb-0.5 md:ml-[0] ml-[188px] text-blue_gray-900 text-right text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        -1
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[164px] text-blue_gray-900 text-right text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        -
                      </Text>
                      <Text
                        className="mb-0.5 md:ml-[0] ml-[70px] text-blue_gray-900 text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        2023-09-10T11:28:33.584Z
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[60px] text-blue_gray-900 text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        Spent
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                      <Text
                        className="sm:mt-0 mt-0.5 text-blue-800 text-sm underline"
                        size="txtLatoRegular14Blue800"
                      >
                        Peter Strauss
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[100px] text-blue_gray-900 text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        Azilen Technology
                      </Text>
                      <Text
                        className="mb-0.5 sm:ml-[0] ml-[120px] text-blue_gray-900 text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        Standard
                      </Text>
                      <Text
                        className="mb-0.5 sm:ml-[0] ml-[245px] text-blue_gray-900 text-right text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        12
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[164px] text-blue_gray-900 text-right text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        -
                      </Text>
                      <Text
                        className="mb-0.5 sm:ml-[0] ml-[70px] text-blue_gray-900 text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        2023-09-10T11:31:47.714Z
                      </Text>
                      <Text
                        className="mb-0.5 sm:ml-[0] ml-[60px] text-blue_gray-900 text-sm"
                        size="txtLatoRegular14Bluegray900"
                      >
                        Purchased
                      </Text>
                    </div>
                  </List>
                  <Line className="absolute bg-blue_gray-900_6c h-40 right-[0] rounded-sm top-[0] w-1" />
                </div>
                <Line className="bg-gray-200 h-px mt-[13px] w-full" />
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-4 w-[94%] md:w-full">
                  <Text
                    className="md:mt-0 mt-0.5 text-blue-800 text-sm underline"
                    size="txtLatoRegular14Blue800"
                  >
                    Peter Strauss
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[100px] text-blue_gray-900 text-sm"
                    size="txtLatoRegular14Bluegray900"
                  >
                    Azilen Technology
                  </Text>
                  <Text
                    className="mb-0.5 md:ml-[0] ml-[120px] text-blue_gray-900 text-sm"
                    size="txtLatoRegular14Bluegray900"
                  >
                    Credential Verified
                  </Text>
                  <Text
                    className="mb-0.5 md:ml-[0] ml-[188px] text-blue_gray-900 text-right text-sm"
                    size="txtLatoRegular14Bluegray900"
                  >
                    -1
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[164px] text-blue_gray-900 text-right text-sm"
                    size="txtLatoRegular14Bluegray900"
                  >
                    -
                  </Text>
                  <Text
                    className="mb-0.5 md:ml-[0] ml-[70px] text-blue_gray-900 text-sm"
                    size="txtLatoRegular14Bluegray900"
                  >
                    2023-09-10T11:28:33.584Z
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[60px] text-blue_gray-900 text-sm"
                    size="txtLatoRegular14Bluegray900"
                  >
                    Spent
                  </Text>
                </div>
              </div>
            </div>
            <Footer className="bg-white-A700 flex font-barlow items-center justify-center mt-[29px] md:px-5 w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboardPage;

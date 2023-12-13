import React from "react";
import { default as ModalProvider } from "react-modal";

import { Button, Img, Line, Text } from "components";

const TransactionHistoryPurchaseVouchersOneModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[72%]"
      overlayClassName="bg-black-900_7e fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-white-A700 border border-gray-400 border-solid flex flex-col items-center justify-start max-w-[970px] mx-auto pb-10 md:px-5 rounded-lg w-full">
          <div className="flex flex-col gap-[30px] items-center justify-start w-full">
            <div className="bg-gray-200 border border-gray-400 border-solid flex flex-col items-start justify-end p-3.5 rounded-tl-lg rounded-tr-lg w-full">
              <Text
                className="md:ml-[0] ml-[5px] mt-0.5 text-base text-blue_gray-900"
                size="txtLatoBold16Bluegray900"
              >
                Purchase Verification Vouchers
              </Text>
            </div>
            <div className="flex flex-col gap-10 items-center justify-start w-[92%] md:w-full">
              <div className="gap-10 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-full">
                <div className="h-[386px] mt-2.5 relative w-full">
                  <Button
                    className="bg-gradient  flex h-[70px] items-center justify-center mb-[-34px] mx-auto outline-[4px] w-[70px] z-[1]"
                    shape="circle"
                    size="lg"
                    variant="outline"
                  >
                    <Img
                      className="h-7"
                      src="images/img_checkmark_gray_400.svg"
                      alt="checkmark"
                    />
                  </Button>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[350px] items-center justify-start mt-auto mx-auto w-full"
                    style={{
                      backgroundImage: "url('images/img_voucherbg.png')",
                    }}
                  >
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[350px] items-center justify-start w-full"
                      style={{
                        backgroundImage: "url('images/img_group16.svg')",
                      }}
                    >
                      <div className="h-[350px] relative w-full">
                        <Img
                          className="h-[350px] m-auto object-cover w-full"
                          src="images/img_noise_350x270.png"
                          alt="noise"
                        />
                        <div className="absolute bottom-[8%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-3/4">
                          <Text
                            className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                            size="txtBarlowMedium24"
                          >
                            Arrow
                          </Text>
                          <Text
                            className="capitalize mt-11 sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                            size="txtLatoBold28"
                          >
                            10 Vouchers
                          </Text>
                          <Line className="bg-gray-400_87 h-px mt-9 w-full" />
                          <Text
                            className="mt-[31px] text-5xl sm:text-[38px] md:text-[44px] text-center text-white-A700"
                            size="txtBarlowSemiBold48"
                          >
                            $3
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[386px] mb-2.5 relative w-full">
                  <Button
                    className="common-pointer bg-gradient  flex h-[70px] items-center justify-center mb-[-34px] mx-auto outline-[4px] w-[70px] z-[1]"
                    onClick={props.onRequestClose}
                    shape="circle"
                    size="lg"
                    variant="outline"
                  >
                    <Img
                      className="h-7"
                      src="images/img_close_yellow_a700.svg"
                      alt="close"
                    />
                  </Button>
                  <div className="h-[350px] mt-auto mx-auto w-full">
                    <div className="absolute bg-gradient  border-b-[6px] border-solid border-yellow-A700 flex flex-col h-full inset-[0] items-center justify-center m-auto py-[98px] rounded-lg w-full">
                      <Img
                        className="h-10 mt-[114px] rounded-tl-lg rounded-tr-lg"
                        src="images/img_union.svg"
                        alt="union"
                      />
                    </div>
                    <Img
                      className="absolute h-[344px] inset-[0] justify-center m-auto"
                      src="images/img_group16.svg"
                      alt="circles"
                    />
                    <div className="absolute h-[350px] inset-[0] justify-center m-auto w-full">
                      <Img
                        className="h-[350px] m-auto object-cover w-full"
                        src="images/img_noise_350x270.png"
                        alt="noise_One"
                      />
                      <div className="absolute bottom-[8%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-3/4">
                        <Text
                          className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                          size="txtBarlowMedium24"
                        >
                          Standard
                        </Text>
                        <Text
                          className="capitalize mt-11 sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                          size="txtLatoBold28"
                        >
                          70 Vouchers
                        </Text>
                        <Line className="bg-gray-400_87 h-px mt-9 w-full" />
                        <div className="flex flex-row font-barlow gap-[34px] items-start justify-end mt-7 w-[62%] md:w-full">
                          <Text
                            className="mt-[3px] text-5xl sm:text-[38px] md:text-[44px] text-center text-white-A700"
                            size="txtBarlowSemiBold48"
                          >
                            $12
                          </Text>
                          <Img
                            className="h-6"
                            src="images/img_settings.svg"
                            alt="settings"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[386px] mt-2.5 relative w-full">
                  <Button
                    className="bg-gradient  flex h-[70px] items-center justify-center mb-[-34px] mx-auto outline-[4px] w-[70px] z-[1]"
                    shape="circle"
                    size="lg"
                    variant="outline"
                  >
                    <Img
                      className="h-7"
                      src="images/img_checkmark_gray_400.svg"
                      alt="checkmark_One"
                    />
                  </Button>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[350px] items-center justify-start mt-auto mx-auto w-full"
                    style={{
                      backgroundImage: "url('images/img_voucherbg.png')",
                    }}
                  >
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[350px] items-center justify-start w-full"
                      style={{
                        backgroundImage: "url('images/img_group16.svg')",
                      }}
                    >
                      <div className="h-[350px] relative w-full">
                        <Img
                          className="h-[350px] m-auto object-cover w-full"
                          src="images/img_noise_350x270.png"
                          alt="noise_Two"
                        />
                        <div className="absolute bottom-[8%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-3/4">
                          <Text
                            className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                            size="txtBarlowMedium24"
                          >
                            Advance
                          </Text>
                          <Text
                            className="capitalize mt-11 sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                            size="txtLatoBold28"
                          >
                            100 Vouchers
                          </Text>
                          <Line className="bg-gray-400_87 h-px mt-9 w-full" />
                          <Text
                            className="mt-[31px] text-5xl sm:text-[38px] md:text-[44px] text-center text-white-A700"
                            size="txtBarlowSemiBold48"
                          >
                            $25
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                <div className="flex sm:flex-1 flex-row gap-4 items-center justify-between w-[10%] sm:w-full">
                  <Img
                    className="h-9 w-9"
                    src="images/img_arrowleft_gray_400.svg"
                    alt="arrowleft"
                  />
                  <Img
                    className="h-9 w-9"
                    src="images/img_next.svg"
                    alt="next"
                  />
                </div>
                <div className="flex sm:flex-1 flex-row gap-4 items-center justify-between w-[42%] sm:w-full">
                  <Button className="!text-blue_gray-900 border border-blue_gray-900 border-solid cursor-pointer min-w-[175px] text-base text-center">
                    Cancel
                  </Button>
                  <Button
                    className="cursor-pointer min-w-[175px] text-base text-center"
                    color="blue_gray_900"
                  >
                    Purchase Voucher
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default TransactionHistoryPurchaseVouchersOneModal;

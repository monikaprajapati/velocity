import React from "react";
import { default as ModalProvider } from "react-modal";

import { Button, Input, Text } from "components";

const AdminPackageseditModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[36%]"
      overlayClassName="bg-black-900_7e fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-white-A700 border border-gray-400 border-solid flex flex-col items-center justify-start pb-[30px] md:px-5 rounded-lg w-full">
          <div className="flex flex-col gap-[29px] items-center justify-start w-full">
            <div className="bg-gray-200 border border-gray-400 border-solid flex flex-col items-start justify-end p-[13px] rounded-tl-lg rounded-tr-lg w-full">
              <Text
                className="ml-4 md:ml-[0] mt-[5px] text-base text-blue_gray-900"
                size="txtLatoBold16Bluegray900"
              >
                Edit Package
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start w-[88%] md:w-full">
              <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                <Text className="text-gray-700 text-xs" size="txtLatoRegular12">
                  <span className="text-gray-700 font-lato text-left font-normal">
                    Package Name{" "}
                  </span>
                  <span className="text-red-400 font-lato text-left text-sm font-normal">
                    *
                  </span>
                </Text>
                <Input
                  name="arrow"
                  placeholder="Arrow"
                  className="p-0 placeholder:text-blue_gray-900 text-base text-left w-full"
                  wrapClassName="border border-blue_gray-100 border-solid w-full"
                  size="lg"
                ></Input>
              </div>
              <div className="flex sm:flex-col flex-row gap-5 items-center justify-between mt-[22px] w-full">
                <div className="flex sm:flex-1 flex-col gap-[7px] items-start justify-start w-[48%] sm:w-full">
                  <Text
                    className="text-gray-700 text-xs"
                    size="txtLatoRegular12"
                  >
                    <span className="text-gray-700 font-lato text-left font-normal">
                      Voucher Amount{" "}
                    </span>
                    <span className="text-red-400 font-lato text-left text-sm font-normal">
                      *
                    </span>
                  </Text>
                  <Input
                    name="price"
                    placeholder="3"
                    className="p-0 placeholder:text-blue_gray-900 text-base text-left w-full"
                    wrapClassName="border border-blue_gray-100 border-solid w-full"
                    size="lg"
                  ></Input>
                </div>
                <div className="flex sm:flex-1 flex-col gap-[7px] items-start justify-start w-[48%] sm:w-full">
                  <Text
                    className="text-gray-700 text-xs"
                    size="txtLatoRegular12"
                  >
                    <span className="text-gray-700 font-lato text-left font-normal">
                      Price{" "}
                    </span>
                    <span className="text-red-400 font-lato text-left text-sm font-normal">
                      *
                    </span>
                  </Text>
                  <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-row items-center justify-start p-[9px] rounded-lg w-full">
                    <Text
                      className="ml-0.5 text-base text-gray-700"
                      size="txtLatoRegular16Gray700"
                    >
                      $
                    </Text>
                    <Text
                      className="ml-1 text-base text-blue_gray-900"
                      size="txtLatoRegular16"
                    >
                      3
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-5 items-center justify-center mt-8 w-[53%] md:w-full">
                <Button className="!text-blue_gray-900 border border-blue_gray-900 border-solid cursor-pointer min-w-[100px] text-base text-center">
                  Cancel
                </Button>
                <Button
                  className="cursor-pointer min-w-[100px] text-base text-center"
                  color="blue_gray_900"
                >
                  Create
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default AdminPackageseditModal;

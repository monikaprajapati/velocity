import React from "react";
import { default as ModalProvider } from "react-modal";

import { Button, Input, Text } from "components";

const AdminPackagescreatenewModal = (props) => {
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
                Create New Package
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
                  name="rectangleThree"
                  placeholder=""
                  className="p-0 w-full"
                  wrapClassName="border border-blue_gray-100 border-solid flex h-10 w-full"
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
                    name="rectangleThree_One"
                    placeholder=""
                    className="p-0 w-full"
                    wrapClassName="border border-blue_gray-100 border-solid flex h-10 w-full"
                  ></Input>
                </div>
                <div className="flex flex-col gap-[7px] items-start justify-start">
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
                  <Text
                    className="bg-white-A700 border border-blue_gray-100 border-solid h-10 justify-center pl-3 sm:pr-5 pr-[35px] py-[9px] rounded-lg text-base text-gray-700 w-[200px]"
                    size="txtLatoRegular16Gray700"
                  >
                    $
                  </Text>
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

export default AdminPackagescreatenewModal;

import React from "react";
import { default as ModalProvider } from "react-modal";

import { Button, Img, Line, Text } from "components";

const TransactionHistoryPurchaseVouchersModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[36%]"
      overlayClassName="bg-black-900_7e fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-white-A700 border border-gray-400 border-solid flex flex-col items-end justify-start p-[30px] md:px-5 rounded-lg w-full">
          <div className="flex flex-col items-center justify-start mr-[35px] w-[79%] md:w-full">
            <Img
              className="h-16 w-16"
              src="images/img_success.svg"
              alt="success"
            />
            <Text
              className="mt-[31px] text-blue_gray-900 text-center text-lg"
              size="txtLatoBold18"
            >
              Payment Successful!
            </Text>
            <div className="flex flex-row items-center justify-between mt-[27px] w-full">
              <div className="flex flex-col gap-1.5 items-center justify-start">
                <Text
                  className="text-center text-gray-700 text-xs"
                  size="txtLatoRegular12"
                >
                  Amount
                </Text>
                <Text
                  className="text-base text-blue_gray-900 text-center"
                  size="txtLatoSemiBold16Bluegray900"
                >
                  $ 12
                </Text>
              </div>
              <Line className="bg-gray-200 h-[38px] mb-0.5 w-px" />
              <div className="flex flex-col items-center justify-start">
                <Text
                  className="text-center text-gray-700 text-xs"
                  size="txtLatoRegular12"
                >
                  Package
                </Text>
                <Text
                  className="mt-1 text-base text-blue_gray-900 text-center"
                  size="txtLatoSemiBold16Bluegray900"
                >
                  Standard
                </Text>
              </div>
              <Line className="bg-gray-200 h-[38px] mb-0.5 w-px" />
              <div className="flex flex-col gap-1.5 items-center justify-start">
                <Text
                  className="text-center text-gray-700 text-xs"
                  size="txtLatoRegular12"
                >
                  No. of Vouchers
                </Text>
                <Text
                  className="text-base text-blue_gray-900 text-center"
                  size="txtLatoSemiBold16Bluegray900"
                >
                  12
                </Text>
              </div>
            </div>
            <Button
              className="cursor-pointer min-w-[100px] mt-[29px] text-base text-center"
              color="blue_gray_900"
            >
              Okay
            </Button>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default TransactionHistoryPurchaseVouchersModal;

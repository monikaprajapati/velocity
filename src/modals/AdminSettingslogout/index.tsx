import React from "react";
import { default as ModalProvider } from "react-modal";

import { Button, Text } from "components";

const AdminSettingslogoutModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[36%]"
      overlayClassName="bg-black-900_7e fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-white-A700 border border-gray-400 border-solid flex flex-col items-center justify-start pb-[30px] md:px-5 rounded-lg w-full">
          <div className="bg-gray-200 border border-gray-400 border-solid flex flex-col items-start justify-end p-[13px] rounded-tl-lg rounded-tr-lg w-full">
            <a
              href="javascript:"
              className="ml-4 md:ml-[0] mt-[5px] text-base text-blue_gray-900"
            >
              <Text size="txtLatoBold16Bluegray900">Log out</Text>
            </a>
          </div>
          <Text
            className="mt-[31px] text-base text-blue_gray-900 text-center"
            size="txtLatoRegular16"
          >
            Are you sure you wish to sign out?
          </Text>
          <div className="flex flex-row gap-5 items-center justify-center mt-[29px] w-[46%] md:w-full">
            <Button className="!text-blue_gray-900 border border-blue_gray-900 border-solid cursor-pointer min-w-[100px] text-base text-center">
              No
            </Button>
            <Button
              className="cursor-pointer min-w-[100px] text-base text-center"
              color="blue_gray_900"
            >
              Yes
            </Button>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default AdminSettingslogoutModal;

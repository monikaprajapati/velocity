import React from "react";
import Drawer from "rc-drawer";
import "rc-drawer/assets/index.css";

import { Text } from "components";
import Footer from "components/Footer";

const AdminSettingsDrawer = (props) => {
  return (
    <Drawer placement="bottom" className="!w-full" {...props}>
      <div>
        <div className="flex flex-col font-barlow items-center justify-end mx-auto pt-[674px] sm:w-full md:w-full">
          <Footer className="bg-white-A700 flex items-center justify-center md:px-5 w-full" />
        </div>
      </div>
    </Drawer>
  );
};

export default AdminSettingsDrawer;

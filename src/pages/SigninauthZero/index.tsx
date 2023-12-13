import React from "react";

import { Img } from "components";

const SigninauthZeroPage: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-start mx-auto w-full">
        <Img
          className="h-[768px] sm:h-auto object-cover w-full"
          src="images/img_image1.png"
          alt="imageOne"
        />
      </div>
    </>
  );
};

export default SigninauthZeroPage;

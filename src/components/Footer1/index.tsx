import React from "react";

import { Img, Slider, Text } from "components";

type Footer1Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Footer1: React.FC<Footer1Props> = (props) => {
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <footer className={props.className}>
        <div className="flex md:flex-col flex-row gap-4 items-center justify-center mb-[94px] md:ml-[0] ml-[298px] mr-[980px] md:mt-0 mt-[390px] w-[7%] md:w-full">
          <Img
            className="cursor-pointer h-9 w-9"
            src="images/img_arrowleft.svg"
            alt="arrowleft"
            onClick={() => sliderRef.current?.slidePrev?.()}
          />
          <Img
            className="cursor-pointer h-9 w-9"
            src="images/img_arrowright.svg"
            alt="arrowright"
            onClick={() => sliderRef.current?.slideNext?.()}
          />
        </div>
        <Slider
          activeIndex={sliderState}
          responsive={{
            0: { items: 1 },
            550: { items: 1 },
            1050: { items: 1 },
          }}
          onSlideChanged={(e) => {
            setsliderState(e?.item);
          }}
          ref={sliderRef}
          className="bg-blue_gray-900 w-full"
          items={[...Array(3)].map(() => (
            <React.Fragment key={Math.random()}>
              <div className="flex flex-col items-center justify-start mx-2.5">
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                  <div className="flex md:flex-1 flex-col md:gap-10 gap-[114px] items-start justify-start w-[56%] md:w-full">
                    <div className="flex flex-col gap-5 items-start justify-start w-full">
                      <Text
                        className="leading-[42.00px] md:text-4xl sm:text-[34px] text-[38px] text-blue_gray-900"
                        size="txtBarlowBold38"
                      >
                        <span className="text-white-A700 font-barlow text-left font-bold">
                          Resume out.
                        </span>
                        <span className="text-blue_gray-900 font-barlow text-left font-bold">
                          <>
                            <br />
                          </>
                        </span>
                        <span className="text-yellow-A700 font-barlow text-left font-bold">
                          Career Wallet
                        </span>
                        <span className="text-blue_gray-900 font-barlow text-left font-bold">
                          {" "}
                        </span>
                        <span className="text-white-A700 font-barlow text-left font-bold">
                          in.
                        </span>
                      </Text>
                      <Text
                        className="leading-[26.00px] text-lg text-white-A700"
                        size="txtLatoRegular18"
                      >
                        <>
                          Career Wallets are mobile apps allowing individuals
                          <br />
                          to claim and store career and education Credentials
                          <br />
                          issued to them by their school, work, license issuer
                          etc.
                        </>
                      </Text>
                    </div>
                    <div className="h-9 w-[21%]"></div>
                  </div>
                  <div className="flex md:flex-1 flex-col items-center justify-start w-[34%] md:w-full">
                    <div className="flex flex-col items-center justify-start outline outline-[2px] outline-black-900 rounded-[16px] w-full">
                      <Img
                        className="h-[450px] md:h-auto object-cover rounded-[16px] w-full"
                        src="images/img_unnamed1.png"
                        alt="unnamedOne"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
        />
      </footer>
    </>
  );
};

Footer1.defaultProps = {};

export default Footer1;

import React from "react";

import { Card, CardHeader, CardBody } from "@material-tailwind/react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";

import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/core";
const Recommended = () => {
  return (
    <div>
      <div>
        <div className="mt-2">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl py-8 sm:py-24 lg:max-w-none lg:py-12">
              <h2 className="text-2xl font-bold text-gray-900 ">
                Recommended Houses{" "}
              </h2>
              <>
                <Splide
                  options={{
                    // type: "loop",
                    arrows: false,
                    drag: "free",
                    focus: "center",
                    gap: "1rem",
                    perPage: 4,
                    height: "25rem",
                    breakpoints: {
                      1200: { arrows: true, perPage: 4 },
                      800: { perPage: 2 },
                      640: { perPage: 1 },
                    },

                    // autoScroll: {
                    //   speed: 2,
                    // },
                  }}
                  // extensions={{ AutoScroll }}
                >
                  <SplideSlide>
                    <div>
                      <Card className="max-w-[24rem] overflow-hidden">
                        <CardHeader
                          floated={false}
                          shadow={false}
                          color="transparent"
                          className="m-0 rounded-none"
                        >
                          <img
                            src="https://i.ibb.co/GcSMwnz/div-property-box.png"
                            className="w-full"
                          />
                        </CardHeader>
                        <CardBody className="p-2">
                          <div className="flex justify-between w-full px-3">
                            <p
                              className="bg-green-500 flex items-center leading-none text-sm font-medium text-gray-50 pt-1.5 pr-3 pb-1.5 pl-3
      rounded-full uppercase"
                            >
                              Cozy Single Room
                            </p>

                            <div className="flex">
                              <p>5.0</p>
                              <div>
                                <i className="fas fa-star ms-2" />
                              </div>
                            </div>
                          </div>
                          <a className="px-3">Available seats: 1</a>

                          <div className="flex justify-between w-full px-3 mt-3">
                            <div>
                              <p className="text-sm text-black font-bold">
                                Per Day :{" "}
                                <span className="font-normal"> BDT 300</span>
                              </p>
                              <p className="text-sm text-black font-bold">
                                Per Month :{" "}
                                <span className="font-normal"> BDT 6000</span>
                              </p>
                              <p className="text-sm text-black font-bold">
                                Per Year :{" "}
                                <span className="font-normal"> BDT 80,000</span>
                              </p>
                            </div>
                            <div>
                              <i className="fa-regular fa-heart mt-7 text-2xl"></i>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    </div>
                  </SplideSlide>
                  <SplideSlide>
                    <div>
                      <Card className="max-w-[24rem] overflow-hidden">
                        <CardHeader
                          floated={false}
                          shadow={false}
                          color="transparent"
                          className="m-0 rounded-none"
                        >
                          <img
                            src="https://i.ibb.co/XZJNXrX/div-property-box-1.png"
                            className="w-full"
                          />
                        </CardHeader>
                        <CardBody className="p-2">
                          <div className="flex justify-between w-full px-3">
                            <p
                              className="bg-green-500 flex items-center leading-none text-sm font-medium text-gray-50 pt-1.5 pr-3 pb-1.5 pl-3
      rounded-full uppercase"
                            >
                              Cozy Single Room
                            </p>

                            <div className="flex">
                              <p>5.0</p>
                              <div>
                                <i className="fas fa-star ms-2" />
                              </div>
                            </div>
                          </div>
                          <a className="px-3">Available seats: 1</a>

                          <div className="flex justify-between w-full px-3 mt-3">
                            <div>
                              <p className="text-sm text-black font-bold">
                                Per Day :{" "}
                                <span className="font-normal"> BDT 300</span>
                              </p>
                              <p className="text-sm text-black font-bold">
                                Per Month :{" "}
                                <span className="font-normal"> BDT 6000</span>
                              </p>
                              <p className="text-sm text-black font-bold">
                                Per Year :{" "}
                                <span className="font-normal"> BDT 80,000</span>
                              </p>
                            </div>
                            <div>
                              <i className="fa-regular fa-heart mt-7 text-2xl"></i>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    </div>
                  </SplideSlide>
                  <SplideSlide>
                    <div>
                      <Card className="max-w-[24rem] overflow-hidden">
                        <CardHeader
                          floated={false}
                          shadow={false}
                          color="transparent"
                          className="m-0 rounded-none"
                        >
                          <img
                            src="https://i.ibb.co/F05DVGX/div-property-box-2.png"
                            className="w-full"
                          />
                        </CardHeader>
                        <CardBody className="p-2">
                          <div className="flex justify-between w-full px-3">
                            <p
                              className="bg-green-500 flex items-center leading-none text-sm font-medium text-gray-50 pt-1.5 pr-3 pb-1.5 pl-3
      rounded-full uppercase"
                            >
                              Cozy Single Room
                            </p>

                            <div className="flex">
                              <p>5.0</p>
                              <div>
                                <i className="fas fa-star ms-2" />
                              </div>
                            </div>
                          </div>
                          <a className="px-3">Available seats: 1</a>

                          <div className="flex justify-between w-full px-3 mt-3">
                            <div>
                              <p className="text-sm text-black font-bold">
                                Per Day :{" "}
                                <span className="font-normal"> BDT 300</span>
                              </p>
                              <p className="text-sm text-black font-bold">
                                Per Month :{" "}
                                <span className="font-normal"> BDT 6000</span>
                              </p>
                              <p className="text-sm text-black font-bold">
                                Per Year :{" "}
                                <span className="font-normal"> BDT 80,000</span>
                              </p>
                            </div>
                            <div>
                              <i className="fa-regular fa-heart mt-7 text-2xl"></i>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    </div>
                  </SplideSlide>
                  <SplideSlide>
                    <div>
                      <Card className="max-w-[24rem] overflow-hidden">
                        <CardHeader
                          floated={false}
                          shadow={false}
                          color="transparent"
                          className="m-0 rounded-none"
                        >
                          <img
                            src="https://i.ibb.co/W6SmswG/div-property-box-3.png"
                            className="w-full"
                          />
                        </CardHeader>
                        <CardBody className="p-2">
                          <div className="flex justify-between w-full px-3">
                            <p
                              className="bg-green-500 flex items-center leading-none text-sm font-medium text-gray-50 pt-1.5 pr-3 pb-1.5 pl-3
      rounded-full uppercase"
                            >
                              Cozy Single Room
                            </p>

                            <div className="flex">
                              <p>5.0</p>
                              <div>
                                <i className="fas fa-star ms-2" />
                              </div>
                            </div>
                          </div>
                          <a className="px-3">Available seats: 1</a>

                          <div className="flex justify-between w-full px-3 mt-3">
                            <div>
                              <p className="text-sm text-black font-bold">
                                Per Day :{" "}
                                <span className="font-normal"> BDT 300</span>
                              </p>
                              <p className="text-sm text-black font-bold">
                                Per Month :{" "}
                                <span className="font-normal"> BDT 6000</span>
                              </p>
                              <p className="text-sm text-black font-bold">
                                Per Year :{" "}
                                <span className="font-normal"> BDT 80,000</span>
                              </p>
                            </div>
                            <div>
                              <i className="fa-regular fa-heart mt-7 text-2xl"></i>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    </div>
                  </SplideSlide>
                  <SplideSlide>
                    <div>
                      <Card className="max-w-[24rem] overflow-hidden">
                        <CardHeader
                          floated={false}
                          shadow={false}
                          color="transparent"
                          className="m-0 rounded-none"
                        >
                          <img
                            src="https://i.ibb.co/GcSMwnz/div-property-box.png"
                            className="w-full"
                          />
                        </CardHeader>
                        <CardBody className="p-2">
                          <div className="flex justify-between w-full px-3">
                            <p
                              className="bg-green-500 flex items-center leading-none text-sm font-medium text-gray-50 pt-1.5 pr-3 pb-1.5 pl-3
      rounded-full uppercase"
                            >
                              Cozy Single Room
                            </p>

                            <div className="flex">
                              <p>5.0</p>
                              <div>
                                <i className="fas fa-star ms-2" />
                              </div>
                            </div>
                          </div>
                          <a className="px-3">Available seats: 1</a>

                          <div className="flex justify-between w-full px-3 mt-3">
                            <div>
                              <p className="text-sm text-black font-bold">
                                Per Day :{" "}
                                <span className="font-normal"> BDT 300</span>
                              </p>
                              <p className="text-sm text-black font-bold">
                                Per Month :{" "}
                                <span className="font-normal"> BDT 6000</span>
                              </p>
                              <p className="text-sm text-black font-bold">
                                Per Year :{" "}
                                <span className="font-normal"> BDT 80,000</span>
                              </p>
                            </div>
                            <div>
                              <i className="fa-regular fa-heart mt-7 text-2xl"></i>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    </div>
                  </SplideSlide>

                  {/* <div className="splide__arrows">
                  <button className="splide__arrow splide__arrow--prev">
                    <i className="fa-solid fa-circle-arrow-left text-3xl"></i>
                  </button>
                  <button className="splide__arrow splide__arrow--next">
                    <i className="fa-solid fa-circle-arrow-right text-3xl"></i>
                  </button>
                </div> */}
                </Splide>
              </>
              {/* <div className="mt-6 space-y-12 lg:grid lg:grid-cols-4 lg:gap-x-6 lg:space-y-0">
              <div>
                <Card className="max-w-[24rem] overflow-hidden">
                  <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="m-0 rounded-none"
                  >
                    <img
                      src="https://i.ibb.co/GcSMwnz/div-property-box.png"
                      className="w-full"
                    />
                  </CardHeader>
                  <CardBody className="p-2">
                    <div className="flex justify-between w-full px-3">
                      <p
                        className="bg-green-500 flex items-center leading-none text-sm font-medium text-gray-50 pt-1.5 pr-3 pb-1.5 pl-3
      rounded-full uppercase"
                      >
                        Cozy Single Room
                      </p>

                      <div className="flex">
                        <p>5.0</p>
                        <div>
                          <i className="fas fa-star ms-2" />
                        </div>
                      </div>
                    </div>
                    <a className="px-3">Available seats: 1</a>

                    <div className="flex justify-between w-full px-3 mt-3">
                      <div>
                        <p className="text-sm text-black font-bold">
                          Per Day :{" "}
                          <span className="font-normal"> BDT 300</span>
                        </p>
                        <p className="text-sm text-black font-bold">
                          Per Month :{" "}
                          <span className="font-normal"> BDT 6000</span>
                        </p>
                        <p className="text-sm text-black font-bold">
                          Per Year :{" "}
                          <span className="font-normal"> BDT 80,000</span>
                        </p>
                      </div>
                      <div>
                        <i className="fa-regular fa-heart mt-7 text-2xl"></i>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>
              <div>
                <Card className="max-w-[24rem] overflow-hidden">
                  <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="m-0 rounded-none"
                  >
                    <img
                      src="https://i.ibb.co/XZJNXrX/div-property-box-1.png"
                      className="w-full"
                    />
                  </CardHeader>
                  <CardBody className="p-2">
                    <div className="flex justify-between w-full px-3">
                      <p
                        className="bg-green-500 flex items-center leading-none text-sm font-medium text-gray-50 pt-1.5 pr-3 pb-1.5 pl-3
      rounded-full uppercase"
                      >
                        Cozy Single Room
                      </p>

                      <div className="flex">
                        <p>5.0</p>
                        <div>
                          <i className="fas fa-star ms-2" />
                        </div>
                      </div>
                    </div>
                    <a className="px-3">Available seats: 1</a>

                    <div className="flex justify-between w-full px-3 mt-3">
                      <div>
                        <p className="text-sm text-black font-bold">
                          Per Day :{" "}
                          <span className="font-normal"> BDT 300</span>
                        </p>
                        <p className="text-sm text-black font-bold">
                          Per Month :{" "}
                          <span className="font-normal"> BDT 6000</span>
                        </p>
                        <p className="text-sm text-black font-bold">
                          Per Year :{" "}
                          <span className="font-normal"> BDT 80,000</span>
                        </p>
                      </div>
                      <div>
                        <i className="fa-regular fa-heart mt-7 text-2xl"></i>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>
              <div>
                <Card className="max-w-[24rem] overflow-hidden">
                  <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="m-0 rounded-none"
                  >
                    <img
                      src="https://i.ibb.co/F05DVGX/div-property-box-2.png"
                      className="w-full"
                    />
                  </CardHeader>
                  <CardBody className="p-2">
                    <div className="flex justify-between w-full px-3">
                      <p
                        className="bg-green-500 flex items-center leading-none text-sm font-medium text-gray-50 pt-1.5 pr-3 pb-1.5 pl-3
      rounded-full uppercase"
                      >
                        Cozy Single Room
                      </p>

                      <div className="flex">
                        <p>5.0</p>
                        <div>
                          <i className="fas fa-star ms-2" />
                        </div>
                      </div>
                    </div>
                    <a className="px-3">Available seats: 1</a>

                    <div className="flex justify-between w-full px-3 mt-3">
                      <div>
                        <p className="text-sm text-black font-bold">
                          Per Day :{" "}
                          <span className="font-normal"> BDT 300</span>
                        </p>
                        <p className="text-sm text-black font-bold">
                          Per Month :{" "}
                          <span className="font-normal"> BDT 6000</span>
                        </p>
                        <p className="text-sm text-black font-bold">
                          Per Year :{" "}
                          <span className="font-normal"> BDT 80,000</span>
                        </p>
                      </div>
                      <div>
                        <i className="fa-regular fa-heart mt-7 text-2xl"></i>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>
              <div>
                <Card className="max-w-[24rem] overflow-hidden">
                  <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="m-0 rounded-none"
                  >
                    <img
                      src="https://i.ibb.co/W6SmswG/div-property-box-3.png"
                      className="w-full"
                    />
                  </CardHeader>
                  <CardBody className="p-2">
                    <div className="flex justify-between w-full px-3">
                      <p
                        className="bg-green-500 flex items-center leading-none text-sm font-medium text-gray-50 pt-1.5 pr-3 pb-1.5 pl-3
      rounded-full uppercase"
                      >
                        Cozy Single Room
                      </p>

                      <div className="flex">
                        <p>5.0</p>
                        <div>
                          <i className="fas fa-star ms-2" />
                        </div>
                      </div>
                    </div>
                    <a className="px-3">Available seats: 1</a>

                    <div className="flex justify-between w-full px-3 mt-3">
                      <div>
                        <p className="text-sm text-black font-bold">
                          Per Day :{" "}
                          <span className="font-normal"> BDT 300</span>
                        </p>
                        <p className="text-sm text-black font-bold">
                          Per Month :{" "}
                          <span className="font-normal"> BDT 6000</span>
                        </p>
                        <p className="text-sm text-black font-bold">
                          Per Year :{" "}
                          <span className="font-normal"> BDT 80,000</span>
                        </p>
                      </div>
                      <div>
                        <i className="fa-regular fa-heart mt-7 text-2xl"></i>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommended;

import React from "react";
import { Card, CardBody, Typography, Avatar } from "@material-tailwind/react";
const Review = () => {
  return (
    <div>
      <div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-gray-900">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <div className="grid grid-cols-12 sm:px-5 gap-x-8 gap-y-16">
              <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4 ">
                <Card
                  shadow={false}
                  className="w-full max-w-[28rem] overflow-hidden text-center"
                  style={{ background: "#35B0A7", opacity: 0.5 }}
                >
                  <CardBody className="px-6">
                    <Typography
                      variant="h6"
                      color="white"
                      className="mb-6 font-medium leading-[1.5]"
                    >
                      “I have been using this web hosting service for a few
                      months now and overall it is been fine. The uptime has
                      been good and I have nothad any major issues. The pricing
                      is also reasonable. Nothing particularly stands out as
                      exceptional, but it gets the job done.”
                    </Typography>
                    <div>
                      <i className="fas fa-star text-orange-200"></i>
                      <i className="fas fa-star text-orange-200"></i>
                      <i className="fas fa-star text-orange-200"></i>
                      <i className="fas fa-star text-orange-200"></i>
                      <i className="fas fa-star text-orange-200"></i>
                    </div>
                    <Avatar
                      size="xl"
                      variant="circular"
                      alt="candice wu"
                      className="border-2 border-white mt-3"
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                    />
                    <Typography variant="h5" className="mb-4 text-white">
                      Candice Wu
                    </Typography>
                    <Typography
                      variant="h6"
                      className="mb-6 font-medium leading-[1.5] text-white"
                    >
                      Candice Wu
                    </Typography>
                  </CardBody>
                </Card>
              </div>
              <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4 ">
                <Card
                  shadow={false}
                  className="w-full max-w-[28rem] overflow-hidden text-center"
                  style={{ background: "#35B0A7" }}
                >
                  <CardBody className="px-6">
                    <Typography
                      variant="h6"
                      color="white"
                      className="mb-6 font-medium leading-[1.5]"
                    >
                      “I have been using this web hosting service for a few
                      months now and overall it is been fine. The uptime has
                      been good and I have nothad any major issues. The pricing
                      is also reasonable. Nothing particularly stands out as
                      exceptional, but it gets the job done.”
                    </Typography>
                    <div>
                      <i className="fas fa-star text-orange-200"></i>
                      <i className="fas fa-star text-orange-200"></i>
                      <i className="fas fa-star text-orange-200"></i>
                      <i className="fas fa-star text-orange-200"></i>
                      <i className="fas fa-star text-orange-200"></i>
                    </div>
                    <Avatar
                      size="xl"
                      variant="circular"
                      alt="candice wu"
                      className="border-2 border-white mt-3"
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                    />
                    <Typography variant="h5" className="mb-4 text-white">
                      Candice Wu
                    </Typography>
                    <Typography
                      variant="h6"
                      className="mb-6 font-medium leading-[1.5] text-white"
                    >
                      Candice Wu
                    </Typography>
                  </CardBody>
                </Card>
              </div>
              <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4 ">
                <Card
                  shadow={false}
                  className="w-full max-w-[28rem] overflow-hidden text-center"
                  style={{ background: "#35B0A7", opacity: 0.5 }}
                >
                  <CardBody className="px-6">
                    <Typography
                      variant="h6"
                      color="white"
                      className="mb-6 font-medium leading-[1.5]"
                    >
                      “I have been using this web hosting service for a few
                      months now and overall it is been fine. The uptime has
                      been good and I have nothad any major issues. The pricing
                      is also reasonable. Nothing particularly stands out as
                      exceptional, but it gets the job done.”
                    </Typography>
                    <div>
                      <i className="fas fa-star text-orange-200"></i>
                      <i className="fas fa-star text-orange-200"></i>
                      <i className="fas fa-star text-orange-200"></i>
                      <i className="fas fa-star text-orange-200"></i>
                      <i className="fas fa-star text-orange-200"></i>
                    </div>
                    <Avatar
                      size="xl"
                      variant="circular"
                      alt="candice wu"
                      className="border-2 border-white mt-3"
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                    />
                    <Typography variant="h5" className="mb-4 text-white">
                      Candice Wu
                    </Typography>
                    <Typography
                      variant="h6"
                      className="mb-6 font-medium leading-[1.5] text-white"
                    >
                      Candice Wu
                    </Typography>
                  </CardBody>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;

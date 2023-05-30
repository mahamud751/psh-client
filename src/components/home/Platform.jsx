import React from "react";
import { Card, CardHeader, CardBody } from "@material-tailwind/react";
const Platform = () => {
  return (
    <div>
      <div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-gray-900">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-12">
            <h2 className="text-2xl font-bold text-gray-900 p-5">
              Why this platform better then others?
            </h2>
            <div className="grid grid-cols-12 sm:px-5 gap-x-8 gap-y-16">
              <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4 ">
                <Card className="max-w-[24rem] overflow-hidden">
                  <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="m-0 rounded-none"
                  >
                    <img
                      src="https://i.ibb.co/k69nnqB/fully-furnished-3x-webp.png
                
                    "
                      alt="ui/ux review check"
                    />
                  </CardHeader>
                  <CardBody className="p-4 h-40">
                    <h6 className="text-black font-bold">
                      Fully furnished Room
                    </h6>

                    <p className="mt-3">
                      All rooms are equipped with AC, WiFi, and full furnishing.
                      Ready to move in!
                    </p>
                  </CardBody>
                </Card>
              </div>
              <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4 ">
                <Card className="max-w-[24rem] overflow-hidden">
                  <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="m-0 rounded-none"
                  >
                    <img
                      src="https://i.ibb.co/Wcp72Hq/full-services-3x-webp.png"
                      alt="ui/ux review check"
                    />
                  </CardHeader>
                  <CardBody className="p-4 h-40">
                    <h6 className="text-black font-bold">Full services</h6>

                    <p className="mt-3">
                      Our laundry, room cleaning, and maintenance team is ready
                      to help whenever you need them.
                    </p>
                  </CardBody>
                </Card>
              </div>
              <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4 ">
                <Card className="max-w-[24rem] overflow-hidden">
                  <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="m-0 rounded-none"
                  >
                    <img
                      src="https://i.ibb.co/5sybqsZ/monthly-payment-3x-webp.png"
                      alt="ui/ux review check"
                    />
                  </CardHeader>
                  <CardBody className="p-4 h-40">
                    <h6 className="text-black font-bold">
                      Fully furnished Room
                    </h6>

                    <p className="mt-3">
                      All rooms are equipped with AC, WiFi, and full furnishing.
                      Ready to move in!
                    </p>
                  </CardBody>
                </Card>
              </div>
            </div>
            <div className="mt-24">
              <div className="grid grid-cols-12 sm:px-5 gap-x-8 gap-y-16">
                <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-6">
                  <p>
                    Project Second Home is a website where you can easily find
                    and book daily, weekly, and monthly stays in hostels and
                    hotels all over the country. With our user-friendly search
                    functionality, you can quickly find the perfect room for
                    your needs. Plus, take advantage of our new and promo offers
                    to save even more on your stay. Create an account to enjoy a
                    seamless booking experience and discover your new home away
                    from home today.
                  </p>
                </div>
                <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-6">
                  <img src="https://i.ibb.co/NsZtvPX/Group-42.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platform;

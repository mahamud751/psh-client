import React from "react";
import "./Place.css";
const Place = () => {
  return (
    <div>
      <div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-gray-900">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-12">
            <h2 className="text-2xl font-bold text-gray-900">
              Looking to best place to Stay
            </h2>
            <div className="grid grid-cols-5 gap-4">
              <div className=" items-start">
                <div
                  className={`module bg-[url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/skyscrapers.jpg')]`}
                >
                  <header>
                    <h1 className="text-center text-4xl">Dhaka</h1>
                  </header>
                </div>
              </div>
              <div className=" items-start">
                <div
                  className={`module bg-[url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/skyscrapers.jpg')]`}
                >
                  <header>
                    <h1 className="text-center text-4xl">Dhaka</h1>
                  </header>
                </div>
              </div>
              <div className=" items-start">
                <div
                  className={`module bg-[url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/skyscrapers.jpg')]`}
                >
                  <header>
                    <h1 className="text-center text-4xl">Dhaka</h1>
                  </header>
                </div>
              </div>
              <div className=" items-start">
                <div
                  className={`module bg-[url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/skyscrapers.jpg')]`}
                >
                  <header>
                    <h1 className="text-center text-4xl">Dhaka</h1>
                  </header>
                </div>
              </div>
              <div className=" items-start">
                <div
                  className={`module bg-[url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/skyscrapers.jpg')]`}
                >
                  <header>
                    <h1 className="text-center text-4xl">Dhaka</h1>
                  </header>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Place;

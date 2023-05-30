import React from "react";
import "./Custom.css";
const Footer = () => {
  return (
    <div>
      <div>
        <div style={{ backgroundColor: "#1A8880" }}>
          <div className=" lg:px-64" style={{ background: "#35B0A7" }}>
            <div className="  dark:text-gray-300">
              <ul className="flex flex-wrap justify-center py-4 text-lg font-light">
                <li className="w-1/2 md:w-1/3 lg:w-1/4">
                  <div className="flex">
                    <i className="fa-solid fa-envelope text-5xl text-white"></i>
                    <div className="text-start ms-3">
                      <h2 className="text-white dark:text-gray-200 text-md ">
                        Email Support
                      </h2>
                      <h6 className="text-white">helo@raynative.com</h6>
                    </div>
                  </div>
                </li>

                <li className="w-1/2 md:w-1/3 lg:w-1/4">
                  <div className="flex">
                    <i className="fa-solid fa-phone text-5xl text-white"></i>

                    <div className="text-start ms-3">
                      <h2 className="text-white dark:text-gray-200 text-md ">
                        Phone Support
                      </h2>
                      <h6 className="text-white">08147758883, 08100591556</h6>
                    </div>
                  </div>
                </li>

                <li className="w-1/2 md:w-1/3 lg:w-1/4">
                  <div className="flex">
                    <i className="fa-brands fa-whatsapp text-5xl text-white"></i>
                    <div className="text-start ms-3">
                      <h2 className="text-white dark:text-gray-200 text-md ">
                        Whatsapp Support
                      </h2>
                      <h6 className="text-white">08147758883</h6>
                    </div>
                  </div>
                </li>

                <li className="w-1/2 md:w-1/3 lg:w-1/4">
                  <form className=" flex">
                    <input
                      className="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
                      placeholder="your@mail.com"
                    />
                    <button className="px-8 rounded-r-lg bg-yellow-400  text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r">
                      Subscribe
                    </button>
                  </form>
                </li>
              </ul>
            </div>
          </div>
          <footer className=" pt-4 pb-8 xl:pt-8 lg:px-64">
            <div className="  dark:text-gray-300">
              <ul className="flex flex-wrap justify-center pb-8 text-lg font-light">
                <li className="w-1/2 md:w-1/3 lg:w-1/5">
                  <div className="text-start">
                    <h2 className="text-white dark:text-gray-200 text-md mb-4">
                      About PSH
                    </h2>
                    <ul className="footer_li">
                      <li className="mb-4  duration-200 hover:text-gray-800 dark:hover:text-white">
                        <a href="#">Our Story</a>
                      </li>
                      <li className="mb-4  duration-200 hover:text-gray-800 dark:hover:text-white">
                        <a href="#">Our Team</a>
                      </li>
                      <li className="mb-4  duration-200 hover:text-gray-800 dark:hover:text-white">
                        <a href="#">Our Service</a>
                      </li>
                      <li className="mb-4  duration-200 hover:text-gray-800 dark:hover:text-white">
                        <a href="#">Testimonials</a>
                      </li>
                      <li className="mb-4  duration-200 hover:text-gray-800 dark:hover:text-white">
                        <a href="#">Terms & Conditions</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="w-1/2 md:w-1/3 lg:w-1/5">
                  <div className="text-start">
                    <h2 className="text-white dark:text-gray-200 text-md uppercase mb-4">
                      Rooms Category
                    </h2>
                    <ul className="footer_li">
                      <li className="mb-4  duration-200 hover:text-gray-800 dark:hover:text-white">
                        <a href="#">Standard Room</a>
                      </li>
                      <li className="mb-4  duration-200 hover:text-gray-800 dark:hover:text-white">
                        <a href="#">Deluxe Room</a>
                      </li>
                      <li className="mb-4  duration-200 hover:text-gray-800 dark:hover:text-white">
                        <a href="#">Executive Room</a>
                      </li>
                      <li className="mb-4  duration-200 hover:text-gray-800 dark:hover:text-white">
                        <a href="#">Premium Room</a>
                      </li>
                      <li className="mb-4  duration-200 hover:text-gray-800 dark:hover:text-white">
                        <a href="#">Family Room</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="w-1/2 md:w-1/3 lg:w-1/5">
                  <div className="text-start">
                    <h2 className="text-white dark:text-gray-200 text-md uppercase mb-4">
                      Bookings
                    </h2>
                    <ul className="footer_li">
                      <li className="mb-4  duration-200 hover:text-gray-800 dark:hover:text-white">
                        <a href="#">Book Now</a>
                      </li>
                      <li className="mb-4  duration-200 hover:text-gray-800 dark:hover:text-white">
                        <a href="#">Room Availability</a>
                      </li>
                      <li className="mb-4  duration-200 hover:text-gray-800 dark:hover:text-white">
                        <a href="#">Reservation Policies</a>
                      </li>
                      <li className="mb-4  duration-200 hover:text-gray-800 dark:hover:text-white">
                        <a href="#">Discount and Offers</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="w-1/2 md:w-1/3 lg:w-1/5">
                  <div className="text-start">
                    <h2 className="text-white dark:text-gray-200 text-md uppercase mb-4">
                      Bookings
                    </h2>
                    <ul className="footer_li">
                      <li className="mb-4  duration-200 hover:text-gray-800 dark:hover:text-white">
                        <a href="#">Book Now</a>
                      </li>
                      <li className="mb-4  duration-200 hover:text-gray-800 dark:hover:text-white">
                        <a href="#">Room Availability</a>
                      </li>
                      <li className="mb-4  duration-200 hover:text-gray-800 dark:hover:text-white">
                        <a href="#">Reservation Policies</a>
                      </li>
                      <li className="mb-4  duration-200 hover:text-gray-800 dark:hover:text-white">
                        <a href="#">Discount and Offers</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="w-1/2 md:w-1/3 lg:w-1/5">
                  <div className="text-start">
                    <h2 className="text-white dark:text-gray-200 text-md uppercase mb-4">
                      Connect with us
                    </h2>
                    <div className="flex mx-auto">
                      <i className="fa-brands fa-youtube text-white text-3xl"></i>
                      <i className="fa-brands fa-facebook text-white text-3xl mx-5"></i>
                      <i className="fa-brands fa-linkedin text-white text-3xl"></i>
                      <i className="fa-brands fa-twitter text-white text-3xl ms-5"></i>
                    </div>
                    <div className="mt-12">
                      <img src="https://i.ibb.co/Pg69RP3/app.png" alt="" />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </footer>
          <div
            className="text-center   flex items-center justify-center text-white h-24"
            style={{ background: "#166F68" }}
          >
            Copyright © 2022 Raynative.com. All rights reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

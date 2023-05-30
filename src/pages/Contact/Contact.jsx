import React from "react";

import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import Offices from "../../components/contact/Offices";

const Contact = () => {
  return (
    <div className="mt-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-8">
          <div className="">
            <div className="">
              <span className="block mb-4 text-base text-primary font-semibold uppercase">
                Contact Us
              </span>
              <h2
                className="
            text-dark
            mb-6
            uppercase
            font-bold
            text-[32px]
            sm:text-[40px]
            lg:text-[36px]
            xl:text-[40px]
            "
              >
                Let’s talk.
              </h2>
              <p className="text-base text-body-color leading-relaxed mb-9">
                Have a question or need assistance? We are here to help! Use the
                contact form below to get in touch with the Project Second Home
                team
              </p>
              <div className="flex">
                <button className="contact_btn">
                  Call us +880 1234-567890
                </button>
                <button className="contact_btn ms-4">
                  Call us +880 1234-567890
                </button>
              </div>
            </div>
          </div>
          <div className="">
            <Typography variant="h4" color="blue-gray">
              Contact Us
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              If you have any question about our service . Fill the form below.
              We wll help you
            </Typography>
            <form className="mt-8 mb-2  max-w-screen-lg sm:w-96">
              <div className="flex">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Name
                  </label>
                  <Input size="lg" label="Name" />
                </div>

                <div className="ms-12">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Email
                  </label>
                  <Input size="lg" label="Email" />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Choose topic
                </label>
                <div className="mt-2">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>English</option>
                    <option>Bangla</option>
                    <option>Korean</option>
                  </select>
                </div>
              </div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
              <div className="flex justify-center w-full">
                <button className="contact_btn1 mt-6">Contact Us</button>
              </div>
            </form>
          </div>
        </div>
        <Offices />
      </div>
    </div>
  );
};

export default Contact;

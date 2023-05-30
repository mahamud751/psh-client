"use client";
import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import "./profile.css";
import Booking from "../../components/profile/Booking";
import Ticket from "../../components/profile/Ticket";

export default function Profile() {
  const [activeTab, setActiveTab] = React.useState("info");
  const data = [
    {
      label: "Personal Info",
      value: "info",
      icon: "Customer.png",
    },
    {
      label: "Booking History",
      value: "booking",
      icon: "Schedule.png",
    },
    {
      label: "Payment Setting",
      value: "payment",
      icon: "Card Security.png",
    },
    {
      label: "Wishlist",
      value: "wishlist",
      icon: "Heart.png",
    },
    {
      label: "Tickets",
      value: "tickets",
      icon: "Heart.png",
    },
    {
      label: "Settings",
      value: "settings",
      icon: "Support.png",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-gray-900">
      <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-12">
        <div className="my-12">
          <Tabs value={activeTab} orientation="vertical">
            <TabsHeader className="w-60">
              <img src="https://i.ibb.co/jwYHgqz/Rectangle-97.png" alt="" />
              <h2 className="font-bold text-center text-xl uppercase my-2 block mb-0">
                John Brown
              </h2>
              <span className="mt-0 text-[#35B0A7] text-center font-bold mb-3">
                Member Since May 2023
              </span>

              {data.map((tab, idx) => (
                <Tab
                  key={idx}
                  className="place-items-start profileTab"
                  value={tab.value}
                >
                  <div className="flex items-center gap-2 p-2 ">
                    <img src={`./icon/${tab.icon}`} alt="" />
                    <span className="capitalize">{tab.label}</span>
                  </div>
                </Tab>
              ))}
            </TabsHeader>

            {/* tabs description */}
            <TabsBody>
              {/* Personal Info Description */}
              <TabPanel value="info" className="py-0">
                <div className="flex justify-around items-center">
                  {/* one */}
                  <div className="info-inner text-center">
                    <div className="inner-circle mb-2">
                      <div className="circle">
                        <img src="./profile/Armchair.png" alt="" />
                      </div>
                    </div>
                    <span className="text-[#35B0A7] text-2xl">15</span>
                    <span className="text-2xl"> Rooms</span>
                  </div>
                  <div className="info-inner text-center">
                    <div className="inner-circle mb-2">
                      <div className="circle">
                        <img src="./profile/Calendar.png" alt="" />
                      </div>
                    </div>
                    <span className="text-[#35B0A7] text-2xl">43</span>
                    <span className="text-2xl"> Days</span>
                  </div>
                  <div className="info-inner text-center">
                    <div className="inner-circle mb-2">
                      <div className="circle">
                        <img src="./profile/Camera.png" alt="" />
                      </div>
                    </div>
                    <span className="text-[#35B0A7] text-2xl">15</span>
                    <span className="text-2xl"> Rooms</span>
                  </div>
                  <div className="info-inner text-center">
                    <div className="inner-circle mb-2">
                      <div className="circle">
                        <img src="./profile/Vector.png" alt="" />
                      </div>
                    </div>
                    <span className="text-[#35B0A7] text-2xl">15</span>
                    <span className="text-2xl"> Rooms</span>
                  </div>
                </div>

                <div className="flex mt-12 ms-5">
                  <div className="text-start left-text">
                    <p>Name:</p>
                    <p>Email:</p>
                    <p>Phone number:</p>
                    <p>address:</p>
                    <p>city:</p>
                    <p>state/region:</p>
                    <p>postal code:</p>
                    <p>country:</p>
                  </div>
                  <div className="text-start ms-10 right-text">
                    <p>john wick</p>
                    <p>johnwi@mail</p>
                    <p>+88034934934</p>
                    <p>Dhaka, bangladesh</p>
                    <p>john wick</p>
                    <p>johnwi@mail</p>
                    <p>+88034934934</p>
                    <p>Dhaka, bangladesh</p>
                  </div>
                </div>
              </TabPanel>

              {/* Booking history Description */}
              <TabPanel value="booking" className="py-0">
                <Booking />
              </TabPanel>

              {/* Payment Setting Description */}
              <TabPanel value="payment" className="py-0">
                Payment Setting Description
              </TabPanel>

              {/* Wishlist Description */}
              <TabPanel value="wishlist" className="py-0">
                <div className="grid grid-cols-12 sm:px-5 gap-x-8 gap-y-16">
                  <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-12 xl:col-span-3">
                    <Card
                      shadow={false}
                      className="relative grid h-[20rem] w-full  items-end justify-center overflow-hidden text-center"
                    >
                      <CardHeader
                        floated={false}
                        shadow={false}
                        color="transparent"
                        className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('./profile/4.png')] bg-cover bg-center"
                      >
                        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                      </CardHeader>
                      <CardBody className="relative py-2 px-6 text-start">
                        <Typography
                          color="white"
                          className="mb-2 font-medium leading-[1.5] wishlist_text"
                        >
                          Family Apartment
                        </Typography>
                        <Typography color="white" className="wishlist_text">
                          100 Smart Street, LA, USA
                        </Typography>
                      </CardBody>
                    </Card>
                  </div>
                  <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-12 xl:col-span-3">
                    <Card
                      shadow={false}
                      className="relative grid h-[20rem] w-full  items-end justify-center overflow-hidden text-center"
                    >
                      <CardHeader
                        floated={false}
                        shadow={false}
                        color="transparent"
                        className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('./profile/8.png')] bg-cover bg-center"
                      >
                        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                      </CardHeader>
                      <CardBody className="relative py-2 px-6 text-start">
                        <Typography
                          color="white"
                          className="mb-2 font-medium leading-[1.5] wishlist_text"
                        >
                          Family Apartment
                        </Typography>
                        <Typography color="white" className="wishlist_text">
                          100 Smart Street, LA, USA
                        </Typography>
                      </CardBody>
                    </Card>
                  </div>
                  <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-12 xl:col-span-3">
                    <Card
                      shadow={false}
                      className="relative grid h-[20rem] w-full  items-end justify-center overflow-hidden text-center"
                    >
                      <CardHeader
                        floated={false}
                        shadow={false}
                        color="transparent"
                        className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('./profile/4.png')] bg-cover bg-center"
                      >
                        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                      </CardHeader>
                      <CardBody className="relative py-2 px-6 text-start">
                        <Typography
                          color="white"
                          className="mb-2 font-medium leading-[1.5] wishlist_text"
                        >
                          Family Apartment
                        </Typography>
                        <Typography color="white" className="wishlist_text">
                          100 Smart Street, LA, USA
                        </Typography>
                      </CardBody>
                    </Card>
                  </div>
                  <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-12 xl:col-span-3">
                    <Card
                      shadow={false}
                      className="relative grid h-[20rem] w-full  items-end justify-center overflow-hidden text-center"
                    >
                      <CardHeader
                        floated={false}
                        shadow={false}
                        color="transparent"
                        className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('./profile/8.png')] bg-cover bg-center"
                      >
                        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                      </CardHeader>
                      <CardBody className="relative py-2 px-6 text-start">
                        <Typography
                          color="white"
                          className="mb-2 font-medium leading-[1.5] wishlist_text"
                        >
                          Family Apartment
                        </Typography>
                        <Typography color="white" className="wishlist_text">
                          100 Smart Street, LA, USA
                        </Typography>
                      </CardBody>
                    </Card>
                  </div>
                  <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-12 xl:col-span-3">
                    <Card
                      shadow={false}
                      className="relative grid h-[20rem] w-full  items-end justify-center overflow-hidden text-center"
                    >
                      <CardHeader
                        floated={false}
                        shadow={false}
                        color="transparent"
                        className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('./profile/4.png')] bg-cover bg-center"
                      >
                        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                      </CardHeader>
                      <CardBody className="relative py-2 px-6 text-start">
                        <Typography
                          color="white"
                          className="mb-2 font-medium leading-[1.5] wishlist_text"
                        >
                          Family Apartment
                        </Typography>
                        <Typography color="white" className="wishlist_text">
                          100 Smart Street, LA, USA
                        </Typography>
                      </CardBody>
                    </Card>
                  </div>
                  <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-12 xl:col-span-3">
                    <Card
                      shadow={false}
                      className="relative grid h-[20rem] w-full  items-end justify-center overflow-hidden text-center"
                    >
                      <CardHeader
                        floated={false}
                        shadow={false}
                        color="transparent"
                        className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('./profile/8.png')] bg-cover bg-center"
                      >
                        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                      </CardHeader>
                      <CardBody className="relative py-2 px-6 text-start">
                        <Typography
                          color="white"
                          className="mb-2 font-medium leading-[1.5] wishlist_text"
                        >
                          Family Apartment
                        </Typography>
                        <Typography color="white" className="wishlist_text">
                          100 Smart Street, LA, USA
                        </Typography>
                      </CardBody>
                    </Card>
                  </div>
                  <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-12 xl:col-span-3">
                    <Card
                      shadow={false}
                      className="relative grid h-[20rem] w-full  items-end justify-center overflow-hidden text-center"
                    >
                      <CardHeader
                        floated={false}
                        shadow={false}
                        color="transparent"
                        className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('./profile/4.png')] bg-cover bg-center"
                      >
                        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                      </CardHeader>
                      <CardBody className="relative py-2 px-6 text-start">
                        <Typography
                          color="white"
                          className="mb-2 font-medium leading-[1.5] wishlist_text"
                        >
                          Family Apartment
                        </Typography>
                        <Typography color="white" className="wishlist_text">
                          100 Smart Street, LA, USA
                        </Typography>
                      </CardBody>
                    </Card>
                  </div>
                  <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-12 xl:col-span-3">
                    <Card
                      shadow={false}
                      className="relative grid h-[20rem] w-full  items-end justify-center overflow-hidden text-center"
                    >
                      <CardHeader
                        floated={false}
                        shadow={false}
                        color="transparent"
                        className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('./profile/8.png')] bg-cover bg-center"
                      >
                        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                      </CardHeader>
                      <CardBody className="relative py-2 px-6 text-start">
                        <Typography
                          color="white"
                          className="mb-2 font-medium leading-[1.5] wishlist_text"
                        >
                          Family Apartment
                        </Typography>
                        <Typography color="white" className="wishlist_text">
                          100 Smart Street, LA, USA
                        </Typography>
                      </CardBody>
                    </Card>
                  </div>
                  <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-12 xl:col-span-3">
                    <Card
                      shadow={false}
                      className="relative grid h-[20rem] w-full  items-end justify-center overflow-hidden text-center"
                    >
                      <CardHeader
                        floated={false}
                        shadow={false}
                        color="transparent"
                        className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('./profile/4.png')] bg-cover bg-center"
                      >
                        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                      </CardHeader>
                      <CardBody className="relative py-2 px-6 text-start">
                        <Typography
                          color="white"
                          className="mb-2 font-medium leading-[1.5] wishlist_text"
                        >
                          Family Apartment
                        </Typography>
                        <Typography color="white" className="wishlist_text">
                          100 Smart Street, LA, USA
                        </Typography>
                      </CardBody>
                    </Card>
                  </div>
                  <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-12 xl:col-span-3">
                    <Card
                      shadow={false}
                      className="relative grid h-[20rem] w-full  items-end justify-center overflow-hidden text-center"
                    >
                      <CardHeader
                        floated={false}
                        shadow={false}
                        color="transparent"
                        className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('./profile/8.png')] bg-cover bg-center"
                      >
                        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                      </CardHeader>
                      <CardBody className="relative py-2 px-6 text-start">
                        <Typography
                          color="white"
                          className="mb-2 font-medium leading-[1.5] wishlist_text"
                        >
                          Family Apartment
                        </Typography>
                        <Typography color="white" className="wishlist_text">
                          100 Smart Street, LA, USA
                        </Typography>
                      </CardBody>
                    </Card>
                  </div>
                  <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-12 xl:col-span-3">
                    <Card
                      shadow={false}
                      className="relative grid h-[20rem] w-full  items-end justify-center overflow-hidden text-center"
                    >
                      <CardHeader
                        floated={false}
                        shadow={false}
                        color="transparent"
                        className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('./profile/4.png')] bg-cover bg-center"
                      >
                        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                      </CardHeader>
                      <CardBody className="relative py-2 px-6 text-start">
                        <Typography
                          color="white"
                          className="mb-2 font-medium leading-[1.5] wishlist_text"
                        >
                          Family Apartment
                        </Typography>
                        <Typography color="white" className="wishlist_text">
                          100 Smart Street, LA, USA
                        </Typography>
                      </CardBody>
                    </Card>
                  </div>
                  <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-12 xl:col-span-3">
                    <Card
                      shadow={false}
                      className="relative grid h-[20rem] w-full  items-end justify-center overflow-hidden text-center"
                    >
                      <CardHeader
                        floated={false}
                        shadow={false}
                        color="transparent"
                        className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('./profile/8.png')] bg-cover bg-center"
                      >
                        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                      </CardHeader>
                      <CardBody className="relative py-2 px-6 text-start">
                        <Typography
                          color="white"
                          className="mb-2 font-medium leading-[1.5] wishlist_text"
                        >
                          Family Apartment
                        </Typography>
                        <Typography color="white" className="wishlist_text">
                          100 Smart Street, LA, USA
                        </Typography>
                      </CardBody>
                    </Card>
                  </div>
                </div>
              </TabPanel>
              <TabPanel value="tickets" className="py-0">
                <Ticket />
              </TabPanel>
              {/* Setting Tab Description */}
              <TabPanel value="settings" className="py-0">
                {/* component */}
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
                  <div className="-mx-3 md:flex mb-6 text-start">
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                      <label
                        className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                        htmlFor="grid-first-name"
                      >
                        Name
                      </label>
                      <input
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                        id="grid-first-name"
                        type="text"
                        placeholder="Jane"
                      />
                      {/* <p className="text-xs italic">
                        Please fill out this field.
                      </p> */}
                    </div>
                    <div className="md:w-1/2 px-3">
                      <label
                        className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                        htmlFor="grid-last-name"
                      >
                        Email
                      </label>
                      <input
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                        type="email"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div className="-mx-3 md:flex mb-6 text-start">
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                      <label
                        className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                        htmlFor="grid-first-name"
                      >
                        Phone Number
                      </label>
                      <input
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                        type="number"
                        placeholder="+8801789999751"
                      />
                      {/* <p className="text-xs italic">
                        Please fill out this field.
                      </p> */}
                    </div>
                    <div className="md:w-1/2 px-3">
                      <label
                        className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                        htmlFor="grid-last-name"
                      >
                        Address
                      </label>
                      <input
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                        type="text"
                        placeholder="Addresses"
                      />
                    </div>
                  </div>
                  <div className="-mx-3 md:flex mb-6 text-start">
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                      <label
                        className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                        htmlFor="grid-first-name"
                      >
                        City
                      </label>
                      <input
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                        type="text"
                        placeholder="Your City"
                      />
                      {/* <p className="text-xs italic">
                        Please fill out this field.
                      </p> */}
                    </div>
                    <div className="md:w-1/2 px-3">
                      <label
                        className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                        htmlFor="grid-last-name"
                      >
                        State/Region
                      </label>
                      <input
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                        type="text"
                        placeholder="Addresses"
                      />
                    </div>
                  </div>
                  <div className="-mx-3 md:flex mb-6 text-start">
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                      <label
                        className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                        htmlFor="grid-first-name"
                      >
                        Post Code
                      </label>
                      <input
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                        type="number"
                        placeholder="Post Code"
                      />
                      {/* <p className="text-xs italic">
                        Please fill out this field.
                      </p> */}
                    </div>
                    <div className="md:w-1/2 px-3">
                      <label
                        className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                        htmlFor="grid-last-name"
                      >
                        Country
                      </label>
                      <input
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                        type="text"
                        placeholder="Country"
                      />
                    </div>
                  </div>
                  <div className="-mx-3 md:flex mb-6">
                    <div className="md:w-full px-3">
                      <button className="sign_btn" style={{ width: 150 }}>
                        SAVE CHANGE
                      </button>
                    </div>
                  </div>
                  <div className="-mx-3 md:flex mb-6">
                    <Typography className="font-bold text-2xl">
                      CHANGE PASSWORD
                    </Typography>
                  </div>
                  <div className="-mx-3 md:flex mb-6 text-start">
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                      <label
                        className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                        htmlFor="grid-first-name"
                      >
                        NEW PASSWORD
                      </label>
                      <input
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                        type="password"
                        placeholder="********************"
                      />
                      {/* <p className="text-xs italic">
                        Please fill out this field.
                      </p> */}
                    </div>
                  </div>
                  <div className="-mx-3 md:flex mb-6 text-start">
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                      <label
                        className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                        htmlFor="grid-first-name"
                      >
                        NEW PASSWORD AGAIN
                      </label>
                      <input
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                        type="password"
                        placeholder="********************"
                      />
                      {/* <p className="text-xs italic">
                        Please fill out this field.
                      </p> */}
                    </div>
                  </div>
                </div>
              </TabPanel>
            </TabsBody>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

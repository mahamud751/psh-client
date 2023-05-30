import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import "./booking.css";

export default function Booking() {
  const data = [
    {
      label: "Upcoming Bookings (3)",
      value: "upcoming",
      desc: `It really matters and then like it really doesn't matter.
        What matters is the people who are sparked by it. And the people 
        who are like offended by it, it doesn't matter.`,
    },
    {
      label: "Past Booking (5)",
      value: "past",
      desc: `Because it's about motivating the doers. Because I'm here
        to follow my dreams and inspire other people to follow their dreams, too.`,
    },
  ];

  return (
    <Tabs value="upcoming">
      <TabsHeader
        className="bg-transparent"
        indicatorProps={{
          className: "bg-blue-500/10 shadow-none text-blue-500",
        }}
      >
        {data.map(({ label, value }) => (
          <Tab key={value} value={value}>
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        <TabPanel value="upcoming" className="py-0 mt-10">
          <div className="grid grid-cols-12 sm:px-5 gap-x-8 gap-y-16">
            <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-6">
              <div className="flex">
                <img src="./profile/room1.png" alt="" />
                <div className="text-start ms-3 mt-3 booking">
                  <p>STANDARD ROOM</p>
                  <p className="bdt">BDT 2000</p>
                  <span>Per Night</span>
                  <br />
                  <span>25 Janaury, 2023</span>
                  <br />
                  <span>25 June, 2023</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-6">
              <div className="flex">
                <img src="./profile/room1.png" alt="" />
                <div className="text-start ms-3 mt-3 booking">
                  <p>STANDARD ROOM</p>
                  <p className="bdt">BDT 2000</p>
                  <span>Per Night</span>
                  <br />
                  <span>25 Janaury, 2023</span>
                  <br />
                  <span>25 June, 2023</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-6">
              <div className="flex">
                <img src="./profile/room1.png" alt="" />
                <div className="text-start ms-3 mt-3 booking">
                  <p>STANDARD ROOM</p>
                  <p className="bdt">BDT 2000</p>
                  <span>Per Night</span>
                  <br />
                  <span>25 Janaury, 2023</span>
                  <br />
                  <span>25 June, 2023</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-6">
              <div className="flex">
                <img src="./profile/room1.png" alt="" />
                <div className="text-start ms-3 mt-3 booking">
                  <p>STANDARD ROOM</p>
                  <p className="bdt">BDT 2000</p>
                  <span>Per Night</span>
                  <br />
                  <span>25 Janaury, 2023</span>
                  <br />
                  <span>25 June, 2023</span>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel value="past" className="py-0 mt-10">
          <div className="grid grid-cols-12 sm:px-5 gap-x-8 gap-y-16">
            <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-6">
              <div className="flex">
                <img src="./profile/room1.png" alt="" />
                <div className="text-start ms-3 mt-3 booking">
                  <p>STANDARD ROOM</p>
                  <p className="bdt">BDT 2000</p>
                  <span>Per Night</span>
                  <br />
                  <span>25 Janaury, 2023</span>
                  <br />
                  <span>25 June, 2023</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-6">
              <div className="flex">
                <img src="./profile/room1.png" alt="" />
                <div className="text-start ms-3 mt-3 booking">
                  <p>STANDARD ROOM</p>
                  <p className="bdt">BDT 2000</p>
                  <span>Per Night</span>
                  <br />
                  <span>25 Janaury, 2023</span>
                  <br />
                  <span>25 June, 2023</span>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
      </TabsBody>
    </Tabs>
  );
}

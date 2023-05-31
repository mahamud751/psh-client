import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { Card, CardHeader, CardBody } from "@material-tailwind/react";
import UseFetch from "../../hooks/useFetch";

export default function Categories() {
  const [activeTab, setActiveTab] = React.useState("html");
  const data = [
    {
      label: "HTML",
      value: "html",
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
    },
    {
      label: "React",
      value: "react",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Vue",
      value: "vue",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "Angular",
      value: "angular",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Svelte",
      value: "svelte",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
  ];
  const { data2, loading, error, reFetch } = UseFetch(`/hotets`);
  console.log(data2);
  return (
    <Tabs value={activeTab}>
      <TabsHeader
        className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
        indicatorProps={{
          className:
            "bg-transparent border-b-2 border-blue-500 shadow-none rounded-none",
        }}
      >
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={activeTab === value ? "text-blue-500" : ""}
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            <Card className=" overflow-hidden">
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none"
              >
                <span className="note">Only 1 Seat Left</span>
                <img src={data.imageSrc} alt="ui/ux review check" />
                {/* <Image
            fill
            className="
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition
            "
            src={data.imageSrc}
            alt="Listing"
          /> */}
              </CardHeader>
              <CardBody className="p-2">
                <div className="flex justify-between w-full px-3">
                  <p>Dhanmondi 10</p>

                  <div className="flex">
                    <p>5.0</p>
                    <div>
                      <i className="fas fa-star ms-2" />
                    </div>
                  </div>
                </div>
                <a className="px-3 font-bold text-black">Standard Room</a>
                <p className="px-3 font-thin w-full text-xs">
                  Comfortable and affordable option for a relaxing stay
                </p>
                <div className="flex justify-between w-full px-3 mt-3">
                  <div>
                    <p className="text-sm text-black font-bold">
                      Per Day : <span className="font-normal"> BDT 300</span>
                    </p>
                    <p className="text-sm text-black font-bold">
                      Per Month : <span className="font-normal"> BDT 6000</span>
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
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}

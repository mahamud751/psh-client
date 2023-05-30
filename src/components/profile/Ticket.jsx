import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import "./booking.css";
import TicketList from "./TicketList";
import TicketCreate from "./TicketCreate";
import TicketDetails from "./TicketDetails";

export default function Ticket() {
  const data = [
    {
      label: "Create",
      value: "create",
    },
    {
      label: "List",
      value: "list",
    },
    {
      label: "Details",
      value: "details",
    },
  ];

  return (
    <Tabs value="create">
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
        <TabPanel value="create" className="py-0 mt-10">
          <TicketCreate />
        </TabPanel>
        <TabPanel value="list" className="py-0 mt-10">
          <TicketList />
        </TabPanel>
        <TabPanel value="details" className="py-0 mt-10">
          <TicketDetails />
        </TabPanel>
      </TabsBody>
    </Tabs>
  );
}

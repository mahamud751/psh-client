import { Input, Textarea, Typography } from "@material-tailwind/react";
import React from "react";

const TicketCreate = () => {
  return (
    <div>
      <Typography className="text-start text-2xl font-bold">
        Create a Tickets
      </Typography>
      <div className="my-12">
        <Input
          variant="static"
          label="Issue Title"
          placeholder="Problem Title"
        />
      </div>
      <Textarea variant="outlined" label="Description" />
    </div>
  );
};

export default TicketCreate;

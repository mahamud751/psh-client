import {
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Typography,
  Rating,
} from "@material-tailwind/react";

export default function TicketList() {
  return (
    <>
      <List>
        <ListItem>
          <ListItemPrefix>
            <Avatar
              variant="circular"
              alt="candice"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            />
          </ListItemPrefix>
          <div className="flex justify-between w-full">
            <div>
              <Typography variant="h6" color="blue-gray">
                Problem Title or Name
              </Typography>
              <Typography variant="small" color="gray" className="font-normal">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem ....
              </Typography>
              <Typography
                variant="small"
                color="gray"
                className="font-normal text_c_color mt-3"
              >
                Ticket ID 123456789
              </Typography>
            </div>
            <div>
              <Rating value={1} />
              <Typography
                variant="small"
                color="gray"
                className="font-normal mt-8"
              >
                5 min ago
              </Typography>
            </div>
          </div>
        </ListItem>
        <hr className="my-4 bg-gray-600 border-0 rounded dark:bg-gray-700" />

        <ListItem>
          <ListItemPrefix>
            <Avatar
              variant="circular"
              alt="candice"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            />
          </ListItemPrefix>
          <div className="flex justify-between w-full">
            <div>
              <Typography variant="h6" color="blue-gray">
                Problem Title or Name
              </Typography>
              <Typography variant="small" color="gray" className="font-normal">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem ....
              </Typography>
              <Typography
                variant="small"
                color="gray"
                className="font-normal text_c_color mt-3"
              >
                Ticket ID 123456789
              </Typography>
            </div>
            <div>
              <Rating value={1} />
              <Typography
                variant="small"
                color="gray"
                className="font-normal mt-8"
              >
                5 min ago
              </Typography>
            </div>
          </div>
        </ListItem>
        <hr className="my-4 bg-gray-600 border-0 rounded dark:bg-gray-700" />

        <ListItem>
          <ListItemPrefix>
            <Avatar
              variant="circular"
              alt="candice"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            />
          </ListItemPrefix>
          <div className="flex justify-between w-full">
            <div>
              <Typography variant="h6" color="blue-gray">
                Problem Title or Name
              </Typography>
              <Typography variant="small" color="gray" className="font-normal">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem ....
              </Typography>
              <Typography
                variant="small"
                color="gray"
                className="font-normal text_c_color mt-3"
              >
                Ticket ID 123456789
              </Typography>
            </div>
            <div>
              <Rating value={1} />
              <Typography
                variant="small"
                color="gray"
                className="font-normal mt-8"
              >
                5 min ago
              </Typography>
            </div>
          </div>
        </ListItem>
        <hr className="my-4 bg-gray-600 border-0 rounded dark:bg-gray-700" />

        <ListItem>
          <ListItemPrefix>
            <Avatar
              variant="circular"
              alt="candice"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            />
          </ListItemPrefix>
          <div className="flex justify-between w-full">
            <div>
              <Typography variant="h6" color="blue-gray">
                Problem Title or Name
              </Typography>
              <Typography variant="small" color="gray" className="font-normal">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem ....
              </Typography>
              <Typography
                variant="small"
                color="gray"
                className="font-normal text_c_color mt-3"
              >
                Ticket ID 123456789
              </Typography>
            </div>
            <div>
              <Rating value={1} />
              <Typography
                variant="small"
                color="gray"
                className="font-normal mt-8"
              >
                5 min ago
              </Typography>
            </div>
          </div>
        </ListItem>
        <hr className="my-4 bg-gray-600 border-0 rounded dark:bg-gray-700" />
      </List>
    </>
  );
}

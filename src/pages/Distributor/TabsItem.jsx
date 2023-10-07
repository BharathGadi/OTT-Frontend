TabsItem.jsx;

import * as React from "react";
import Tab from "@mui/material/Tab";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import UserDetails from "./UserDetails";

export default function TabsItem() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <CssBaseline />
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            aria-label="tabs example"
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            centered
          >
            <Tab
              label="Tab One"
              value="1"
              icon={<AccountCircleIcon />}
              iconPosition="start"
            ></Tab>
            <Tab
              label="Tab Two"
              value="2"
              icon={<AccountCircleIcon />}
              iconPosition="start"
            ></Tab>
            <Tab
              label="Tab Three"
              value="3"
              icon={<AccountCircleIcon />}
              iconPosition="start"
            ></Tab>
          </TabList>
        </Box>
        <TabPanel value="1">
          <UserDetails />
        </TabPanel>
        <TabPanel value="2">
          <UserDetails />
        </TabPanel>
        <TabPanel value="3">
          <UserDetails />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
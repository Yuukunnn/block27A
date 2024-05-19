import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from '@mui/icons-material/Home';
import ContactPageIcon from '@mui/icons-material/ContactPage';

function SideBar({ toggleDrawer }) {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{ width: 350 }}
        role="presentation"
        onClick={toggleDrawer(false)}
      >
        <h2>Yukun's Restaurant</h2>
        <Divider />
        <List>
          {["Dashboard", "Contact"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                    {index === 0 ? <HomeIcon /> : <ContactPageIcon/> }
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
}

export default SideBar;

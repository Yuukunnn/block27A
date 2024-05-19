import { useState } from "react";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Components/Dashboard/Dashboard";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import Grid from "@mui/material/Grid";
import "./App.css";

function App() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <Grid container spacing={2} direction="row">

      <Grid item xs={1} alignItems="start">
        <MenuIcon onClick={toggleDrawer(true)} />
        <Drawer open={open} onClose={toggleDrawer(false)}>
          <Sidebar toggleDrawer={toggleDrawer} />
        </Drawer>
      </Grid>

      <Grid item xs={11}>
      <Dashboard />
      </Grid>

    </Grid>
  );
}

export default App;

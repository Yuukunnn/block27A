import Chart from "./Chart";
import TransactionBar from "./TransactionBar";
import Grid from "@mui/material/Grid";

function Dashboard() {
  return (
    <Grid container>
      <Grid item xs={8}>
        <Chart />
      </Grid>

      <Grid item xs={4}>
        <TransactionBar />
      </Grid>
    </Grid>
  );
}

export default Dashboard;

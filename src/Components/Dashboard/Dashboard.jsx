import Chart from "./Chart";
import TransactionBar from "./TransactionBar";
import Grid from "@mui/material/Grid";

function Dashboard() {
  return (
    <Grid container>
      <Grid container item xs={8} direction= "column" alignContent='center'>
        <Chart />
      </Grid>

      <Grid item xs={4}>
        <TransactionBar />
      </Grid>
    </Grid>
  );
}

export default Dashboard;

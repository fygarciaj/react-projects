import { Grid, Paper } from '@mui/material';
import Chart from './Chart';
import Deposits from './Deposits';
import { Orders, TurnsList } from '..';

export default function Tablero() {

    return (
        <>
            <Grid container spacing={3}>
                {/* Chart */}
                <Chart />
                {/* Recent Deposits */}
                <Deposits />
                {/* Recent Orders */}
                <Grid item xs={12}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        <Orders />
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        <TurnsList />
                    </Paper>
                </Grid>
            </Grid>
        </>
    );
}
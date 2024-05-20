import { Avatar, Chip, Typography } from "@mui/material";
import TableCell from "@mui/material/TableCell";
import { useEffect, useState } from "react";

export function AppointmentStatus({ status }) {

    const [colorStatus, setColorStatus] = useState('');


    useEffect(() => {

        switch (status) {
            case '3 - ACEPTADA':
                setColorStatus('primary')
                break;

        }
    }, []);

    return (
        <TableCell>
            <Chip color="{colorStatus}" label={status} />
        </TableCell >
    );
}
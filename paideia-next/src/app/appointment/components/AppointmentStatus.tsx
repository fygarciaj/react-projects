import { Avatar, Chip, Typography } from "@mui/material";
import TableCell from "@mui/material/TableCell";
import { useEffect, useState } from "react";

export function AppointmentStatus({ status }) {

    const [colorStatus, setColorStatus] = useState('');


    useEffect(() => {

        switch (status) {
            case '6 - LLAMANDO':
                setColorStatus('#cccccc');
                break;
            case '5-INCUMPLIDA':
                setColorStatus('#ff0000');
                break;
            case '4-CANCELADA':
                setColorStatus('#fa770c');
                break;
            case '3-PROGRAMADA':
                setColorStatus('#0051ff');
                break;
            case '2-ATENDIDO':
                setColorStatus('#026b03');
                break;
            case '1-EN ESPERA':
                setColorStatus('#e1da06');
                break;
        }
        console.log('colorStatus', colorStatus);
    }, []);

    return (
        <TableCell>
            <Chip sx={{ color: 'white', bgcolor: colorStatus }} label={status} />
        </TableCell >
    );
}
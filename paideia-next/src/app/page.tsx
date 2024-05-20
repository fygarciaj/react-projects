import { Typography } from "@mui/material";
import AppointmentForToday from "./appointment/page";

export default function Home() {
  return (
    <>
      <Typography>Listado de Citas</Typography>
      <AppointmentForToday />
    </>
  );
}

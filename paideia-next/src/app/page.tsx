import { Typography } from "@mui/material";
import AppointmentForToday from "./appointment/components/AppointmentForToday";
import {Inter} from "next/font/google";
import type {Metadata} from "next";
import Layout from "./layout";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Paideia",
    description: "Fabian Yesith Garcia Jurado",
};

export default function Home() {
  return (
    <Layout>
      <Typography>Home</Typography>
    </Layout>
  );
}

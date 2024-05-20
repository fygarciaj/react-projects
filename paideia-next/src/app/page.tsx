import Image from "next/image";
import styles from "./page.module.css";
import AppointmentForToday from "./appointment/page";

export default function Home() {
  return (
    <>
      <AppointmentForToday />
    </>
  );
}

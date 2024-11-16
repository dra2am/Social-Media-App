import Image from "next/image";
import styles from "./page.module.css";
import { TopNav } from "./_components/TopNav" ;
import { Products } from "./_components/Products"

export default function Home() {
  return (
    <>
        <TopNav></TopNav>
        <Products></Products>
    </>
  );
}

import Image from "next/image";
import styles from "./page.module.css";
import { TopNav } from "./_components/TopNav" ;
import { Products } from "./_components/products/Products"

//will be making req here to auth user + get products list
export default function Home() {
  return (
    <>
        <TopNav></TopNav>
        <Products></Products>
    </>
  );
}

'use client';
import Image from "next/image";
import "./globals.css"
import Index from "./components/Index";

import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll();

export default function Home() {
  return (
    <main className="main">
      <Index/>
      <p>infokan joki radiant mas</p>
    </main>
  );
}

"use client";

import Image from "next/image";
import React, { useState } from "react";
import styles from "./page.module.css";
import Navbar from "@/components/navbar/Navbar";
import { Form } from "@/components/form/Form";

export default function Home() {
  const [value, setValue] = useState(0);
  return (
    <>
      <section className={styles.section1}>
        <main className={styles.main}>
          <Navbar />
        </main>
        <div className={styles.partition}>
          <div className={styles.heading}>
            <h1>A Creator's Paradise</h1>
            <p>where creativity meats success.</p>
          </div>
          <Form />
        </div>
      </section>
      <section className="section2">
        <div className="heading">
          <h1>Elevate Your Craft</h1>
        </div>
      </section>
    </>
  );
}

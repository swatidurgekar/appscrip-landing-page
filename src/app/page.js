"use client";

import Image from "next/image";
import React, { useState } from "react";
import styles from "./page.module.css";
import Navbar from "@/components/navbar/Navbar";
import Form from "@/components/form/Form";
import Features from "@/components/features/Features";

export default function Home() {
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
      <section className={styles.section2}>
        <div className={styles.heading2}>
          <h1>Elevate Your Craft</h1>
        </div>
        <Features />
      </section>
      <section className={styles.section3}></section>
    </>
  );
}

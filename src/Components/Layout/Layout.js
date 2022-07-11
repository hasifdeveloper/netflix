import React from "react";
import { Cover } from "../Cover/Cover";
import { Ads } from "../Ads/Ads";
import { QA } from "../Question&Answer/QA";
import { Footer } from "../Footer/Footer";

export function Layout() {
  return (
    <>
      <Cover />
      <Ads />
      <QA />
      <Footer />
    </>
  );
}

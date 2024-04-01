"use client";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
const AosSetup = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return <></>;
};

export default AosSetup;

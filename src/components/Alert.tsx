"use client";

import { useEffect } from "react";

export default function Alert() {
  useEffect(() => {
    alert("Fest Pass Update:\n\n" + "Downtime: 5 minutes");
  }, []);

  return null;
}

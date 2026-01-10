"use client";

import { useEffect } from "react";

export default function Alert() {
  useEffect(() => {
    alert(
      "Fest Pass Update:\n\n" +
        "The fest pass mailing system is experiencing heavy traffic. " +
        "Emails may take around 15 minutes to reach you. " +
        "Also ensure that your inbox has enough storage to receive the mail."
    );
  }, []);

  return null;
}

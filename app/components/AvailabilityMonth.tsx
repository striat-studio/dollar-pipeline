"use client";

import { useEffect, useState } from "react";

function currentMonth() {
  return new Date().toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });
}

// Renders just the current month + year, recomputed in the browser so it
// stays accurate between deploys. Drop it inline inside a sentence.
export default function AvailabilityMonth() {
  const [month, setMonth] = useState(currentMonth);

  useEffect(() => {
    setMonth(currentMonth());
  }, []);

  return <span suppressHydrationWarning>{month}</span>;
}

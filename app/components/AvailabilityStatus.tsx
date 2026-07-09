"use client";

import { useEffect, useState } from "react";

function currentMonth() {
  return new Date().toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });
}

export default function AvailabilityStatus() {
  const [month, setMonth] = useState(currentMonth);

  // Recompute in the browser so the month stays accurate between deploys.
  useEffect(() => {
    setMonth(currentMonth());
  }, []);

  return (
    <span className="font-mono text-xs text-[#A1A1AA]" suppressHydrationWarning>
      Available · {month}
    </span>
  );
}

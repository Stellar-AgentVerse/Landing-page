"use client";

import { useEffect, useState } from "react";

export function useRevenueTicker() {
  const [revenue, setRevenue] = useState(1248590);

  useEffect(() => {
    const interval = setInterval(() => {
      setRevenue((prev) => prev + Math.random() * 5);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const formattedRevenue = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(Math.floor(revenue));

  return { revenue, formattedRevenue };
}

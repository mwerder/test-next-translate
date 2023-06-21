"use client";
import useTranslation from "next-translate/useTranslation";
import { useState } from "react";

export default function ClientCode({ num }: { num: number }) {
  console.log(`🚀 re-render client component:`, num);
  const [count, setCount] = useState(0);
  const { t } = useTranslation("home");

  return (
    <div>
      {t("client-only")}:<button onClick={() => setCount((v) => v + 1)}>+</button>
      {count}
      <button onClick={() => setCount((v) => v - 1)}>-</button>
    </div>
  );
}

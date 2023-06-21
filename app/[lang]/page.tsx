import React from "react";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import ClientCode from "../components/client-code";

export default async function Page() {
  const { t, lang } = useTranslation("common");
  const timestamp = Date.now();
  console.log(`🚀 ~ file: page.tsx:12 ~ Page ~ timestamp:`, timestamp);
  return (
    <>
      <h2>{t("title")}</h2>
      <ClientCode num={1} />
      <ClientCode num={2} />
      <h2>{t("title")}</h2>

      <div style={{ marginTop: 20 }}>
        <Link locale={"en"} href="/en" replace>
          English
        </Link>
      </div>

      <div>
        <Link locale={"es"} href="/es" replace>
          Español
        </Link>
      </div>

      <div>
        <Link href="/ca" replace>
          Català
        </Link>
      </div>

      <div>
        <Link href={`/${lang}/second-page`}>➡️</Link>
      </div>
    </>
  );
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const metadata = {
  title: "App directory",
};

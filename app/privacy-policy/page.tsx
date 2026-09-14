import type { Metadata } from "next";
import Content from "./common/Content";

export const metadata: Metadata = {
  title: "Privacy Policy — Matrix",
};

export default async function PrivacyPolicy() {

  return (
    <div
      className='container px-4 py-24 lg:p-12 lg:pt-28'
    >
      <Content />
    </div>

  );
}

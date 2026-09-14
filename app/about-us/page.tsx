import type { Metadata } from "next";
import Header from "./common/Header";
import Hero from "./common/Hero";
import Story from "./common/Story";
import Values from "./common/Values";

export const metadata: Metadata = {
  title: "About us — Matrix",
  description: "Making everyday bills instant for people across Nigeria.",
};

export default async function Home() {

  return (
    <>
      <Header>
        <Hero />
      </Header>

      <div
        className='container'
      >

        <Story />
        <Values />
      </div>

    </>

  );
}

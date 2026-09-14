"use client";

import CustomButton from "@/components/CustomButton";
import PhoneShot, { HeroToasts } from "@/components/PhoneShot";
import { STORE } from "@/lib/links";

export default function Hero() {
  return (
    <div className="grid h-full w-full grid-cols-1 items-end justify-between px-4 pt-20 sm:px-12 lg:grid-cols-2 lg:gap-12">
      <div className="flex h-full flex-col gap-8 pt-10 lg:pt-18 xl:h-[583px]">
        <div className="flex w-full flex-col gap-[5px] xl:w-[555px]">
          <h1 className="text-center font-agrandir text-6xl font-bold text-foreground md:text-left md:text-[64px] lg:text-[80px]">
            Light, data, TV. Sorted in seconds.
          </h1>
          <p className="text-center font-graphik text-2xl font-normal text-black md:text-left">
            Pay electricity, airtime, data, cable, and exam pins from one wallet.
            Your number is your account.
          </p>
        </div>

        <div className="flex w-full flex-col items-center gap-2.5 md:flex-row">
          <CustomButton
            supTitle="Get it on"
            title="Google Play"
            icon="/images/play-store.png"
            link={STORE.play}
          />
          <CustomButton
            supTitle="Download on"
            title="Apple Store"
            icon="/images/apple-store.png"
            link={STORE.apple}
          />
        </div>
      </div>
      <div className="relative flex w-full items-end justify-center pb-10 pt-8 lg:min-h-[640px]">
        <HeroToasts />
        <PhoneShot
          src="/images/screens/home.png"
          alt="Matrix home screen"
          className="w-[220px] sm:w-[240px] lg:w-[250px]"
        />
      </div>
    </div>
  );
}

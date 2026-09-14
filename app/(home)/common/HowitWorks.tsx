import PhoneShot from "@/components/PhoneShot";
import { HowitworksList } from "@/lib/data";

export default function HowItWorks() {
  return (
    <div className="container p-4 py-16 lg:p-16 lg:px-12" id="howitworks">
      <section className="flex flex-col items-start justify-center gap-10 lg:flex-row lg:gap-15">
        <div className="order-last flex h-full w-full items-center justify-center lg:order-first lg:w-[348.97px]">
          <PhoneShot
            src="/images/screens/home.png"
            alt="Matrix app home"
            bezel="lime"
            className="w-[280px]"
          />
        </div>
        <div className="flex flex-col gap-9.5 pt-4 xl:ml-8">
          <div className="flex flex-col gap-4 lg:w-[600px]">
            <h2 className="font-agrandir text-3xl font-bold text-primary2 md:text-5xl">
              Using Matrix is super simple and easy
            </h2>
            <p className="font-graphik text-xl font-normal text-primary3">
              We handle the heavy lifting so you can relax. Pay light, buy data, and
              top up airtime — tokens and bundles land where they should.
            </p>
          </div>
          <div className="flex w-full flex-col gap-9 md:w-[600px]">
            {HowitworksList.map((item, index) => (
              <div className="flex w-full items-start gap-9" key={index}>
                <p className="font-agrandir text-5xl font-bold text-primary4">{index + 1}</p>
                <div className="flex w-full flex-col">
                  <h3 className="font-agrandir text-2xl font-bold text-primary2">{item?.title}</h3>
                  <p className="font-graphik text-lg font-normal text-primary3">{item?.subTitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

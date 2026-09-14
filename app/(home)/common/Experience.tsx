import CustomButton from "@/components/CustomButton";
import FeatureVisual from "@/components/FeatureVisuals";
import { experienceList } from "@/lib/data";
import { STORE } from "@/lib/links";

export default function Experience() {
  return (
    <section className="bg-primary5 px-4 py-20 lg:px-[194px] lg:py-24" id="features">
      <div className="container">
        <div className="mx-auto grid max-w-[1036px] gap-16">
          <div className="mx-auto flex max-w-[872px] flex-col items-center gap-6 text-center">
            <h2 className="font-agrandir text-3xl font-bold text-primary2 lg:text-5xl">
              Skip the queue. Pay any bill from your phone.
            </h2>
            <p className="font-graphik text-xl font-normal text-primary3">
              Paying bills shouldn&apos;t mean USSD codes and waiting on hold. Matrix
              makes electricity, data, TV, and exam pins as easy as sending a text.
            </p>
            <div className="flex flex-col gap-2.5 md:flex-row">
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

          <div className="grid grid-cols-1 gap-9">
            {experienceList?.map((item, index) => (
              <div
                className="grid items-center gap-2.5 rounded-[36px] bg-primary6 p-6 md:grid-cols-2 md:gap-6 md:p-8 md:px-14"
                key={index}
              >
                <div className="grid h-fit gap-2.5">
                  <h4 className="font-agrandir text-3xl font-bold text-black">{item?.title}</h4>
                  <p className="font-graphik text-lg font-normal text-black">{item?.subTitle}</p>
                </div>
                <FeatureVisual type={item.visual} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

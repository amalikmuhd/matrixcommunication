import { CustomAccordion } from "@/components/CustomAccordion";
import { faqData } from "@/lib/data";

export default function FAQ() {
  return (
    <section className="bg-[#031B1C]" id="faq">
      <div className="container flex flex-col gap-4 px-4 py-30 text-white lg:flex-row lg:gap-18 lg:px-12">
        <div className="flex flex-col gap-3.5 md:max-w-[435px]">
          <h2 className="font-agrandir text-5xl font-bold">Got questions? We&apos;ve got answers</h2>
          <p className="font-graphik text-base font-normal">
            Common questions about paying light, data, TV, and exam pins on Matrix.
          </p>
        </div>
        <CustomAccordion data={faqData} />
      </div>
    </section>
  );
}

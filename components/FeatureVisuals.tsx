import Image from "next/image";
import { cn } from "@/lib/utils";
import PhoneShot from "@/components/PhoneShot";

export type FeatureVisualId = "bills" | "speed" | "security" | "support";

const SHOTS: Record<FeatureVisualId, { photo: string; screen: string; pill: string; phone: string }> = {
  bills: {
    photo: "/images/lifestyle/pay.jpg",
    screen: "/images/screens/home.png",
    pill: "Pay electricity →",
    phone: "Matrix home",
  },
  speed: {
    photo: "/images/lifestyle/power.jpg",
    screen: "/images/screens/receipt.png",
    pill: "Light, paid",
    phone: "Prepaid token receipt",
  },
  security: {
    photo: "/images/lifestyle/kyc.jpg",
    screen: "/images/screens/pin.png",
    pill: "Face ID ready",
    phone: "Payment PIN",
  },
  support: {
    photo: "/images/lifestyle/coins.jpg",
    screen: "/images/screens/help.png",
    pill: "Replies in ~2 min",
    phone: "Help and support",
  },
};

export default function FeatureVisual({ type }: { type: FeatureVisualId }) {
  const shot = SHOTS[type];
  return (
    <div className="relative h-[280px] w-full overflow-hidden rounded-[28px] md:h-[400px]">
      <Image src={shot.photo} alt="" fill className="object-cover" sizes="(max-width: 768px) 100vw, 480px" />
      <div className="absolute inset-0 bg-[#031B1C]/25" />
      <div className="absolute bottom-3 right-3 md:bottom-4 md:right-5">
        <PhoneShot src={shot.screen} alt={shot.phone} className="w-[108px] sm:w-[120px] md:w-[148px]" />
      </div>
      <div
        className={cn(
          "absolute right-3 top-3 rounded-2xl bg-[#F2640E] px-4 py-3 font-agrandir text-sm font-bold text-white shadow-sm",
        )}
      >
        {shot.pill}
      </div>
    </div>
  );
}

import Image from "next/image";
import { cn } from "@/lib/utils";

export default function PhoneShot({
  src,
  alt,
  bezel = "dark",
  tilted = false,
  className,
}: {
  src: string;
  alt: string;
  bezel?: "dark" | "lime";
  tilted?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative mx-auto w-[260px] sm:w-[280px]",
        tilted && "origin-bottom [transform:perspective(1200px)_rotateY(-16deg)_rotateX(6deg)]",
        className,
      )}
    >
      <div
        className={cn(
          "rounded-[42px] p-[10px] shadow-[0_40px_80px_-24px_rgba(3,27,28,0.5)]",
          bezel === "lime" ? "bg-[#A6EB2E]" : "bg-[#1a1c1e]",
        )}
      >
        <div className="relative aspect-[390/844] overflow-hidden rounded-[32px] bg-[#f4f6f5]">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="320px"
            className="object-cover object-top"
            priority={src.includes("home")}
          />
        </div>
      </div>
    </div>
  );
}

export function HeroToasts() {
  return (
    <>
      <div className="absolute left-0 top-[28%] z-10 w-[230px] rounded-2xl bg-white p-3 shadow-[0_18px_40px_-12px_rgba(3,27,28,0.28)] sm:-left-6">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#031B1C]">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
              <path d="M10.2 1.5 3.75 10.2h4.2L7.8 16.5l6.45-8.7h-4.2L10.2 1.5Z" fill="#A6EB2E" />
            </svg>
          </div>
          <div>
            <p className="text-[13px] font-semibold text-[#031B1C]">Token sent</p>
            <p className="text-[11px] leading-snug text-[#374640]">
              Ikeja Electric · ₦5,000 prepaid token is on the meter.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[12%] right-0 z-10 w-[240px] rounded-2xl bg-white p-3 shadow-[0_18px_40px_-12px_rgba(3,27,28,0.28)] sm:-right-4">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#A6EB2E] text-sm font-bold text-[#031B1C]">
            ₦
          </div>
          <div>
            <p className="text-[13px] font-semibold text-[#031B1C]">Airtime delivered</p>
            <p className="text-[11px] leading-snug text-[#374640]">
              MTN · ₦1,000 landed in under 10 seconds.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

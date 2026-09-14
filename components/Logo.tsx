import Link from "next/link";

export default function Logo({ href = "/" }: { href?: string }) {
  return (
    <Link href={href} className="flex items-center gap-2.5">
      <span className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-[#031B1C] font-agrandir text-lg font-bold leading-none text-[#A6EB2E]">
        M
      </span>
      <span className="font-agrandir text-[22px] font-bold tracking-tight text-[#031B1C]">
        Matrix Communications
      </span>
    </Link>
  );
}

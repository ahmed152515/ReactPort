import { Atom } from "lucide-react";

export function BrandLogo({ compact = false }) {
  return (
    <div className={`inline-flex items-center ${compact ? "gap-2" : "gap-3"}`}>
      <div className="relative">
        <Atom className={`${compact ? "h-5 w-5" : "h-6 w-6"} text-sky-500`} strokeWidth={2.2} />
        <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-blue-500" />
      </div>
      <div className={`leading-none ${compact ? "text-xl" : "text-2xl md:text-3xl"} font-black tracking-tight`}>
        <span className="text-slate-900">React</span>
        <span className="bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
          Port
        </span>
      </div>
    </div>
  );
}

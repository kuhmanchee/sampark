import { ReactNode } from "react";
import Balancer from "react-wrap-balancer";

export default function Card({
  title,
  demo,
  large,
}: {
  title: string;
  demo: ReactNode;
  large?: boolean;
}) {
  return (
    <div
      className={`relative col-span-1 h-100 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md ${
        large ? "md:col-span-2" : ""
      }`}
    >
      <div className="flex h-80 items-center justify-center">{demo}</div>
      <div className="mx-auto max-w-md text-center">
        <h2 className="bg-gradient-to-br from-black pb-4 to-stone-500 bg-clip-text font-display text-xl font-bold text-transparent md:text-3xl md:font-normal">
          <Balancer>{title}</Balancer>
        </h2>
        
      </div>
    </div>
  );
}

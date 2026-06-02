import Image from "next/image";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Image
        src="/images/logometamersist.svg"
        alt="MetaMersist"
        width={32}
        height={32}
        className="h-12 w-12"
      />
      <div className="flex flex-col">
        <span className="font-semibold text-base tracking-tight">Metamersist</span>
        <span className="font-semibold text-gray-500 text-base tracking-tight">Technologies</span>
      </div>
    </div>
  );
}

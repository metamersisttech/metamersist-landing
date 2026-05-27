export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Placeholder logo - replace with actual logo */}
      <div className="h-8 w-8 rounded-lg bg-forest flex items-center justify-center">
        <span className="text-bone font-semibold text-sm">M</span>
      </div>
      <span className="font-semibold text-lg tracking-tight">Metamersist</span>
    </div>
  );
}

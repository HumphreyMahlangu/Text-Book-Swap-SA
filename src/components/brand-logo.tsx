export function BrandLogo({ compact = false }: { compact?: boolean }) {
  return (
    <img
      src="/textbook-swap-sa.jpeg"
      alt="Textbook Swap SA — Swap, Save, Study Smart"
      width={1254}
      height={1254}
      className={
        compact
          ? "h-10 w-10 shrink-0 rounded-md bg-white object-contain"
          : "h-20 w-20 shrink-0 rounded-md bg-white object-contain"
      }
    />
  );
}

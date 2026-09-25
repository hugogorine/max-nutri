export default function Loading() {
  return (
    <div
      role="status"
      className="flex min-h-svh flex-col items-center justify-center gap-5 bg-paper"
    >
      <span className="relative block h-px w-40 overflow-hidden bg-line">
        <span className="absolute inset-y-0 left-0 w-1/3 animate-[loading-bar_1.4s_var(--ease-in-out-soft)_infinite] bg-forest" />
      </span>
      <span className="font-serif text-[1.125rem] text-forest italic">
        Carregando
      </span>
    </div>
  );
}

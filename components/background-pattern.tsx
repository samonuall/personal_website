/**
 * A very soft warm wash behind the page. Deliberately subtle — it should read
 * as paper tone rather than as a visible pattern.
 */
export function BackgroundPattern() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 bg-background" aria-hidden="true">
      <div
        className="absolute inset-x-0 top-0 h-[520px] opacity-[0.55] dark:opacity-30"
        style={{
          background:
            "radial-gradient(60% 100% at 50% 0%, hsl(var(--primary) / 0.07), transparent 70%)",
        }}
      />
    </div>
  )
}

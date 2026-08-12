/**
 * Applies the stored theme before first paint so the page never flashes the
 * wrong palette. Kept in sync with `components/theme-toggle.tsx`, which owns
 * the same `theme` localStorage key and the `dark` class on <html>.
 *
 * Light is the default; dark is opt-in via the toggle or an OS preference.
 */
const script = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var dark = stored
      ? stored === 'dark'
      : window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.toggle('dark', dark);
  } catch (e) {}
})();
`

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />
}

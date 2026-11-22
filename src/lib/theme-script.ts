export const THEME_KEY = "theme"
export const RAIL_SIDE_KEY = "rail-side"
export const preferencesScript = `(() => {
  let theme, side;
  try { theme = localStorage.getItem(${JSON.stringify(THEME_KEY)}); side = localStorage.getItem(${JSON.stringify(RAIL_SIDE_KEY)}) } catch {}
  if (theme !== 'light' && theme !== 'dark') theme = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  const root = document.documentElement;
  root.classList.add(theme); root.style.colorScheme = theme;
  root.dataset.railSide = side === 'right' ? 'right' : 'left';
})()`
export function savePreference(key: string, value: string) {
  try {
    localStorage.setItem(key, value)
  } catch {
    /* Keep the in-memory preference when storage is unavailable. */
  }
}

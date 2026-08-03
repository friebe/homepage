export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'theme';

export function getPreferredTheme(): Theme {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'light' || stored === 'dark') return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function applyTheme(theme: Theme): void {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem(STORAGE_KEY, theme);

  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) {
    meta.setAttribute('content', theme === 'dark' ? '#242424' : '#fcfcfc');
  }

  syncThemeToggle();
}

export function toggleTheme(): void {
  const current = document.documentElement.getAttribute('data-theme');
  applyTheme(current === 'dark' ? 'light' : 'dark');
}

export function initTheme(): void {
  applyTheme(getPreferredTheme());
}

export function syncThemeToggle(): void {
  const theme = document.documentElement.getAttribute('data-theme');
  const button = document.querySelector<HTMLButtonElement>('[data-theme-toggle]');
  if (!button) return;

  const isDark = theme === 'dark';
  button.setAttribute('aria-pressed', String(isDark));
  button.setAttribute(
    'aria-label',
    isDark ? 'Hellmodus aktivieren' : 'Dunkelmodus aktivieren'
  );
}

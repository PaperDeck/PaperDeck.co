const storageKey = "paperdeck-theme";

function setTheme(theme: "light" | "dark") {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
  localStorage.setItem(storageKey, theme);
}

export default function ThemeSwitch() {
  const handleClick = () => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <div className="fixed right-4 top-4 z-50">
      <button
        type="button"
        aria-label="Toggle color theme"
        title="Toggle color theme"
        onClick={handleClick}
        className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200/80 bg-white/90 text-zinc-700 shadow-sm hover:border-zinc-300 hover:bg-zinc-50  dark:border-zinc-700 dark:bg-zinc-800/90 dark:text-zinc-200 dark:hover:border-zinc-600 dark:hover:bg-zinc-700 cursor-pointer"
      >
        <img
          src="/icons/moon.png"
          className="block h-5 w-5 dark:hidden"
          aria-hidden="true"
          alt="Moon icon"
        />
        <img
          src="/icons/sun.png"
          className="hidden h-5 w-5 dark:block"
          aria-hidden="true"
          alt="Sun icon"
        />
      </button>
    </div>
  );
}

import React from 'react';
import Button from './Button';
import { Linkedin, LogOut, Moon, Sun } from 'lucide-react';

export default function TopBar() {
  const [dark, setDark] = React.useState(() => localStorage.getItem('theme') === 'dark');

  React.useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  const logout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <header className="sticky top-0 z-10 bg-white/70 dark:bg-slate-900/70 backdrop-blur border-b border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="text-xl font-bold">To-Do Pro</div>
        <div className="flex items-center gap-2">
          <a href="https://www.linkedin.com/in/andré-coêlho" target="_blank" rel="noreferrer">
            <Button>
              <Linkedin size={16} /> Meu LinkedIn
            </Button>
          </a>
          <Button variant="ghost" onClick={() => setDark((v) => !v)}>
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </Button>
          <Button variant="ghost" onClick={logout}>
            <LogOut size={16} />
          </Button>
        </div>
      </div>
    </header>
  );
}

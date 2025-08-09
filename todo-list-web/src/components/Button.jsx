import React from 'react';
import cx from 'classnames';

export default function Button({ children, variant = 'primary', className = '', ...props }) {
  // Prevent shrinking in tight flex rows and keep label on one line to avoid odd wraps
  const base = 'inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 flex-shrink-0 whitespace-nowrap';
  const variants = {
    primary:
      'bg-brand-600 hover:bg-brand-700 text-white focus:ring-brand-500 dark:focus:ring-offset-slate-900',
    secondary:
      'bg-slate-200 hover:bg-slate-300 text-slate-900 dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-slate-100 focus:ring-slate-400 dark:focus:ring-slate-500',
    danger:
      'bg-red-600 hover:bg-red-700 text-white focus:ring-red-500',
    ghost:
      'bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200',
  };
  return (
    <button className={cx(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}

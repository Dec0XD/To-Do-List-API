import React from 'react';

export default function EmptyState({ title = 'Nenhuma tarefa', subtitle = 'Crie a primeira usando o formulário acima.' }) {
  return (
    <div className="rounded-xl border border-dashed border-slate-300 dark:border-slate-700 p-10 text-center text-slate-500">
      <h3 className="text-lg font-medium">{title}</h3>
      <p className="mt-1">{subtitle}</p>
    </div>
  );
}

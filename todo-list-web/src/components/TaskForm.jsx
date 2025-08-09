import React, { useEffect, useState } from 'react';
import Button from './Button';
import { Save } from 'lucide-react';

const initial = {
  title: '',
  description: '',
  status: 'pending',
  priority: 'medium',
  dueDate: '',
};

export default function TaskForm({ onSubmit, editing, onCancel }) {
  const [values, setValues] = useState(initial);

  useEffect(() => {
    if (editing) {
      setValues({
        ...editing,
        dueDate: editing.dueDate ? new Date(editing.dueDate).toISOString().slice(0, 10) : '',
      });
    } else setValues(initial);
  }, [editing]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { ...values, dueDate: new Date(values.dueDate).toISOString() };
    onSubmit(payload);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input name="title" value={values.title} onChange={handleChange} required placeholder="Título" className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2" />
        <select name="status" value={values.status} onChange={handleChange} className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2">
          <option value="pending">Pendente</option>
          <option value="in-progress">Em andamento</option>
          <option value="completed">Concluída</option>
        </select>
        <select name="priority" value={values.priority} onChange={handleChange} className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2">
          <option value="low">Baixa</option>
          <option value="medium">Média</option>
          <option value="high">Alta</option>
        </select>
        <input type="date" name="dueDate" value={values.dueDate} onChange={handleChange} required className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2" />
      </div>
      <textarea name="description" value={values.description} onChange={handleChange} required placeholder="Descrição" rows={3} className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2" />
      <div className="flex items-center gap-2">
        <Button type="submit">
          <Save size={16} /> {editing ? 'Salvar mudanças' : 'Adicionar tarefa'}
        </Button>
        {editing && (
          <Button type="button" variant="ghost" onClick={onCancel}>
            Cancelar
          </Button>
        )}
      </div>
    </form>
  );
}

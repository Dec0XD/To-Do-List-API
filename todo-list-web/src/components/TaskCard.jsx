import React from 'react';
import Button from './Button';
import { CheckCircle2, Clock, Pencil, Trash2, AlertCircle } from 'lucide-react';

const statusColor = {
  'pending': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300',
  'in-progress': 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300',
  'completed': 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300',
};

const priorityBadge = {
  low: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300',
  medium: 'bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300',
  high: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300',
};

export default function TaskCard({ task, onEdit, onDelete, onToggleComplete }) {
  const due = new Date(task.dueDate);
  const overdue = due.getTime() < Date.now() && task.status !== 'completed';

  return (
    <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 p-4 shadow-sm hover:shadow-md">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold flex items-center gap-2">
            {task.title}
            {overdue && <AlertCircle className="text-red-500" size={18} title="Atrasada" />}
          </h3>
          <p className="text-slate-600 dark:text-slate-300 mt-1">{task.description}</p>
        </div>
        <div className="flex gap-2">
          <span className={`px-2 py-1 text-xs rounded-full ${statusColor[task.status]}`}>{task.status}</span>
          <span className={`px-2 py-1 text-xs rounded-full ${priorityBadge[task.priority]}`}>{task.priority}</span>
        </div>
      </div>

      <div className="mt-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex items-center gap-2 text-slate-500 dark:text-slate-300">
          <Clock size={16} />
          <span>Prazo: {due.toLocaleDateString()}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="secondary" onClick={() => onEdit(task)}>
            <Pencil size={16} /> Editar
          </Button>
          <Button variant="danger" onClick={() => onDelete(task)}>
            <Trash2 size={16} /> Excluir
          </Button>
          <Button variant="primary" onClick={() => onToggleComplete(task)}>
            <CheckCircle2 size={16} /> {task.status === 'completed' ? 'Marcar pendente' : 'Concluir'}
          </Button>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import useTasks from '../hooks/useTasks';
import TaskCard from '../components/TaskCard';
import TaskForm from '../components/TaskForm';
import Button from '../components/Button';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import { Filter, SortAsc, SortDesc, Plus } from 'lucide-react';
import EmptyState from '../components/EmptyState';

export default function TasksPage() {
  const {
    tasks,
    createTask,
    updateTask,
    deleteTask,
    filters,
    setFilters,
    sort,
    setSort,
    loading,
  } = useTasks();

  const [editing, setEditing] = React.useState(null);

  const onToggleComplete = (task) => {
    const next = task.status === 'completed' ? 'pending' : 'completed';
    updateTask(task._id, { status: next });
  };

  return (
    <div className="min-h-screen">
      <TopBar />
      <main className="mx-auto max-w-6xl px-4 py-6 space-y-6">
        <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Plus className="text-brand-600" /> Nova tarefa
            </h2>
            <div className="flex items-center gap-2 flex-wrap">
              <div className="flex items-center gap-2 text-sm flex-wrap">
                <Filter size={16} />
                <select value={filters.status} onChange={(e) => setFilters((f) => ({ ...f, status: e.target.value }))} className="rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2">
                  <option value="all">Todos status</option>
                  <option value="pending">Pendente</option>
                  <option value="in-progress">Em andamento</option>
                  <option value="completed">Concluída</option>
                </select>
                <select value={filters.priority} onChange={(e) => setFilters((f) => ({ ...f, priority: e.target.value }))} className="rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2">
                  <option value="all">Todas prioridades</option>
                  <option value="low">Baixa</option>
                  <option value="medium">Média</option>
                  <option value="high">Alta</option>
                </select>
                <select value={filters.due} onChange={(e) => setFilters((f) => ({ ...f, due: e.target.value }))} className="rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2">
                  <option value="all">Todos prazos</option>
                  <option value="today">Hoje</option>
                  <option value="week">Próx. 7 dias</option>
                  <option value="overdue">Atrasadas</option>
                </select>
              </div>
              <div className="flex items-center gap-2 text-sm flex-wrap">
                {sort.dir === 'asc' ? (
                  <Button variant="ghost" onClick={() => setSort((s) => ({ ...s, dir: 'desc' }))}>
                    <SortAsc size={16} />
                  </Button>
                ) : (
                  <Button variant="ghost" onClick={() => setSort((s) => ({ ...s, dir: 'asc' }))}>
                    <SortDesc size={16} />
                  </Button>
                )}
                <select value={sort.by} onChange={(e) => setSort((s) => ({ ...s, by: e.target.value }))} className="rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2">
                  <option value="priority">Por prioridade</option>
                  <option value="date">Por data</option>
                </select>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <TaskForm onSubmit={(p) => (editing ? updateTask(editing._id, p).then(() => setEditing(null)) : createTask(p))} editing={editing} onCancel={() => setEditing(null)} />
          </div>
        </section>

        <section className="space-y-3">
          {loading ? (
            <p>Carregando...</p>
          ) : tasks.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {tasks.map((t) => (
                <TaskCard key={t._id} task={t} onEdit={setEditing} onDelete={(task) => deleteTask(task._id)} onToggleComplete={onToggleComplete} />
              ))}
            </div>
          )}
        </section>
  </main>
  <Footer />
    </div>
  );
}

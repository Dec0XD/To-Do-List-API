import { useEffect, useMemo, useState } from 'react';
import api from '../api/client';
import toast from 'react-hot-toast';

export default function useTasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [filters, setFilters] = useState({ status: 'all', priority: 'all', due: 'all' });
  const [sort, setSort] = useState({ by: 'priority', dir: 'asc' });

  const fetchTasks = async () => {
    setLoading(true);
    setError('');
    try {
      const { data } = await api.get('/tasks');
      setTasks(data);
    } catch (e) {
      setError('Falha ao carregar tarefas');
      toast.error('Falha ao carregar tarefas');
    } finally {
      setLoading(false);
    }
  };

  const createTask = async (payload) => {
    try {
      const { data } = await api.post('/tasks', payload);
      setTasks((t) => [data, ...t]);
      toast.success('Tarefa criada');
    } catch (e) {
      toast.error('Erro ao criar');
      throw e;
    }
  };

  const updateTask = async (id, payload) => {
    try {
      const { data } = await api.put(`/tasks/${id}`, payload);
      setTasks((t) => t.map((i) => (i._id === id ? data : i)));
      toast.success('Tarefa atualizada');
    } catch (e) {
      toast.error('Erro ao atualizar');
      throw e;
    }
  };

  const deleteTask = async (id) => {
    try {
      await api.delete(`/tasks/${id}`);
      setTasks((t) => t.filter((i) => i._id !== id));
      toast.success('Tarefa removida');
    } catch (e) {
      toast.error('Erro ao remover');
      throw e;
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const filtered = useMemo(() => {
    return tasks
      .filter((t) => (filters.status === 'all' ? true : t.status === filters.status))
      .filter((t) => (filters.priority === 'all' ? true : t.priority === filters.priority))
      .filter((t) => {
        if (filters.due === 'all') return true;
        const due = new Date(t.dueDate).getTime();
        const now = Date.now();
        if (filters.due === 'overdue') return due < now;
        if (filters.due === 'today') {
          const start = new Date();
          start.setHours(0, 0, 0, 0);
          const end = new Date();
          end.setHours(23, 59, 59, 999);
          return due >= start.getTime() && due <= end.getTime();
        }
        if (filters.due === 'week') {
          const end = new Date();
          end.setDate(end.getDate() + 7);
          end.setHours(23, 59, 59, 999);
          return due <= end.getTime();
        }
        return true;
      })
      .sort((a, b) => {
        const dir = sort.dir === 'asc' ? 1 : -1;
        if (sort.by === 'priority') {
          const order = { high: 3, medium: 2, low: 1 };
          return (order[a.priority] - order[b.priority]) * dir;
        }
        if (sort.by === 'date') {
          return (new Date(a.dueDate) - new Date(b.dueDate)) * dir;
        }
        return 0;
      });
  }, [tasks, filters, sort]);

  return {
    tasks: filtered,
    rawTasks: tasks,
    loading,
    error,
    filters,
    setFilters,
    sort,
    setSort,
    fetchTasks,
    createTask,
    updateTask,
    deleteTask,
  };
}

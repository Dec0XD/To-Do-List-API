import React from 'react';
import api from '../api/client';
import Button from '../components/Button';
import { KeyRound, Sparkles } from 'lucide-react';
import toast from 'react-hot-toast';

export default function LoginPage() {
  const [loading, setLoading] = React.useState(false);

  const login = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await api.post('/auth/mock-login');
      localStorage.setItem('token', data.token);
      toast.success('Login realizado');
      window.location.href = '/';
    } catch (e) {
      toast.error('Falha no login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid place-items-center bg-gradient-to-br from-brand-50 to-slate-50 dark:from-slate-900 dark:to-slate-800">
      <div className="w-full max-w-md mx-auto bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 p-8">
        <div className="text-center mb-6">
          <div className="mx-auto h-12 w-12 grid place-items-center rounded-full bg-brand-100 text-brand-700 dark:bg-brand-900/40 dark:text-brand-300">
            <Sparkles />
          </div>
          <h1 className="mt-3 text-2xl font-bold">Bem-vindo ao To-Do Pro</h1>
          <p className="text-slate-600 dark:text-slate-300">Acesse com login rápido de demonstração</p>
        </div>
        <form onSubmit={login} className="space-y-4">
          <Button type="submit" className="w-full" disabled={loading}>
            <KeyRound size={16} /> {loading ? 'Entrando...' : 'Entrar com Login de Demonstração'}
          </Button>
        </form>
        <p className="text-xs text-slate-500 mt-4 text-center">Usamos um JWT mock para facilitar o teste.</p>
      </div>
    </div>
  );
}

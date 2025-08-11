import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-10 py-6 text-center text-sm text-slate-500">
      <p>
        Feito com ❤️ por André Coêlho.
        &copy; {new Date().getFullYear()} todos os direitos reservados.
      </p>
    </footer>
  );
}

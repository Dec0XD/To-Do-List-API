<!-- Logo e Título -->
<p align="center">
	<img src="github/logo.png" alt="To-Do Pro Logo" width="120"/>
	<!-- Substitua por uma imagem em github/logo.png -->
	<!-- Ou remova a tag img se não quiser usar logo -->
</p>

<h1 align="center">To-Do Pro — API + Front-end moderno</h1>

<p align="center">
	Lista de tarefas full stack com autenticação JWT, filtros/ordenação e UI responsiva — pronta para portfolio e entrevistas.
  
</p>

<!-- Badges -->
<p align="center">
	<a href="https://github.com/Dec0XD/To-Do-List-API"><img src="https://img.shields.io/github/stars/Dec0XD/To-Do-List-API?style=for-the-badge" alt="Stars"/></a>
	<a href="https://github.com/Dec0XD/To-Do-List-API/issues"><img src="https://img.shields.io/github/issues/Dec0XD/To-Do-List-API?style=for-the-badge" alt="Issues"/></a>
	<a href="http://localhost:5173"><img src="https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge" alt="Live Demo"/></a>
	<a href="LICENSE"><img src="https://img.shields.io/github/license/Dec0XD/To-Do-List-API?style=for-the-badge" alt="License"/></a>
</p>

---

## 📚 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Tecnologias](#-tecnologias)
- [Instalação](#-instalação)
- [Uso](#-uso)
- [Roadmap](#-roadmap)
- [Por que este projeto é relevante?](#-por-que-este-projeto-é-relevante)
- [Contribuição](#-contribuição)
- [Licença](#-licença)
- [Contato](#-contato)
- [Agradecimentos](#-agradecimentos)

---

## 📌 Sobre o Projeto

Aplicação de To-Do completa, com API Node.js/Express/MongoDB e um front-end moderno em React + Tailwind (Vite). 
Foco em boas práticas de arquitetura, DX, e experiência visual (animações leves, dark mode, ícones Lucide).

**Problema que resolve:** Organização de tarefas pessoais/equipe com prioridade, status e prazo, facilitando a gestão do dia a dia.

**Público-alvo:** Desenvolvedores(as) e recrutadores(as) que desejam avaliar habilidades full stack com uma base funcional e bem documentada.

**Diferencial:**
- Camadas claras (Controller/Service/Repository)
- JWT com fluxo de mock login para testes rápidos
- Filtros (status/prioridade/prazo) e ordenação (prioridade/data)
- Docker Compose para subir tudo com 1 comando
- UI responsiva, moderna e acessível

<p align="center">
		<img src="github/ui-list.png" alt="Screenshot da lista de tarefas" width="85%"/>
		<!-- Salve sua captura de tela (como a enviada) em github/ui-list.png para aparecer aqui. -->
</p>

---

## 🛠 Tecnologias

Projeto desenvolvido com:

- ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
- ![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
- ![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
- ![Docker](https://img.shields.io/badge/Docker-0db7ed?style=for-the-badge&logo=docker&logoColor=white)
- ![React](https://img.shields.io/badge/React-20232a?style=for-the-badge&logo=react&logoColor=61DAFB)
- Tailwind CSS, Vite, Lucide Icons

---

## 🚀 Instalação

Pré-requisitos: Docker e Docker Compose.

1) Rodando com Docker (recomendado)

```powershell
git clone https://github.com/Dec0XD/To-Do-List-API.git
cd To-Do-List-API
docker compose up --build -d

# Endpoints
# API: http://localhost:3000
# Web: http://localhost:5173
```

Para parar:

```powershell
docker compose down
```

2) Rodando localmente (sem Docker)

API

```powershell
cd todo-list-api
npm install
npm start
# API em http://localhost:3000
```

Web

```powershell
cd todo-list-web
npm install
npm run dev
# SPA em http://localhost:5173
```

---

## 💡 Uso

Exemplo (PowerShell) — obter token e listar tarefas:

```powershell
$token = (Invoke-RestMethod -Method Post -Uri http://localhost:3000/api/auth/mock-login).token
Invoke-RestMethod -Method Get -Uri http://localhost:3000/api/tasks -Headers @{ Authorization = "Bearer $token" }
```

Interface (exemplo):

<p align="center">
		<img src="github/ui-login.png" alt="Tela de login" width="80%"/>
		<!-- Opcional: adicione também github/ui-login.png. -->
</p>

---

## 🗺 Roadmap

- [x] CRUD de tarefas
- [x] Autenticação JWT (mock login)
- [x] Docker Compose (API + Web + Mongo)
- [x] Filtros por status/prioridade/prazo e ordenação
- [x] UI responsiva, dark mode e ícones
- [ ] Testes unitários e E2E
- [ ] Deploy público (Web: Vercel/Netlify | API: Render/Railway)
- [ ] CI simples (lint/test/build)

---

## 🎯 Por que este projeto é relevante?

Este repositório demonstra um fluxo full stack completo com foco em qualidade de código, separação de camadas e uma UI caprichada.
É ideal para entrevistas, pois mostra:

- Integração front-back com autenticação e estados assíncronos
- Arquitetura clara (Controller/Service/Repository) e boas práticas
- Design responsivo, acessibilidade e dark mode
- Execução local frictionless via Docker Compose

Além disso, o front já traz detalhes "portfolio-friendly": botões chamativos, animações discretas, ícones modernos e um atalho para LinkedIn (atualize a URL no componente `TopBar`).

---

## 🤝 Contribuição

Contribuições são bem-vindas!

1. Faça um Fork
2. Crie uma branch (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m "feat: adiciona nova feature"`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

---

## 📜 Licença

Distribuído sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

## 📬 Contato

- Autor: Dec0XD
- LinkedIn: atualize o link no topo do app (TopBar) para facilitar o contato
- Repositório: https://github.com/Dec0XD/To-Do-List-API

---

## 🙏 Agradecimentos

- Comunidade Open Source
- Time do Tailwind CSS, Vite, React e Express
- Inspirações de UI modernas (shadcn/ui, hero patterns, etc.)



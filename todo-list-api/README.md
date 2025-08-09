# To-Do List API

API em Node.js + Express + MongoDB para gerenciar tarefas.

Rotas principais (montadas em /api):
- POST /auth/mock-login — retorna um JWT de demonstração
- GET /auth/me — rota protegida de teste
- POST /tasks — cria tarefa
- GET /tasks — lista tarefas
- GET /tasks/:id — busca tarefa
- PUT /tasks/:id — atualiza tarefa
- DELETE /tasks/:id — exclui tarefa

Execute via Docker pelo compose na raiz do repo.
# To-Do List API

## Descrição

Este projeto é uma API para gerenciar uma lista de tarefas, permitindo operações de CRUD (Criar, Ler, Atualizar, Deletar) para tarefas. Cada tarefa possui um título, descrição, status, prioridade e prazo. A API também implementa autenticação de usuários utilizando JWT (JSON Web Token).

## Tecnologias Utilizadas

- **Backend:** Node.js com Express
- **Banco de Dados:** MongoDB
- **Estrutura de Projeto:** Arquitetura MVC simples
- **Testes:** Jest (futuro)

## Funcionalidades

- **CRUD de Tarefas:**
  - Criar uma nova tarefa
  - Listar todas as tarefas
  - Atualizar uma tarefa existente
  - Deletar uma tarefa

- **Autenticação:**
  - Login de usuário com geração de token JWT
  - Proteção de rotas com middleware de autenticação

- **Ordenação e Filtragem:**
  - Ordenar tarefas por prioridade e prazo
  - Filtrar tarefas com base em critérios específicos

## Estrutura do Projeto

```
todo-list-api
├── src
│   ├── controllers         # Controladores para gerenciar a lógica de negócios
│   ├── models              # Modelos de dados (Mongoose)
│   ├── routes              # Rotas da API
│   ├── services            # Serviços para lógica de aplicação
│   ├── repositories        # Repositórios para operações de banco de dados
│   ├── middlewares         # Middlewares para autenticação
│   ├── utils               # Utilitários (ex: JWT)
│   └── app.js              # Ponto de entrada da aplicação
├── tests                   # Testes unitários
├── package.json            # Configuração do npm
├── Dockerfile              # Instruções para construir a imagem Docker
├── .env                    # Variáveis de ambiente
└── README.md               # Documentação do projeto
```

## Instruções de Configuração

1. Clone o repositório:
   ```
   git clone <URL_DO_REPOSITORIO>
   cd todo-list-api
   ```

2. Instale as dependências:
   ```
   npm install
   ```

3. Configure as variáveis de ambiente no arquivo `.env`.

4. Inicie o servidor:
   ```
   npm start
   ```

## Exemplos de Uso

- **Criar Tarefa:**
  - Endpoint: `POST /tasks`
  - Corpo da requisição:
    ```json
    {
      "title": "Nova Tarefa",
      "description": "Descrição da tarefa",
      "status": "pendente",
      "priority": "alta",
      "dueDate": "2023-12-31"
    }
    ```

- **Listar Tarefas:**
  - Endpoint: `GET /tasks`

## Evolução Futura

- Separar camadas em Controllers, Services e Repositories.
- Adicionar testes unitários com Jest.
- Dockerizar a aplicação para execução isolada.
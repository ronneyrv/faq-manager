# 📘 FAQ Manager

Aplicação web para gerenciamento de perguntas frequentes (FAQ), desenvolvida com React e Material UI. O projeto permite visualizar, adicionar, editar e remover perguntas através de uma interface moderna e responsiva.

A aplicação foi construída com foco em organização de código e experiência do usuário, utilizando uma camada de serviços para simular uma API e persistência local de dados com Local Storage.

---

## 🚀 Tecnologias Utilizadas

- React
- Material UI
- React Router DOM
- Local Storage
- JavaScript (ES6+)

---

## ⚙️ Funcionalidades

- ✅ Visualizar lista de perguntas frequentes
- ➕ Adicionar novas perguntas
- ✏️ Editar perguntas existentes
- 🗑️ Excluir perguntas com confirmação
- 🔐 Autenticação obrigatória para edição e exclusão
- 💾 Persistência de dados utilizando Local Storage
- 📱 Interface responsiva para dispositivos móveis
- ⚡ Camada de serviços simulando uma API

---

## 🏗️ Arquitetura

O projeto utiliza uma camada de serviços (`faqService`) para abstrair a manipulação de dados e simular requisições de uma API real.

```txt
React
   ↓
faqService
   ↓
Local Storage
   ↓
faqs.json (dados iniciais)
```

Essa abordagem permite substituir futuramente a fonte de dados por uma API real sem alterar a lógica das páginas e componentes.

---

## 🔐 Autenticação

Para editar ou deletar perguntas, é necessário autenticar-se com as seguintes credenciais:

**Login:** admin  
**Senha:** 123  

A autenticação é realizada de forma simples no frontend (sem backend real).

---

## 📦 Instalação e Execução

### 1. Clone o repositório

```bash
git clone https://github.com/ronneyrv/faq-manager.git
cd faq-manager
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Execute a aplicação

Se estiver utilizando Vite:

```bash
npm run dev
```

A aplicação será iniciada em:

```txt
http://localhost:5173
```

dependendo da configuração do projeto.

---

## 📦 Estrutura de Arquivos (simplificada)

```txt
📦 src
├── 📁 components
│   ├── Ask.jsx
│   └── Header.jsx
│
├── 📁 pages
│   ├── Home.jsx
│   ├── AddFaq.jsx
│   └── EditFaq.jsx
│
├── 📁 services
│   └── faqService.js
│
├── 📁 data
│   └── faqs.json
│
├── App.jsx
├── routes.jsx
└── ...
```

---

## 💡 Observações

- A autenticação é mockada no frontend e serve apenas para simulação.
- Os dados são persistidos localmente utilizando Local Storage.
- O arquivo `faqs.json` é utilizado para inicializar os dados da aplicação.
- A camada `faqService` foi criada para simular chamadas de API e facilitar futuras integrações com backend real.
- Projeto desenvolvido com foco em demonstração de habilidades frontend e boas práticas de organização.


# Projeto de Testes Automatizados - Banco Web

Este projeto tem como objetivo demonstrar como realizar a automação de testes utilizando o [Cypress](https://www.cypress.io/) com JavaScript. Os testes cobrem funcionalidades essenciais da aplicação web "Banco Web", como login e transferência, com uso de comandos customizados e geração de relatórios automatizados.

---

## 🔧 Tecnologias e Ferramentas

- [Cypress](https://docs.cypress.io/) - Framework de testes end-to-end
- JavaScript (ES6+)
- [cypress-mochawesome-reporter](https://www.npmjs.com/package/cypress-mochawesome-reporter) - Gerador de relatórios dos testes
- Node.js & npm

---

## 📁 Estrutura do Projeto

```
cypress/
│
├── e2e/                     # Testes automatizados
│   ├── login.cy.js
│   └── transferencia.cy.js
│
├── fixtures/               # Massa de dados e mocks
│   ├── credenciais.json
│   └── example.json
│
├── support/
│   ├── commands/           # Comandos customizados
│   │   ├── common.js
│   │   ├── login.js
│   │   └── transferencia.js
│   ├── commands.js         # Importação central dos comandos
│   └── e2e.js              # Configurações globais dos testes
│
├── cypress.config.js       # Configuração principal do Cypress
├── package.json            # Dependências e scripts do projeto
└── .gitignore              # Arquivos ignorados pelo Git
```

---

## 🧪 Testes Automatizados

### 📂 `cypress/e2e/`

Contém os arquivos com os cenários de testes:

- **`login.cy.js`**: Verifica autenticação com credenciais válidas e inválidas.
- **`transferencia.cy.js`**: Valida regras e comportamento da funcionalidade de transferência.

---

## 🧩 Custom Commands

Os comandos customizados foram criados para reutilização e melhor legibilidade dos testes. Estão organizados por funcionalidade:

- **`common.js`**: comandos auxiliares genéricos.
- **`login.js`**: comandos específicos para autenticação, como `cy.loginComCredenciais()`.
- **`transferencia.js`**: comandos relacionados à operação de transferência.

Todos os comandos são centralizados em `support/commands.js` para serem carregados automaticamente.

---

## 🚀 Pré-requisitos

Antes de rodar os testes, é necessário que:

1. A API esteja em execução:  
   🔗 [banco-api](https://github.com/juliodelimas/banco-api)

2. A aplicação web esteja em execução:  
   🔗 [banco-web](https://github.com/juliodelimas/banco-web)

> Certifique-se de que ambas estão acessíveis localmente.

---

## ⚙️ Instalação

```bash
# Clone este repositório
git clone https://github.com/dmurai01/banco-web-tests.git
cd banco-web-tests

# Instale as dependências
npm install
```

---

## ▶️ Execução dos Testes

### Modo interativo (GUI do Cypress):

```bash
npx cypress open
```

### Modo headless (com geração de relatório):

```bash
npx cypress run
```

Os relatórios serão gerados automaticamente pelo `cypress-mochawesome-reporter` na pasta `cypress/reports`.

---

## 📄 Relatórios

Este projeto utiliza `cypress-mochawesome-reporter` para geração de relatórios em HTML. O relatório é gerado automaticamente após a execução dos testes no modo headless e pode ser encontrado em:

```
cypress/reports/mochawesome.html
```

---

## ✅ Boas Práticas Adotadas

- Uso de **Custom Commands** para reutilização de código.
- Organização de arquivos por tipo e funcionalidade.
- Separação clara entre testes, dados e lógica de suporte.
- Geração de **relatórios automatizados** para análise dos testes.

---

## 📌 Considerações Finais

Este projeto é uma base prática e didática para demonstrar como implementar automação de testes com Cypress, incluindo boas práticas como uso de comandos customizados, estrutura organizada e integração com geração de relatórios.

---

🧪 _Automatizar é prevenir erros antes que eles cheguem ao usuário._

# Fastify TS Boilerplate

A minimal Fastify + TypeScript boilerplate.

## Folder/File Structure

```plaintext
fastify-ts-boilerplate/
├── src/
│   ├── controllers/           # Application logic handlers
│   ├── plugins/               # Fastify plugins (e.g., authentication, logging)
│   ├── routes/                # Route declarations and bindings
│   └── index.ts               # Entry point
├── .env
├── .gitignore
├── package.json
├── README.md
└── tsconfig.json
```

## Getting Started

1. Create this boilerplate:
   ```bash
   npx create-sgrebenicek-fastify-ts example-app
   cd example-app
   ```

2. Configure environment and gitignore:
   ```bash
   cp .env.example .env
   cp .gitignore.example .gitignore
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run in development mode:
   ```bash
   npm run dev
   ```
   or in live mode:
   ```bash
   npm run build
   npm start
   ```

## After Initialization

Before starting a new project, update the following:

1. **Project Name & Description**
    - Change `name`, `version` and `description`fields in **package.json**.

2. **Environment Variables**
    - Change environment variables in  **.env** (e.g., `DB_CONNECTION=...`, `DB_PORT=...`).

3. **TypeScript Config**
    - Review **tsconfig.json**.

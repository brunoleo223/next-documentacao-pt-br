---
description: Get started with Next.js in the official documentation, and learn more about all our features!
---

# Introdução

Seja bem-vind@ a documentação em Português do Next.js

Se você é novo com Next.js, recomendamos começar com esse [curso básico](https://nextjs.org/learn/basics/create-nextjs-app).

O curso interativo com perguntas vai te guiar por tudo o que você precisa saber para usar Next.js

Se você tem dúvidas sobre qualquer coisa relacionada ao Next.js, você pode perguntar em nossa comunidade no [GitHub Discussions](https://github.com/vercel/next.js/discussions).

#### Requisitos de Sistema

- [Node.js 12.22.0](https://nodejs.org/) ou superior
- MacOS, Windows (com WSL), e Linux são suportados

## Configuração automática

Recomendamos criar um novo app com Next.js usando `create-next-app`, pois com ele tudo será configurado automáticamente para você. Para criar um projeto basta rodar:

```bash
npx create-next-app@latest
# ou
yarn create next-app
# ou
pnpm create next-app
```

Se você quer começar um projeto com Typescript você pode adicionar `--typescript`:

```bash
npx create-next-app@latest --typescript
# ou
yarn create next-app --typescript
# ou
pnpm create next-app --typescript
```

Após a instalação finalizar:

- Execute `npm run dev` ou `yarn dev` ou `pnpm dev` para iniciar o desenvolvimento no servidor `http://localhost:3000`
- Visite `http://localhost:3000` para ver sua aplicação
- Edite `pages/index.js` e veja as atualizações no seu navegador

Para mais informações de como usar o `create-next-app`, você pode acessar a [documentação oficial `create-next-app`](/docs/api-reference/create-next-app.md).

## Configuração manual

Instale `next`, `react` e `react-dom` em seu projeto:

```bash
npm install next react react-dom
# ou
yarn add next react react-dom
# ou
pnpm add next react react-dom
```

Abra o `package.json` e adicione os seguintes `scripts`:

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}
```

Esses scripts se referem a diferentes etapas de desenvolvimento da sua aplicação:

- `dev` - Execute [`next dev`](/docs/api-reference/cli.md#development) para iniciar o Next.js em modo de desenvolvimento
- `build` - Execute [`next build`](/docs/api-reference/cli.md#build) para preparar sua aplicação para produção
- `start` - Execute [`next start`](/docs/api-reference/cli.md#production) para iniciar um servidor de produção Next.js
- `lint` - Execute [`next lint`](/docs/api-reference/cli.md#lint) para configurar o Next.js integrado ao ESLint

Crie os diretórios `pages` e `public` na pasta principal da sua aplicação:

- `pages` - Associado a uma rota com base em seu nome de arquivo. Por exemplo, `pages/sobre.js` é mapeado para `/sobre`
- `public` - Armazena seus ativos estáticos como imagens, fonts etc. Arquivos dentro da pasta `public` podem ser referenciados no seu código a partir da URL base (`/`).

Next.js é construído em torno do conceito de [paginas (pages)](/docs/basic-features/pages.md). Uma página é um [Componente React](https://reactjs.org/docs/components-and-props.html) exportado por um arquivo `.js`, `.jsx`, `.ts`, ou `.tsx` dentro da pasta `pages`. Você pode adicionar [rotas dinamicas](/docs/routing/dynamic-routes) com parâmetros no nome dos arquivos.

Dentro da pasta `pages` adicione um arquivo `index.js` para começar. Essa é a página que será carregada quando o usuário acessar a raiz da sua aplicação.

Preencha `pages/index.js` com o código abaixo:

```jsx
function HomePage() {
  return <div>Começando com Next.js!</div>
}

export default HomePage
```

Após concluir a configuração:

- Execute `npm run dev` ou `yarn dev` ou `pnpm dev` para iniciar o desenvolvimento no servidor `http://localhost:3000`
- Visite `http://localhost:3000` para ver sua aplicação
- Edite `pages/index.js` e veja as atualizações no seu navegador

Até agora você viu:

- Compilação e [construção (bundling)](/docs/advanced-features/compiler.md) automáticos
- [React Carregamento Rápido (Fast Refresh)](https://nextjs.org/blog/next-9-4#fast-refresh)
- [Geração automática e rendesização pelo servidor](/docs/basic-features/data-fetching/overview.md) das [`pages/`](/docs/basic-features/pages.md)
- [Arquivos estáticos](/docs/basic-features/static-file-serving.md) em `public/` são mapeados na URL de base (`/`)

Em adicional, qualquer aplicação Next.js está pronta para produção desde o começo. Leia mais em nossa [Documentação de Deploy](/docs/deployment.md).

## Relacionados

Para mais informações sobre o que fazer com next, recomendamos as seguites leituras:

<div class="card">
  <a href="/docs/basic-features/pages.md">
    <b>Páginas:</b>
    <small>Saiba mais sobre como funcionam a `páginas (pages)` no Next.js.</small>
  </a>
</div>

<div class="card">
  <a href="/docs/basic-features/built-in-css-support.md">
    <b>Suporte a CSS:</b>
    <small>Suporte a CSS integrado para adicionar estílos personalizados na sua aplicação</small>
  </a>
</div>

<div class="card">
  <a href="/docs/api-reference/cli.md">
    <b>CLI:</b>
    <small>Aprenda sobre a CLI (command-line interface ou interface de comando de linha) do Next.js.</small>
  </a>
</div>

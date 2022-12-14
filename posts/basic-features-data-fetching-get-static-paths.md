---
description: Fetch data and generate static pages with `getStaticProps`. Learn more about this API for data fetching in Next.js.
---

# getStaticPaths

Se a página possui [Rotas Dinâmicas](/docs/routing/dynamic-routes.md) e usa `getStaticProps`, então você precisa definir uma lista de caminhos que serão gerados estáticamente. 

Quando você exporta uma função chamada `getStaticPaths` (Geração de Site Estático) de uma página que usa rotas dinâmicas, o Next.js irá pré-renderizar estaticamente todos os caminhos especificados em `getStaticPaths`.

```jsx
// pages/posts/[id].js

// Será gerado `/posts/1` e `/posts/2`
export async function getStaticPaths() {
  return {
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    fallback: false, // também pode ser true ou blocking
  }
}

// `getStaticPaths` precisa usar `getStaticProps`
export async function getStaticProps(context) {
  return {
    // Envia para o componente de página via props
    props: { post: {} },
  }
}

export default function Post({ post }) {
  // Renderizar post...
}
```

A [API de referência de `getStaticPaths`](/docs/api-reference/data-fetching/get-static-paths.md) trata sobre todos os parâmetros e propriedades que podem ser usadas com `getStaticPaths` .

## Quando devo usar getStaticPaths?

Você deve usar `getStaticPaths` se vocês estiver pré-renderizando estáticamente páginas que usam rotas dinâmicas e:

- Os dados veem de um CMS headless
- Os dados vem de um banco de dados
- Os dados vem de um sistema de arquivos
- Os dados podem ser publicamente salvos em cache 
- A página precisa ser pré-renderizada (para SEO) e ser muito rápida — `getStaticProps` geraarquivos `HTML` e `JSON`, ambos podem ser salvos em cache em um CDN para performance

## Quando getStaticPaths executa

`getStaticPaths` será executado apenas durante a compilação para produção, ele não será executado durante o tempo de execução. Você pode conferir que o código escrito dentro de `getStaticPaths` é removido do bundle [com essa ferramenta](https://next-code-elimination.vercel.app/).

### Como getStaticProps é executado com relação a getStaticPaths

- `getStaticProps` executa durante o `next build` para quaisquer `caminhos (paths)` retornados durante a compilação
- `getStaticProps` executa em segundo plano quando usado com `fallback: true`
- `getStaticProps` é chamado andes da renderização inicial quando usando com `fallback: blocking`

## Quando você deve usar getStaticPaths

- `getStaticPaths` **must** be used with `getStaticProps`
- You **cannot** use `getStaticPaths` with [`getServerSideProps`](/docs/basic-features/data-fetching/get-server-side-props.md)
- You can export `getStaticPaths` from a [Dynamic Route](/docs/routing/dynamic-routes.md) that also uses `getStaticProps`
- You **cannot** export `getStaticPaths` from non-page file (e.g. your `components` folder)
- You must export `getStaticPaths` as a standalone function, and not a property of the page component

## Runs on every request in development

In development (`next dev`), `getStaticPaths` will be called on every request.

## Generating paths on-demand

`getStaticPaths` allows you to control which pages are generated during the build instead of on-demand with [`fallback`](/docs/api-reference/data-fetching/get-static-paths.md#fallback-blocking). Generating more pages during a build will cause slower builds.

You can defer generating all pages on-demand by returning an empty array for `paths`. This can be especially helpful when deploying your Next.js application to multiple environments. For example, you can have faster builds by generating all pages on-demand for previews (but not production builds). This is helpful for sites with hundreds/thousands of static pages.

```jsx
// pages/posts/[id].js

export async function getStaticPaths() {
  // When this is true (in preview environments) don't
  // prerender any static pages
  // (faster builds, but slower initial page load)
  if (process.env.SKIP_BUILD_STATIC_GENERATION) {
    return {
      paths: [],
      fallback: 'blocking',
    }
  }

  // Call an external API endpoint to get posts
  const res = await fetch('https://.../posts')
  const posts = await res.json()

  // Get the paths we want to prerender based on posts
  // In production environments, prerender all pages
  // (slower builds, but faster initial page load)
  const paths = posts.map((post) => ({
    params: { id: post.id },
  }))

  // { fallback: false } means other routes should 404
  return { paths, fallback: false }
}
```

## Related

For more information on what to do next, we recommend the following sections:

<div class="card">
  <a href="/docs/api-reference/data-fetching/get-static-paths.md">
    <b>getStaticPaths API Reference</b>
    <small>Read the API Reference for getStaticPaths</small>
  </a>
</div>

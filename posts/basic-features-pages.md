---
description: Next.js pages are React Components exported in a file in the pages directory. Learn how they work here.
---

# Páginas

> **Nota:** Estamos introduzindo uma melhoria no suporte de roteamento no Next.js. Leia em [Layouts RFC](https://nextjs.org/blog/layouts-rfc) para mais detalhes e deixe seu feedback.

No Next.js, uma **página (page)** é um [Componente React](https://reactjs.org/docs/components-and-props.html) exportado por um arquivo `.js`, `.jsx`, `.ts`, ou `.tsx` nas pasta `pages`. Cada página está associada com uma rota baseada nos nomes dos arquivos. 

**Exemplo**: Se você criar `pages/sobre.js` exportando um componente React como o abaixo, esse aquivo estará disponível na sua aplicação no caminho `/sobre`.

```jsx
function Sobre() {
  return <div>Sobre</div>
}

export default Sobre
```

### Páginas com Rotas Dinâmicas

Next.js tem suporte a roteamento dinâmico. Por exemplo, se você criar um arquivo chamado `pages/posts/[id].js`, então esse arquivo estará acessível em `posts/artigo-1`, `posts/artigo-2`, etc.

> Para saber mais sobre roteamento dinâmico, clique em [Documentação Roteamento Dinâmico](/docs/routing-dynamic-routes).

## Pré-renderização

Por padrão, Next.ks **pré-renderiza** todas as páginas. Isso significa que o Next.js gera um HTML para cada página com antecedencia, em vez de deixar tudo para ser feito pelo Javascript do lado do cliente (client-side). A pré-renderização pode ter um resultado melhor de performance e SEO.

Cada HTML gerado está associado ao mínimo de código Javascript necesário para essa página. Quando uma página é carregada no nevegador, o código Javascript roda e gera uma página totalmente interativa. (Esse processo é chamado de _hidratação [hydration]_)

### Duas formas de pré-renderização

Next.js tem duas formas de pré-renderização: **Geração Estática (Static Generation)** e **Renderização no Servidor (Server-side Rendering)**. A diferença está em **quando** o HTML da página é gerado.

- [**Geração Estática (Recomendado)**](#geração-estática-recomendado): O HTML é gerado no **momento de construção** e será reutilizado em cada requisição.
- [**Renderização no Servidor**](#renderização-no-servidor): O HTML é gerado em **cada requisição**.

É importante ressaltar que o Next.js permite você **escolher** o tipo de pré-renderização que preferir utilizar para cada página. Você pode criar uma aplicação Next.js "híbrida" usando Geração Estática para algumas páginas e Renderização no Servidor em outras.

**Recomendamos** usar **Geração Estática** em vez de Renderização no Servidor por motivos de performance. Páginas geradas estaticamente podem ser armazenadas em cache por CDN sem configurações extras para melhorar performance. De qualquer forma, em alguns casos a Renderização no Servidor pode ser a única opção.

Você também pode usar a **Busca de dados do lado do cliente** junto com a Geração Estática ou Renderização no Servidor. Isso significa que algumas partes da página podem ser renderizadas inteiramente pelo Javascript do cliente. Para saber mais, acesse a documentação de [Busca de dados(Data Fetching)](/docs/basic-features-data-fetching-client-side).

## Geração Estática (Recomendado)

<details open>
  <summary><b>Exemplos</b></summary>
  <ul>
    <li><a href="https://github.com/vercel/next.js/tree/canary/examples/cms-wordpress">WordPress</a> (<a href="https://next-blog-wordpress.vercel.app">Demonstração</a>)</li>
    <li><a href="https://github.com/vercel/next.js/tree/canary/examples/blog-starter">Blog Simples com arquivos markdown</a> (<a href="https://next-blog-starter.vercel.app/">Demonstração</a>)</li>
    <li><a href="https://github.com/vercel/next.js/tree/canary/examples/cms-datocms">DatoCMS</a> (<a href="https://next-blog-datocms.vercel.app/">Demonstração</a>)</li>
    <li><a href="https://github.com/vercel/next.js/tree/canary/examples/cms-takeshape">TakeShape</a> (<a href="https://next-blog-takeshape.vercel.app/">Demonstração</a>)</li>
    <li><a href="https://github.com/vercel/next.js/tree/canary/examples/cms-sanity">Sanity</a> (<a href="https://next-blog-sanity.vercel.app/">Demonstração</a>)</li>
    <li><a href="https://github.com/vercel/next.js/tree/canary/examples/cms-prismic">Prismic</a> (<a href="https://next-blog-prismic.vercel.app/">Demonstração</a>)</li>
    <li><a href="https://github.com/vercel/next.js/tree/canary/examples/cms-contentful">Contentful</a> (<a href="https://next-blog-contentful.vercel.app/">Demonstração</a>)</li>
    <li><a href="https://github.com/vercel/next.js/tree/canary/examples/cms-strapi">Strapi</a> (<a href="https://next-blog-strapi.vercel.app/">Demonstração</a>)</li>
    <li><a href="https://github.com/vercel/next.js/tree/canary/examples/cms-prepr">Prepr</a> (<a href="https://next-blog-prepr.vercel.app/">Demonstração</a>)</li>
    <li><a href="https://github.com/vercel/next.js/tree/canary/examples/cms-agilitycms">Agility CMS</a> (<a href="https://next-blog-agilitycms.vercel.app/">Demonstração</a>)</li>
    <li><a href="https://github.com/vercel/next.js/tree/canary/examples/cms-cosmic">Cosmic</a> (<a href="https://next-blog-cosmic.vercel.app/">Demonstração</a>)</li>
    <li><a href="https://github.com/vercel/next.js/tree/canary/examples/cms-buttercms">ButterCMS</a> (<a href="https://next-blog-buttercms.vercel.app/">Demonstração</a>)</li>
    <li><a href="https://github.com/vercel/next.js/tree/canary/examples/cms-storyblok">Storyblok </a> (<a href="https://next-blog-storyblok.vercel.app/">Demonstração</a>)</li>
    <li><a href="https://github.com/vercel/next.js/tree/canary/examples/cms-graphcms">GraphCMS</a> (<a href="https://next-blog-graphcms.vercel.app/">Demonstração</a>)</li>
    <li><a href="https://github.com/vercel/next.js/tree/canary/examples/cms-kontent">Kontent</a> (<a href="https://next-blog-kontent.vercel.app/">Demonstração</a>)</li>
    <li><a href="https://github.com/vercel/next.js/tree/canary/examples/cms-builder-io">Builder.io </a> (<a href="https://cms-builder-io.vercel.app/">Demonstração</a>)</li>
    <li><a href="https://github.com/vercel/next.js/tree/canary/examples/cms-tina">TinaCMS</a> (<a href="https://cms-tina-example.vercel.app/">Demonstração</a>)</li>
    <li><a href="https://static-tweet.vercel.app/">Static Tweet (Demonstração)</a></li>
  </ul>
</details>

Se uma página usa **Geração Estática**, a página HTML será gerada **tempo de construção**. Isso significa que em produção a página HTML será gerada quando você executar `next build`. Esse HTML será então utilizado em cada requisição. Ele pode ser mantido em cache por uma CDN.

No Next.js, você pode gerar páginas estaticamente **com ou sem dados**. Vamos dar uma olhada em cada caso.

### Geração Estática sem dados

Por padrão, o Next.js pré-renderiza páginas usando Geração Estática sem busca de dadso. Aqui alguns exemplos:

```jsx
function Sobre() {
  return <div>Sobre</div>
}

export default Sobre
```

Perceba que essa página não precisa buscar nenhum dado externo para ser pré-renderizado. Em casos como esses, o Next.js gera uma arquivo HTML simples por página durante o tempo de construção.

### Geração Estática com dados

Algumas páginas precisão buscar dados externos para serem pré-renderizadas. Nesse caso temos duas opções e uma delas deve ser usada. Em casa caso você pode usar essas funções fornecidas pelo Next.js:

1. O **conteúdo** da sua página depende de dados externos: use `getStaticProps`.
2. Os **caminhos** da sua página dependem de dados externos: use `getStaticPaths` (geralmente combinado com `getStaticProps`).

#### Cenário 1: O **conteúdo** da sua página depende de dados externos

**Exemplo**: Sua página de blog precisa buscar a lista de posts em um CMS (sistema de gerenciamento de conteúdo).

```jsx
// Para Fazer: Precisa fazer um fetch em `posts` (chamando por alguma API)
//             antes da página ser renderizada
function Blog({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li>{post.titulo}</li>
      ))}
    </ul>
  )
}

export default Blog
```

Para buscar esses dados em pré-renderização, Next.js te permite `exporta` uma função `asincrona` chamada `getStaticProps` no mesmo arquivo. Essa função é chamada em tempo de construção e te permite passar os dados buscados para a página por meio das `propriedades (props)` antes da renderização. 

```jsx
function Blog({ posts }) {
  // Renderizar posts...
}

// Essa função é chamada em tempo de construção
export async function getStaticProps() {
  // Chama uma API externa e busca osd ados
  const res = await fetch('https://.../posts')
  const posts = await res.json()

  // Retorna { props: { posts } }
  // O componente de Blog vai receber `posts` como uma propriedade (props) em tempo de construção
  return {
    props: {
      posts,
    },
  }
}

export default Blog
```

Para saber mais sobre como `getStaticProps` funciona, acesse [Documentação de Busca de Dados](/docs/basic-features-data-fetching-get-static-props).

#### Cenário 2: Os **caminhos** da sua página dependem de dados externos

Next.js te permite criar páginas com **rotas dinâmicas**. Você pode, por exemplo, criar um arquivo chama `pages/posts/[id].js` para exibir um único post de blog baseado no `id`. Isso te permitirá exibir um post de blog com `id: 1` quando você acessar `posts/1`.

> Para aprender mais sobre roteamente dinâmico, acesse [Documentação de Roteamento Dinâmico](/docs/routing-dynamic-routes).

Entretanto, o `id` que você quer pré-renderizar em tempo de construção depende de dados externos.

**Exemplo**: suponha que você está apenas adicionando um post de blog (com `id: 1`) no banco de dados. Nesse caso você quer pré-renderizar o post `posts/1` em tempo de construção.

Depois você quer adicioanr um segundo posts com `id: 2`. Agora então você quer pré-renderizar o `posts/2` também.

Então os **caminhos** das suas páginas que serão pré-renderizados dependem de dados externos. Para resolver isso, o Next.js te permite `exportar` uma função chamada `getStaticPaths` em uma página dinâmica (`pages/posts/[id].js` nesse caso). Essa função é chamada em tempo de construção e te permite especificar quais caminhos você quer pré-renderizar.

```jsx
// Essa função é chamada em tempo de construção
export async function getStaticPaths() {
  // Cahamar uma API externa para buscar os dados
  const res = await fetch('https://.../posts')
  const posts = await res.json()

  // Pegar os caminhos que quero pré-renderizar baseado nos posts
  const paths = posts.map((post) => ({
    params: { id: post.id },
  }))

  // Vamos pré-renderizar apenas esses caminhos em tempo de construção
  // { fallback: false } significa que outras rotas irão para página 404
  return { paths, fallback: false }
}
```

Também em `pages/posts/[id].js`, você precisa exportar `getStaticProps` para buscar os dados do post com esse `id` e poder pré-renderizar a página:

```jsx
function Post({ post }) {
  // Renderizar post...
}

export async function getStaticPaths() {
  // ...
}

// Também precisa ser chamado em tempo de construção
export async function getStaticProps({ params }) {
  // parametros que contenham o post `id`
  // Se a rota for /posts/1, então params.id será 1
  const res = await fetch(`https://.../posts/${params.id}`)
  const post = await res.json()

  // Enviar os dados do post via propriedades (props)
  return { props: { post } }
}

export default Post
```

Para saber mais sobre como `getStaticPahts` funciona, acesse [Documentação de Busca de Dados](/docs/basic-features-data-fetching-get-static-paths).

### Quando devo usar Geração Estática?

Recomendamos usar **Geração Estática** (com e sem dados) sempre que possível, pois suas páginas podem ser geradas uma vez e então serem armazenadas por CDN, dessa forma carregando mais rápido do que renderizando no servidor a cada requisição.

You can use Static Generation for many types of pages, including:
Você pode usar Geração Estática para muitos tipos de páginas, incluíndo:

- Páginas de marketing
- Posts de blog e portifólios 
- Lista de produtos de e-commerce
- Documentação de ajuda

Você deve estar se perguntando: "Posso pré-renderizar essa página **antes** da requisição do usuário?" Se a resposta for sim, então você deve usar Geração Estática.

Por outro lado, Geração Estática **não** é uma boa ideia se você não pode pré-renderizar a página antes da requisição do usuário. Talvez sua página atualize dados frequentemente ou o conteúdo mude a cada requisição.

Em casos assim, você pode usar uma das seguintes opções:

- Utilize Geração Estática com **Busca de dados do lado-cliente:** Você pode pular a pré-renderização em algumas partes da página e então usar o Javascript do lado-cliente para preenchê-la. Para saber mais sobre essa abordagem, acesse [Documentação de Busca de Dados](/docs/basic-features-data-fetching-client-side).
- Utilize **Renderização no Servidor** do Next.js para pré-renderizar a página em cada requisição. Isso será mais lento porque não poderá usar cache de uma CDN, mas a pré-renderização da página estará sempre atualizada. Vamos falar sobre essa abordagem abaixo.

## Renderização no Servidor

> Também conhecido como "SSR" ou "Renderização Dinâmica"

Se a página utuliza **SSR**, a página HTML é gerada em cada requisição.

Para usar SSR em uma página, você precisará `exportar` uma função `assincrona` chamada `getServerSideProps`. Essa função será chamada pelo servidor em cada requisição. 

Por exemplo, digamos que sua página precisa ser pré-renderizada constantemente atualizando dados (buscados de uma API externa). Você pode escrever `getServerSideProps` que irá buscar os dados e passá-los para a `Página` dessa forma:

```jsx
function Page({ data }) {
  // Renderização de dados
}

// Função executada em cada resquisição 
export async function getServerSideProps() {
  // Busca de dados em uma API externa
  const res = await fetch(`https://.../data`)
  const data = await res.json()

  // Envio dos dados para página por meio das propriedades (props)
  return { props: { data } }
}

export default Page
```

Como você pode ver, `getServerSideProps` é similar a `getStaticProps`, a diferença é que `getServerSideProps` é executado em cada requisição em vez de no momento de construção da aplicação.

Para saber mais sobre como `getServerSideProps` funciona, acesse [Documentação de Busca de Dados](/docs/basic-features-data-fetching-get-server-side-props)

## Resumo

Vimos duas formas de prérenderização com Next.js

- **Geração Estática (Recomendado):** O HTML é gerado no **momento de construção** da aplicação e será reutilizado em cada requisição. Para usar Geração Estática em uma página, exporte a página ou exporte `getStaticProps` (e `getStaticPaths` se necessário). Isso é bom para páginas que podem ser pré-renderizadas antes da requisição do cliente. Você também pode usar com Renderização no lado-cliente para carregar dados adicionais.

- **Renderização no Servidor:** O HTML é gerado em **cada requisição**. Para usar SSR, exporte `getServerSideProps`. Como os resultados com SSR são menos performáticos que Geração Estática, use SSR apenas quando for realmente necessário.

## Saiba mais

Recomendamos que você leia os seguintes itens:

<div class="card">
  <a href="/docs/basic-features-data-fetching-overview">
    <b>Busca de Dados:</b>
    <small>Saiba mais sobre busca de dados com Next.js.</small>
  </a>
</div>

<div class="card">
  <a href="/docs/advanced-features-preview-mode">
    <b>Modo de visualização:</b>
    <small>Saiba mais sobre o modo de visualização com Next.js.</small>
  </a>
</div>

<div class="card">
  <a href="/docs/routing-introduction">
    <b>Roteamento:</b>
    <small>Saiba mais sobre roteamento com Next.js.</small>
  </a>
</div>

<div class="card">
  <a href="/docs/basic-features-typescript#pages">
    <b>TypeScript:</b>
    <small>Adicione TypeScript em suas páginas.</small>
  </a>
</div>

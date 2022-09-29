---
description: Fetch data on each request with `getServerSideProps`.
---

# getServerSideProps

Se você exportar uma função chamada `getServerSideProps` (SSR) em uma página, o Next.js irá pré-renderizar essa página em cada requisição usando os dados retornados pelo `getServerSideProps`.

```js
export async function getServerSideProps(context) {
  return {
    props: {}, // props será enviado para o componente da página como props
  }
}
```

> Observer que, independentemente do tipo de renderização, toda `props` será enviada para o componente da página e poderá ser vizualizada no HTML incicial do lado-cliente. Isso é para permitir que a página possa ser [hidratada](https://reactjs.org/docs/react-dom.html#hydrate) corretamente. Tenha certeza que você não está passando nenhuma informação sensível que não deve estar disponível ao usuário final.

## Quando getServerSideProps executa

`getServerSideProps` executa apenas no lado do servidor e nunca no navegador. Se uma página utiliza `getServerSideProps`, então:

- Quando você acessa uma página o `getServerSideProps` executa no momento da requisição, então essa página será pré-renderizada com o retorno das props.
- Quando você acessa uma página, as transações no servidor passam por [`next/link`](/docs/api-reference-next-link) ou [`next/router`](/docs/api-reference-next-router), Next.js envia uma requisição para a API do servidor, que então executa o `getServerSideProps`.

`getServerSideProps` returna um JSON que será usado para renderizar a página. Todo esse trabalho é automaticamente gerenciado pelo Next/js, então você não precisa fazer nada extra após configurar o `getServerSideProps`.

Você pode usar a [ferramenta next-eliminacao-codigo](https://next-code-elimination.vercel.app/) para verificar o que Next.js elimina no bundle do lado-cliente.

`getServerSideProps` pode ser exportado apenas em uma **página**. Você não pode usá-lo em outros arquivos.

Perceba que você precisa exportar o `getServerSideProps` como uma função saparada - `getServerSideProps` não funcionará como uma propriedade de um componente de página.

A [API de referencia do `getServerSideProps`](/docs/api-reference-data-fetching-get-server-side-props) cobre todos os parâmetros que podem ser usados com `getServerSideProps`.

## Quando devo usar getServerSideProps

Você deve usar `getServerSideProps` apenas se precisar renderizar uma página que precisa de dados externos no momento da requisição. Isso pode ser devido à natureza dos dados ou propriedades da requisição (assim como cabeçalhos de `autorização` ou geo localização). Páginas usando `getServerSideProps` serão renderizadas no servidor no momento da requisição e mantida em cache se [os cabeçalhos cache-control forem configurados](/docs/going-to-production#caching).

Se você não precisa renderizar dados durante a requisição, então você deve considerar buscar dados no [lado-cliente](#buscando-dados-no-lado-cliente) ou [`getStaticProps`](/docs/basic-features-data-fetching-get-static-props).

### getServerSideProps ou rodas de API

Pode ser tentador usar uma [rota de API](/docs/api-routes-introduction) quando você quer buscar dados do servidor, então chamando uma API com `getServerSideProps`. Essa é uma abordagem desnecessária e ineficiente, pois fará requisições extras devido `getServerSiteProps` e rotas de API estarem rodando juntas no servidor.

Veja o exemplo a seguir: Uma roda de API é usada para buscar alguns dados de um CMS. Essa rota é então chamada diretamente pelo `getServerSideProps`. Isso produz uma chamada adicional, reduzindo performance. Em vez disso, importe diretamente a lógica usada em sua roda API para dentro do `getServerSideProps`. Isso pode significar chamar um CMS, banco de dados, ou outra API diretamenta de dentro do `getServerSideProps`.

## Buscando dados no lado-cliente

Se sua página possui dados que atualizam frequentemente, então você não precisa pré-renderizar esses dados, você pode buscar os dados no [lado-cliente](/docs/basic-features-data-fetching-client-side). Um exemplo disso são dados específicos do usuário:

- Primeiro, carregue sua página imediatamente sem dados. Parte da página pode ser pré-renderizada usando Geração Estática. Você pode exibir 'carregando' onde ainda não há dados.

- Então, busque os dados no lado-cliente e os exiba quando estiverem prontos.

Essa abordagem trabalha bem páginas em paineis de controle, por exemplo. Como um painel de contole é privado, dados de usuário e SEO não são relevantes e as páginas não precisam ser pré-renderizadas. Os dados são atualizados cosntantemente, o que requer busca de dados no momento da requisição.

## Usando getServerSideProps para buscar dados no momento da requisição

O seguinte exemplo mostra como buscar dados no momento da requisição e então pré-renderizar o resultado.

```jsx
function Page({ data }) {
  // Renderização dos dados...
}

// Essa chamada será feita em cada requisição
export async function getServerSideProps() {
  // Buscando dados uma API externa
  const res = await fetch(`https://.../data`)
  const data = await res.json()

  // Enviando os dados para a página pelas props
  return { props: { data } }
}

export default Page
```

## Salvando em cache com Renderização no Servidor (SSR)

Você pode usar cabeçalhos de cache (`Cache-Control`) dentro do `getServerSideProps` para armazenar respostas dinâmicas em cache. Pro exemplo, usando [`stale-while-revalidate`](https://web.dev/stale-while-revalidate/).

```jsx
// Esses valores são considerados frecos com no máximo dez segundos (s-maxage=10).
// Se a requisição for repetida nos próximos 10 segundos, os valores
// armazenados em cache ainda serão considerados frescos. Se a requisição se repetir em 59 segundos
// os valores em cache serão considerados obsoletos, mas serão renderizados (stale-while-revalidate=59).
//
// Em paralelo uma requisiçao de revalidação será feita para atualizar o cache
// com os valores novos. Se você atualizar a página, então verá os novos dados.
export async function getServerSideProps({ req, res }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )

  return {
    props: {},
  }
}
```

Saiba mais sobre [cache](/docs/going-to-production).

## getServerSideProps renderiza uma página de erro

Se um erro for lançado dentro do `getServerSideProps`, o arquivo `pages/500.js` será exibido. Veja a documentação da [página 500](/docs/advanced-features-custom-error-page#500-page) para saber mais sobre criá-la. Durante o desenvolvimento, esse arquivo não será usado e a sobreposição dev será mostrada.

## Relacionados

Para mais informações sobre o que fazer em seguida, recomedamos o seguinte:

<div class="card">
  <a href="/docs/api-reference-data-fetching-get-server-side-props">
    <b>Referência da API getServerSideProps</b>
    <small>Leia sobre a Referência da API getServerSideProps</small>
  </a>
</div>

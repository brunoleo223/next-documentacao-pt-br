import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import routes from '../docs/manifest.json'
import Link from 'next/link';

function App({posts}) {
  return (
    // routes is an array of objects with title
    // if item has routes, it's a parent route
    // while children and children of childre has routes, create a nested list
    // return a list of links to the children
    <ul>
      {routes.routes.map((item) => {
        if (item.routes) {
          return (
            <li key={item.title}>
              {item.title}
              <ul>
                {item.routes.map((child) => {
                  if (child.routes) {
                    return (
                      <li key={child.title}>
                        {child.title}
                        <ul>
                          {child.routes.map((grandchild) => {
                            return (
                              <li key={grandchild.title}>
                                <a href={grandchild.path}>
                                  <a>{grandchild.title}</a>
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                      </li>
                    );
                  }
                  return (
                    <li key={child.title}>
                      <a href={child.path}>
                        <a>{child.title}</a>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        }
        return (
          <li key={item.title}>
            <a href={item.path}>
              <a>{item.title}</a>
            </a>
          </li>
        );
      }
      )}
    </ul>

  
  )
}
export default App

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('posts'));
  const posts = files.map(filename => {
    const slug = filename.replace('.md', '');
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename), 'utf-8');
      
    const {data: frontmatter} = matter(markdownWithMeta);
    return {
      slug,
      frontmatter
    }
  })

  return {
    props: {
      posts
    }
  }
}
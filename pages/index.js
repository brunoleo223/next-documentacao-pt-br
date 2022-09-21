import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Menu from '../components/Menu';

function App({posts}) {
  return (
    <>
      <Menu />
    </>
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
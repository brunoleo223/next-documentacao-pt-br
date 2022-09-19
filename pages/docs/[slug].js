import fs from 'fs';
import matter from 'gray-matter';
import { marked } from 'marked';
import path from 'path';

export default function PostPage({frontmatter, slug, content}) {
  return (
    <div>
        <div dangerouslySetInnerHTML={{__html: marked(content)}}></div>
    </div>
  )
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts'));

    console.log(files);

    const paths = files.map((filename) => ({
        params: {
            slug: filename.replace('.md', ''),
        }
    }))

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params: { slug } }){
    const markdownWithMeta = fs.readFileSync(path.join('posts', slug + '.md'), 'utf-8');
    const { data: frontmatter, content } = matter(markdownWithMeta);
    return {
        props: {
            frontmatter,
            slug, 
            content
        }
    }
}
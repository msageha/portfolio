import React from 'react';
import { graphql, Link, PageProps } from 'gatsby';

interface BlogPostData {
  mdx: {
    frontmatter: {
      title: string;
      date: string;
      tags: string[];
      description: string;
    };
    body: string;
  };
}

const BlogPost: React.FC<PageProps<BlogPostData>> = ({ data, children }) => {
  const { frontmatter } = data.mdx;

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <article className="container mx-auto px-4 py-16 max-w-4xl">
        <Link
          to="/blog"
          className="inline-block mb-8 text-blue-400 hover:text-blue-300"
        >
          ← ブログ一覧に戻る
        </Link>

        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{frontmatter.title}</h1>
          <div className="flex flex-wrap gap-4 items-center text-gray-400">
            <time>
              {new Date(frontmatter.date).toLocaleDateString('ja-JP', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            {frontmatter.tags && (
              <div className="flex gap-2">
                {frontmatter.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-800 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </header>

        <div className="prose prose-invert prose-lg max-w-none">
          <div className="mdx-content">{children}</div>
        </div>

        <footer className="mt-16 pt-8 border-t border-gray-800">
          <Link
            to="/blog"
            className="inline-block text-blue-400 hover:text-blue-300"
          >
            ← ブログ一覧に戻る
          </Link>
        </footer>
      </article>

      <style>{`
        .mdx-content h1 {
          font-size: 2.25rem;
          font-weight: 700;
          margin-top: 2rem;
          margin-bottom: 1rem;
          color: #fff;
        }

        .mdx-content h2 {
          font-size: 1.875rem;
          font-weight: 700;
          margin-top: 2rem;
          margin-bottom: 1rem;
          color: #fff;
        }

        .mdx-content h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
          color: #fff;
        }

        .mdx-content p {
          margin-bottom: 1rem;
          line-height: 1.75;
          color: #d1d5db;
        }

        .mdx-content ul,
        .mdx-content ol {
          margin-bottom: 1rem;
          padding-left: 2rem;
          color: #d1d5db;
        }

        .mdx-content li {
          margin-bottom: 0.5rem;
        }

        .mdx-content strong {
          font-weight: 700;
          color: #fff;
        }

        .mdx-content code {
          background-color: #1f2937;
          padding: 0.2rem 0.4rem;
          border-radius: 0.25rem;
          font-size: 0.875em;
          color: #60a5fa;
        }

        .mdx-content pre {
          background-color: #1f2937;
          padding: 1rem;
          border-radius: 0.5rem;
          overflow-x: auto;
          margin-bottom: 1rem;
        }

        .mdx-content pre code {
          background-color: transparent;
          padding: 0;
          color: #d1d5db;
        }

        .mdx-content a {
          color: #60a5fa;
          text-decoration: underline;
        }

        .mdx-content a:hover {
          color: #93c5fd;
        }

        .mdx-content blockquote {
          border-left: 4px solid #60a5fa;
          padding-left: 1rem;
          margin: 1rem 0;
          color: #9ca3af;
          font-style: italic;
        }
      `}</style>
    </div>
  );
};

export const query = graphql`
  query BlogPostQuery($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date
        tags
        description
      }
      body
    }
  }
`;

export default BlogPost;

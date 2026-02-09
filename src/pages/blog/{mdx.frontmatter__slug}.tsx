import React from "react";
import { graphql, Link, PageProps } from "gatsby";
import { Fade } from "react-awesome-reveal";
import { MDXProvider } from "@mdx-js/react";
import Footer from "../../components/Footer/Footer";
import Wave from "../../components/Wave/wave";
import Header from "../../components/Header/Header";
import { mdxComponents } from "../../components/BudouX/MDXComponents";

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
    <>
      <Header />
      <div className="min-h-screen bg-gray-900 text-white pb-24 pt-20">
        <article className="container mx-auto px-4 py-16 max-w-4xl">
          <Fade duration={1000} delay={300}>
            <Link
              to="/blog"
              className="inline-block mb-8 text-pink-400 hover:text-pink-300 transition-colors"
            >
              ← ブログ一覧に戻る
            </Link>
          </Fade>

          <Fade duration={1000} delay={500}>
            <header className="mb-12">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                {frontmatter.title}
              </h1>
              <div className="flex flex-wrap gap-4 items-center text-gray-400">
                <time>
                  {new Date(frontmatter.date).toLocaleDateString("ja-JP", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                {frontmatter.tags && (
                  <div className="flex gap-2 flex-wrap">
                    {frontmatter.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-800 rounded-full text-sm border border-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </header>
          </Fade>

          <Fade duration={1000} delay={700}>
            <div className="prose prose-invert prose-lg max-w-none">
              <MDXProvider components={mdxComponents}>
                <div className="mdx-content">{children}</div>
              </MDXProvider>
            </div>
          </Fade>

          <Fade duration={1000} delay={900}>
            <footer className="mt-16 pt-8 border-t border-gray-800">
              <Link
                to="/blog"
                className="inline-block text-pink-400 hover:text-pink-300 transition-colors"
              >
                ← ブログ一覧に戻る
              </Link>
            </footer>
          </Fade>
        </article>
      </div>
      <Wave bgColor="bg-gray-900" waveRGB="17,24,39" />
      <Footer />

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
    </>
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
        slug
      }
      body
    }
  }
`;

export function Head({ data }: PageProps<BlogPostData>) {
  const { frontmatter } = data.mdx;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: frontmatter.title,
    datePublished: frontmatter.date,
    author: {
      "@type": "Person",
      name: "Mizuki Sango",
    },
    description: frontmatter.description,
  };

  return (
    <>
      <title>{frontmatter.title} | Mizuki Sango Blog</title>
      <meta name="description" content={frontmatter.description} />
      <meta property="og:title" content={frontmatter.title} />
      <meta property="og:description" content={frontmatter.description} />
      <meta property="og:type" content="article" />
      <meta property="article:published_time" content={frontmatter.date} />
      <link rel="canonical" href={`https://msageha.net/blog/${frontmatter.slug}/`} />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </>
  );
}

export default BlogPost;

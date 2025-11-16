import React, { useState } from 'react';
import { graphql, Link, PageProps } from 'gatsby';
import { Fade } from 'react-awesome-reveal';
import Footer from '../components/Footer/Footer';
import Wave from '../components/Wave/wave';
import Header from '../components/Header/Header';

interface BlogPost {
  id: string;
  frontmatter: {
    title: string;
    date: string;
    slug: string;
    tags: string[];
    description: string;
  };
  excerpt: string;
}

interface BlogPageData {
  allMdx: {
    nodes: BlogPost[];
  };
}

const BlogPage: React.FC<PageProps<BlogPageData>> = ({ data }) => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allPosts = data.allMdx.nodes;

  const filteredPosts = selectedTag
    ? allPosts.filter((post) =>
        post.frontmatter.tags?.includes(selectedTag)
      )
    : allPosts;

  const allTags = Array.from(
    new Set(allPosts.flatMap((post) => post.frontmatter.tags || []))
  ).sort();

  return (
    <>
      <Header />
      <section className="bg-gray-900 min-h-screen pt-24 pb-24">
        <div className="container mx-auto px-4 py-16">
          <Fade duration={1000} delay={300}>
            <div className="text-center mb-16">
              <h1 className="text-white font-extrabold text-4xl md:text-6xl lg:text-7xl mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                  Blog
                </span>
              </h1>
              <p className="text-gray-400 text-lg md:text-xl">
                技術記事やプロジェクトの記録
              </p>
            </div>
          </Fade>

          <Fade duration={1000} delay={600}>
            <div className="mb-12">
              <div className="flex flex-wrap gap-2 justify-center">
                <button
                  onClick={() => setSelectedTag(null)}
                  className={`px-4 py-2 rounded-full text-sm transition-all ${
                    selectedTag === null
                      ? 'bg-gradient-to-r from-pink-500 to-violet-500 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  すべて
                </button>
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`px-4 py-2 rounded-full text-sm transition-all ${
                      selectedTag === tag
                        ? 'bg-gradient-to-r from-pink-500 to-violet-500 text-white'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </Fade>

          <div className="grid gap-6 max-w-4xl mx-auto">
            {filteredPosts.length === 0 ? (
              <Fade duration={1000}>
                <p className="text-gray-400 text-center py-8">
                  記事が見つかりませんでした。
                </p>
              </Fade>
            ) : (
              filteredPosts.map((post, index) => (
                <Fade key={post.id} duration={1000} delay={100 * index}>
                  <Link
                    to={`/blog/${post.frontmatter.slug}`}
                    className="block bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-all border border-gray-700 hover:border-pink-500 hover:shadow-lg hover:shadow-pink-500/20"
                  >
                    <div className="mb-3 flex flex-wrap items-center gap-4">
                      <time className="text-sm text-gray-400">
                        {new Date(post.frontmatter.date).toLocaleDateString(
                          'ja-JP',
                          {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          }
                        )}
                      </time>
                      <div className="flex gap-2 flex-wrap">
                        {post.frontmatter.tags?.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-gray-700 text-xs rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold mb-2 text-white">
                      {post.frontmatter.title}
                    </h2>
                    <p className="text-gray-300">
                      {post.frontmatter.description || post.excerpt}
                    </p>
                  </Link>
                </Fade>
              ))
            )}
          </div>
        </div>
      </section>
      <Wave bgColor="bg-gray-900" waveRGB="17,24,39" />
      <Footer />
    </>
  );
};

export const query = graphql`
  query BlogListQuery {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        id
        frontmatter {
          title
          date
          slug
          tags
          description
        }
        excerpt(pruneLength: 200)
      }
    }
  }
`;

export default BlogPage;

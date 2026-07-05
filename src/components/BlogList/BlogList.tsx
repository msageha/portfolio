import React, { useState, useCallback } from "react";
import { Fade } from "react-awesome-reveal";
import Footer from "../Footer/Footer";
import Wave from "../Wave/wave";
import Header from "../Header/Header";
import Search from "../Search";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

export interface BlogPostSummary {
  id: string;
  title: string;
  date: string;
  slug: string;
  tags: string[];
  description: string;
}

interface BlogListProps {
  posts: BlogPostSummary[];
}

const BlogList: React.FC<BlogListProps> = ({ posts }) => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [isSearchActive, setIsSearchActive] = useState(false);

  const handleQueryChange = useCallback((query: string) => {
    setIsSearchActive(query.trim().length > 0);
  }, []);

  const filteredPosts = selectedTag
    ? posts.filter((post) => post.tags.includes(selectedTag))
    : posts;

  const allTags = Array.from(new Set(posts.flatMap((post) => post.tags))).sort();

  return (
    <ErrorBoundary>
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
              <p className="text-gray-400 text-lg md:text-xl">技術記事やプロジェクトの記録</p>
            </div>
          </Fade>

          <Fade duration={1000} delay={450}>
            <div className="max-w-xl mx-auto mb-8">
              <Search onQueryChange={handleQueryChange} />
            </div>
          </Fade>

          {!isSearchActive && (
            <Fade duration={1000} delay={600}>
              <div className="mb-12">
                <div className="flex flex-wrap gap-2 justify-center">
                  <button
                    onClick={() => setSelectedTag(null)}
                    className={`px-4 py-2 rounded-full text-sm transition-all ${
                      selectedTag === null
                        ? "bg-gradient-to-r from-pink-500 to-violet-500 text-white"
                        : "bg-gray-800 text-gray-300 hover:bg-gray-700"
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
                          ? "bg-gradient-to-r from-pink-500 to-violet-500 text-white"
                          : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </Fade>
          )}

          {!isSearchActive && (
            <div className="grid gap-6 max-w-4xl mx-auto">
              {filteredPosts.length === 0 ? (
                <Fade duration={1000}>
                  <p className="text-gray-400 text-center py-8">記事が見つかりませんでした。</p>
                </Fade>
              ) : (
                filteredPosts.map((post, index) => (
                  <Fade key={post.id} duration={1000} delay={100 * index}>
                    <a
                      href={`/blog/${post.slug}`}
                      className="block bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-all border border-gray-700 hover:border-pink-500 hover:shadow-lg hover:shadow-pink-500/20"
                    >
                      <div className="mb-3 flex flex-wrap items-center gap-4">
                        <time className="text-sm text-gray-400">
                          {new Date(post.date).toLocaleDateString("ja-JP", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </time>
                        <div className="flex gap-2 flex-wrap">
                          {post.tags.map((tag) => (
                            <span key={tag} className="px-2 py-1 bg-gray-700 text-xs rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <h2 className="text-2xl font-bold mb-2 text-white">{post.title}</h2>
                      <p className="text-gray-300">{post.description}</p>
                    </a>
                  </Fade>
                ))
              )}
            </div>
          )}
        </div>
      </section>
      <Wave bgColor="bg-gray-900" waveRGB="17,24,39" />
      <Footer />
    </ErrorBoundary>
  );
};

export default BlogList;

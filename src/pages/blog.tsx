import React, { useState } from 'react';
import { graphql, Link, PageProps } from 'gatsby';
import { useFlexSearch } from 'react-use-flexsearch';

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
  localSearchBlog: {
    index: string;
    store: Record<string, any>;
  };
}

const BlogPage: React.FC<PageProps<BlogPageData>> = ({ data }) => {
  const [query, setQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allPosts = data.allMdx.nodes;
  const { index, store } = data.localSearchBlog;

  const searchResults = useFlexSearch(query, index, store);

  const displayPosts = query
    ? searchResults.map((result: any) => ({
        id: result.id,
        frontmatter: {
          title: result.title,
          date: result.date,
          slug: result.slug,
          tags: result.tags || [],
          description: result.description,
        },
        excerpt: result.excerpt,
      }))
    : allPosts;

  const filteredPosts = selectedTag
    ? displayPosts.filter((post) =>
        post.frontmatter.tags?.includes(selectedTag)
      )
    : displayPosts;

  const allTags = Array.from(
    new Set(allPosts.flatMap((post) => post.frontmatter.tags || []))
  ).sort();

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>

        <div className="mb-8">
          <input
            type="text"
            placeholder="記事を検索..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none"
          />
        </div>

        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-4 py-2 rounded-full text-sm ${
                selectedTag === null
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              すべて
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-full text-sm ${
                  selectedTag === tag
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6">
          {filteredPosts.length === 0 ? (
            <p className="text-gray-400 text-center py-8">
              記事が見つかりませんでした。
            </p>
          ) : (
            filteredPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.frontmatter.slug}`}
                className="block bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors border border-gray-700 hover:border-blue-500"
              >
                <div className="mb-2 flex items-center gap-4">
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
                  <div className="flex gap-2">
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
                <h2 className="text-2xl font-bold mb-2">
                  {post.frontmatter.title}
                </h2>
                <p className="text-gray-300">
                  {post.frontmatter.description || post.excerpt}
                </p>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
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
    localSearchBlog {
      index
      store
    }
  }
`;

export default BlogPage;

import Layout from "components/templates/Layout";
import BackButton from "components/UI/molecules/BackButton";
import Article from "components/UI/molecules/Article";
import { postsAllQuery } from "lib/queries";
import { sanityClient } from "lib/sanity.server";
import type { GetStaticProps, NextPage } from "next";
import type { Post } from "types";

const Blog: NextPage<{ posts: Post[] }> = ({ posts }) => {
  if (!posts) return <div />;

  return (
    <Layout title="Blog">
      <div className="max-w-7xl w-[90%] mx-auto py-8">
        <BackButton />
        <main className="max-w-2xl mx-auto mt-8 xl:mt-4">
          <h1 className="text-4xl underline underline-offset-8">Blog</h1>
          <div className="flex flex-col gap-8 mt-10">
            {posts.map((post) => (
              <Article
                key={post._id}
                author={post.author}
                title={post.title}
                excerpt={post.excerpt}
                slug={post.slug}
                publishedAt={post.publishedAt}
              />
            ))}
          </div>
        </main>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await sanityClient.fetch<Post[]>(postsAllQuery);
  return {
    props: {
      posts,
    },
  };
};

export default Blog;

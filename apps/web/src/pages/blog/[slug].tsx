import { PortableText } from "@portabletext/react";
import { formatDate } from "lib/formatDate";
import { postQuery, postSlugsQuery } from "lib/queries";
import { usePreviewSubscription } from "lib/sanity";
import { getClient, overlayDrafts, sanityClient } from "lib/sanity.server";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Router from "next/router";
import type { Post } from "types";
import BackButton from "components/UI/molecules/BackButton";

interface Props {
  preview: boolean;
  data?: Partial<{
    post: Post;
    morePosts: Post[];
  }>;
}

const Post: NextPage<Props> = ({ data, preview }) => {
  const slug = data?.post?.slug;

  const {
    data: { post, morePosts },
  } = usePreviewSubscription(postQuery, {
    params: { slug },
    initialData: data,
    enabled: preview && typeof slug !== "undefined",
  });

  if (!post) return <div />;

  return (
    <>
      <Head>
        <title>{`${post.title} | skyship`}</title>
        <meta name="og:title" content={post.title} />
        <meta name="og:description" content={post.excerpt} />
      </Head>
      <main className="w-[90%] md:w-[95%] mx-auto py-10">
        <BackButton />
        <div className="max-w-2xl mx-auto mt-5">
          <h1 className="text-4xl pb-4 border-b-[3px] border-solid border-b-zinc-500">
            {post?.title}
          </h1>
          <time dateTime={post?.publishedAt} className="text-[#4C566A] inline-block mt-6 mb-4">
            {formatDate(post?.publishedAt)}
          </time>
          <PortableText value={post.body} />
        </div>
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params, preview = false }) => {
  const { post, morePosts } = await getClient(preview).fetch(postQuery, {
    slug: params?.slug,
  });

  return {
    props: {
      preview,
      data: {
        post,
        morePosts: overlayDrafts(morePosts),
      },
    },
    // If webhooks isn't setup then attempt to re-generate in 1 minute intervals
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await sanityClient.fetch(postSlugsQuery);
  return {
    paths: paths.map((slug: string) => ({ params: { slug } })),
    fallback: false,
  };
};

export default Post;

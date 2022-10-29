import { ellipsis } from "lib/ellipsis";
import { urlForImage } from "lib/sanity";
import Image from "next/image";
import Link from "next/link";
import type { Author } from "types";
import clsx from "clsx";

interface Slim extends React.ComponentPropsWithoutRef<"a"> {
  title: string;
  excerpt: string;
  publishedAt: string;
  author: Author;
  slug: string;
  thumbnail: string;
}

interface Wide extends React.ComponentPropsWithoutRef<"a"> {
  title: string;
  excerpt: string;
  publishedAt: string;
  author: Author;
  slug: string;
}

const Article = ({
  title,
  excerpt,
  publishedAt,
  author,
  slug,
  className,
  ...props
}: Wide | Slim) => {
  if ("thumbnail" in props) {
    const { thumbnail, ...rest } = props;
    return (
      <Link href={`/blog/${slug}`} passHref>
        <a {...rest}>
          <article className={clsx("rounded-md p-3 shadow-3xl h-full", className)}>
            <Image
              src={urlForImage(thumbnail).auto("format").url()}
              width={400}
              height={400}
              alt={`${author.name} - ${title}`}
              className="rounded-md"
            />
            <div className="pt-2 pb-2">
              <h3 className="font-semibold text-xl">{ellipsis(title, 100)}</h3>
              <p className="mt-2">{ellipsis(excerpt, 150)}</p>
            </div>
          </article>
        </a>
      </Link>
    );
  }

  return (
    <Link href={`/blog/${slug}`} passHref>
      <a {...props}>
        <article
          className={clsx(
            "rounded-md p-3 border-2 border-solid border-primary-500 h-full",
            className
          )}
        >
          <h3 className="text-2xl">{ellipsis(title, 100)}</h3>
          <p className="mt-2">{ellipsis(excerpt, 250)}</p>
        </article>
      </a>
    </Link>
  );
};

export default Article;

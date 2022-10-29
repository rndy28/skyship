const postFields = `
  _id,
  title,
  body,
  categories,
  publishedAt,
  coverImage,
  "slug": slug.current,
  "author": author->{name, image},
`;

export const postQuery = `
{
  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) [0] {
    ${postFields}
  },
  "morePosts": *[_type == "post" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
    ${postFields}
  }
}`;

export const postsQuery = `*[_type == "post" && publishedAt < now()] | order(publishedAt desc) {
  excerpt,
  ${postFields}
}[0...3]`;

export const postsAllQuery = `*[_type == "post" && publishedAt < now()] | order(publishedAt desc) {
  excerpt,
  ${postFields}
}[0...100]`;

export const postSlugsQuery = `
*[_type == "post" && defined(slug.current)][].slug.current
`;

export const queryKey = {
  scheme: () => ["scheme"],
  posts: () => [""],
  tags: () => ["tags"],
  categories: () => ["categories"],
  post: (slug: string) => ["post", slug],
}

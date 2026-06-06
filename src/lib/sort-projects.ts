/** Featured first, then newest pubDate (matches /projects). */
export function sortProjects<T extends { data: { featured?: boolean; pubDate: Date } }>(projects: T[]): T[] {
  return [...projects].sort((a, b) => {
    const featured = Number(b.data.featured) - Number(a.data.featured);
    if (featured !== 0) return featured;
    return b.data.pubDate.valueOf() - a.data.pubDate.valueOf();
  });
}

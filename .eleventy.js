module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/admin");

  const byDateDesc = (a, b) => b.date - a.date;

  eleventyConfig.addCollection("postsDesc", (api) =>
    api
      .getFilteredByGlob([
        "src/thoughts/*.md",
        "src/deep-dives/*.md",
        "src/recipes/*.md",
        "src/movement/*.md",
      ])
      .sort(byDateDesc)
  );
  eleventyConfig.addCollection("recipes", (api) =>
    api.getFilteredByGlob("src/recipes/*.md").sort(byDateDesc)
  );
  eleventyConfig.addCollection("movementEntries", (api) =>
    api.getFilteredByGlob("src/movement/*.md").sort(byDateDesc)
  );
  eleventyConfig.addCollection("thoughts", (api) =>
    api.getFilteredByGlob("src/thoughts/*.md").sort(byDateDesc)
  );
  eleventyConfig.addCollection("deepDives", (api) =>
    api.getFilteredByGlob("src/deep-dives/*.md").sort(byDateDesc)
  );
  eleventyConfig.addCollection("favorites", (api) =>
    api.getFilteredByGlob("src/favorites/*.md").sort(byDateDesc)
  );

  eleventyConfig.addFilter("readableDate", (date) =>
    new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    })
  );

  eleventyConfig.addFilter("readingTime", (content) => {
    const words = String(content).replace(/<[^>]*>/g, " ").split(/\s+/).filter(Boolean).length;
    return `${Math.max(1, Math.round(words / 200))} min read`;
  });

  eleventyConfig.addFilter("byArea", (posts, name) =>
    (posts || []).filter((p) => p.data.area === name)
  );
  eleventyConfig.addFilter("byKind", (posts, name) =>
    (posts || []).filter((p) => p.data.kind === name)
  );

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site",
    },
  };
};

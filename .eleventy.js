export default function(eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("public");

  // Copy Google Search Console verification file to root
  eleventyConfig.addPassthroughCopy({"src/google7c8394d1539e7742.html": "google7c8394d1539e7742.html"});

  // Copy htmx and Alpine.js from node_modules
  eleventyConfig.addPassthroughCopy({
    "node_modules/htmx.org/dist/htmx.min.js": "js/htmx.min.js"
  });
  eleventyConfig.addPassthroughCopy({
    "node_modules/alpinejs/dist/cdn.min.js": "js/alpine.min.js"
  });

  // Add active page filter for navigation
  eleventyConfig.addFilter("startsWith", function(str, prefix) {
    if (!str || !prefix) return false;
    return str.startsWith(prefix);
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
}

const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {

  // Add date filter for Nunjucks
  eleventyConfig.addFilter("postDate", (dateObj, format = "MMMM d, yyyy") => {
    return DateTime.fromJSDate(dateObj).toFormat(format);
  });
  // Copy your existing static site files through to _site
  eleventyConfig.addPassthroughCopy("index.html");
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("scripts");
  eleventyConfig.addPassthroughCopy("pages"); // if other static pages exist

  return {
    dir: {
      input: "log-src",   // ONLY Eleventy content lives here
      output: "_site"
    }
  };
};

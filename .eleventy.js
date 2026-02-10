const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {

  // Add date filter for Nunjucks
const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter("postDate", (dateObj, format = "MMMM d, yyyy") => {
    return DateTime
      .fromJSDate(dateObj, { zone: "utc" }) // treat input as UTC
      .toLocal()                            // converts to local time
      .toFormat(format);
  });
};

  // Copy existing static site files through to log
  eleventyConfig.addPassthroughCopy("index.html");
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("scripts");
  eleventyConfig.addPassthroughCopy("pages"); // if other static pages exist

  return {
    dir: {
      input: "log-src",   // ONLY Eleventy content lives here
      output: "log"
    }
  };
};

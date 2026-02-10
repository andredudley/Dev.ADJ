//sorts by time (in theory). If dates mess up, I have fallback in the md files for logs.
const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {

  // Simple date display filter (fixes "day before" in most US timezones)
  eleventyConfig.addFilter("postDate", (dateObj, format = "MMMM d, yyyy") => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" })
      .toLocal()
      .toFormat(format);
  });
  // Copy existing static site files through to log
  eleventyConfig.addPassthroughCopy("index.html");
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("scripts");
  eleventyConfig.addPassthroughCopy("pages"); // if other static pages exist

  return {
    dir: {
      input: "log-src",
      includes: "_includes",
      output: "log"
    }
  };
};
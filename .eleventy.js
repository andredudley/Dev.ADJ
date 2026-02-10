const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {

  // Views date (YYY-MM-DD) as local time instead of UTC 
  eleventyConfig.addGlobalData("eleventyComputed", {
    date: data => {
      if (typeof data.date === "string" && /^\d{4}-\d{2}-\d{2}$/.test(data.date)) {
        return DateTime.fromISO(data.date, { zone: "local" }).toJSDate();
      }
      return data.date;
    }
  });

  // Add date filter for Nunjucks
  eleventyConfig.addFilter("postDate", (dateObj, format = "MMMM d, yyyy") => {
    return DateTime.fromJSDate(dateObj).toFormat(format);
  });
  // Copy your existing static site files through to log
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

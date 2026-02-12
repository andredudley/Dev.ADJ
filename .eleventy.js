//sorts by time (in theory). If dates mess up, I have fallback in the md files for logs.
const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {

  //simple date display filter (fixes "day before" in most US timezones)
  eleventyConfig.addFilter("postDate", (dateObj, format = "MMMM d, yyyy") => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" })
      .toLocal()
      .toFormat(format);
  });
  


  return {
    dir: {
      input: "log-src",
      includes: "_includes",
      output: "log"
    }
  };
};
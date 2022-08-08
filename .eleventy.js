const sass = require("eleventy-plugin-dart-sass");
module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(sass, {
        domainName: ".",
        sassIndexFile: "page.scss",
        sassLocation: __dirname + "/",
        outDir: "_site"
    });
};
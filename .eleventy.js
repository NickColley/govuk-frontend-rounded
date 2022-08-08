const sass = require("eleventy-plugin-dart-sass");
module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(sass, {
        domainName: __dirname + "/_site/",
        sassIndexFile: "page.scss",
        sassLocation: __dirname + "/",
        outDir: "_site"
    });
};
const withCSS = require("@zeit/next-css");
// const images = require("remark-images");
// const emoji = require("remark-emoji");

const withMDX = require("@zeit/next-mdx")({
  options: {
    //mdPlugins: [images, emoji],
    type: "yaml"
  }
});

const getMarkdownPagesMap = require("./src/getMarkdownPagesMap");

module.exports = withMDX(
  withCSS({
    exportPathMap: async defaultPathMap => {
      const markdownMap = await getMarkdownPagesMap();
      return {
        "/": { page: "/" },
        ...defaultPathMap,
        ...markdownMap
      };
    },
    pageExtensions: ["js", "md", "mdx"],
    assetPrefix: ""
  })
);

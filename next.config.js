const withCSS = require("@zeit/next-css");

const remark = {
  images: require("remark-images"),
  toc: require("remark-toc"),
  frontmatter: require("remark-frontmatter"),
  emoji: require("remark-emoji"),
  slug: require("remark-slug"),
  autolinkHeadings: require("remark-autolink-headings")
};

const withMDX = require("@zeit/next-mdx")({
  extension: /\.mdx?$/,
  options: {
    mdPlugins: [
      remark.toc,
      remark.frontmatter,
      remark.emoji,
      remark.autolinkHeadings,
      remark.slug
    ],
    heading: "Sommaire",
    type: "yaml",
    marker: "-"
  }
});

module.exports = withMDX(
  withCSS({
    pageExtensions: ["js", "md", "mdx"]
  })
);

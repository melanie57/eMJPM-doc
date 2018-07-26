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
    /// heading: "Sommaire",
    mdPlugins: [
      [remark.toc, { heading: "Sommaire" }],
      [
        remark.frontmatter,
        {
          type: "yaml",
          marker: "-"
        }
      ],
      //remark.images,
      remark.emoji,
      remark.autolinkHeadings,
      remark.slug
    ]
    /*
     type: "yaml",
     marker: "-"
    */
  }
});

module.exports = withMDX(
  withCSS({
    pageExtensions: ["js", "md", "mdx"]
    //assetPrefix: ""
  })
);

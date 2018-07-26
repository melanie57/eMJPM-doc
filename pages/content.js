import Link from "next/link";
import Head from "next/head";
import remark from "remark";
import reactRenderer from "remark-react";
import frontmatter from "remark-frontmatter";
import toc from "remark-toc";
//import html from "remark-html";
import frontMatter from "front-matter";

const parseMd = md =>
  remark()
    .use(frontmatter, [{ type: "yaml", marker: "-" }])
    .use(toc, {
      heading: "Sommaire"
    })
    .use(reactRenderer)
    .processSync(md);

export default class ContentPage extends React.Component {
  static async getInitialProps(props) {
    return {
      ...props.query,
      parsedMarkdown: parseMd(props.query.markdown),
      frontMatter: frontMatter(props.query.markdown).attributes
    };
  }
  render() {
    console.log(this.props);
    const { parsedMarkdown, frontMatter: { title } } = this.props;
    console.log("parsedMarkdown", parsedMarkdown);
    return (
      <div>
        <Head>
          <title>{title}</title>
        </Head>
        <h1>{title.toUpperCase()}</h1>
        {parsedMarkdown.contents}
      </div>
    );
  }
}

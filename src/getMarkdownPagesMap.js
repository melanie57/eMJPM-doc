const fs = require("fs");
const { promisify } = require("util");

const isMarkdownFile = path => !!/.*\.md$/i.exec(path);
const baseName = path => path.replace(/(?:^.*\/)?(.*?)\.md$/, "$1");

const getFileMapping = async path => {
  const markdown = await readFile(path);
  console.log("path", path, baseName(path));
  return {
    [`/${baseName(path)}`]: {
      page: "/content",
      query: {
        path,
        markdown
      }
    }
  };
};
const readFile = path =>
  promisify(fs.readFile)(path).then(buf => buf.toString());

const listDirFiles = path => promisify(fs.readdir)(path);

const getMarkdownPagesMap = async () => {
  const markdownFiles = (await listDirFiles("./content")).filter(
    isMarkdownFile
  );
  const mappings = await markdownFiles.reduce(async (mappings, path) => {
    const fileMapping = await getFileMapping(`./content/${path}`);
    return {
      ...(await mappings),
      ...fileMapping
    };
  }, {});
  return mappings;
};

module.exports = getMarkdownPagesMap;

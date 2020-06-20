/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const fetch = require('node-fetch');
const cheerio = require('cheerio');

exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest,
}) => {
  // get data from GitHub API at build time
  // const result = await fetch('https://api.github.com/repos/gatsbyjs/gatsby');
  // const resultData = await result.json();

  const result = await fetch('https://api.codetabs.com/v1/proxy?quest=dev.w3.org/html5/html-author/charref');
  const resultData = await result.text().then((text) => {
    const $ = cheerio.load(text);
    const tempArray = [];

    $('tr').each((index, element) => {
      tempArray.push({
        ...element.attribs,
        info: element.children.map((data) => ({
          class: data.attribs.class,
          text: $(data).text().replace('\t', '\\t').replace('\n', '\\n'),
        })),
        // ...Object.assign({}, ...element.children.map((data) => ({
        //   [data.attribs.class]: $(data).text(),
        // }))),
      });
    });

    return tempArray;
  });

  // create node for build time data example in the docs
  createNode({
    entities: resultData,
    // required fields
    id: 'html-entities-data',
    parent: null,
    children: [],
    internal: {
      type: 'entity',
      contentDigest: createContentDigest(resultData),
    },
  });
};

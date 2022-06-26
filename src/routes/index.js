import { load } from 'cheerio';

const replaceText = (string) => string.replace('\t', '\\t').replace('\n', '\\n');

export async function get() {
  const request = await fetch('https://api.codetabs.com/v1/proxy?quest=dev.w3.org/html5/html-author/charref');
  const result = await request.text();

  const $ = load(result);
  const entities = [];

  $('tr').each((index, element) => {
    entities.push({
      ...element.attribs,
      info: element.children.map((data) => ({
        class: data.attribs.class,
        text: replaceText($(data).text().trim()),
      })),
    });
  });

  // console.log(entities);

  return {
    body: {
      entities,
    },
  };
}

import { createClient } from 'contentful';

const client = createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: process.env.SPACE_ID,
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: process.env.ACCESS_TOKEN,
});

(async () => {
  try {
    const entries = await client.getEntries({
      content_type: 'image',
      'fields.location[within]': '29.650341,-82.344685,.1',
    });
    console.log(entries.items);
  }
  catch (err) {
    console.error(err.response.data);
  }
})();

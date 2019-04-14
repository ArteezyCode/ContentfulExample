import { createClient } from 'contentful';

export default class ContentfulClient {
  getClient = async () => {
    const client = await createClient({
      space: process.env.CONTENTFUL_SPACE,
      accessToken: process.env.CONTENTFUL_TOKEN,
    });
    return client;
  };

  getEntry = async id => {
    const client = await this.getClient();
    const entry = await client.getEntry(id, { include: 10 });
    return entry;
  };
}

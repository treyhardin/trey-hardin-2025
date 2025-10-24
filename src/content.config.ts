// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';
import { sanityClient } from 'sanity:client';


// 3. Define your collection(s)
const settings = defineCollection({
  loader: async () => {

    const content = await sanityClient.fetch(`*[ _type == 'settings'][0]`)
    return [{
      id: 'site-settings',
      ...content,
    }];
  }
});

export const collections = { settings };
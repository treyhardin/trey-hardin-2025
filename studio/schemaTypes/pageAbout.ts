import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pageAbout',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'TEST',
      // author: 'author.name',
      // media: 'mainImage',
    },
    prepare(selection) {
      return {title: "About Page"}
    },
  },
})

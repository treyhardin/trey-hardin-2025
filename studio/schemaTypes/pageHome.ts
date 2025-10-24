import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pageHome',
  title: 'Home',
  type: 'document',
  fields: [
    defineField({
      name: 'heroImage',
      title: 'Hero image',
      type: 'sanityImage',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, title: "Home Page"}
    },
  },
})

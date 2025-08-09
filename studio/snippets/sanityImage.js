import { defineField, defineType } from "sanity"


export default defineType({
  name: 'sanityImage',
  title: 'Image',
  type: 'image',
  fields: [
    defineField({
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
      validation: Rule => Rule.required()
    }),
  ],
  options: {
    hotspot: true,
  },
  preview: {
    select: {
      title: 'alt',
      media: 'image',
    },
  },
})

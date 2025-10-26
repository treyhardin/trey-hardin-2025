import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pageHome',
  title: 'Home',
  type: 'document',
  fields: [
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
    }),
    defineField({
      name: 'button',
      title: 'Button',
      type: 'button',
    }),
    defineField({
      name: 'projects',
      title: 'Projects',
      type: 'array',
      of: [{type: 'reference', to: {type: 'project'}}],
      validation: Rule => Rule.required().max(3),
    }),
  ],
})

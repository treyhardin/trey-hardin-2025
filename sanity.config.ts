import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import { schemaTypes } from './studio/schemaTypes'
import { studioStructure } from './studio/structure'

export default defineConfig({
  name: 'portfolio-2025',
  title: 'Portfolio 2025',
  projectId: '4wsnsase',
  dataset: 'production',
  plugins: [structureTool({
    structure: studioStructure
  })],
  schema: {
    types: schemaTypes
  },
})
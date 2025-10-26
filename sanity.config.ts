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
  mediaLibrary: {
    enabled: true,
  },
  form: {
    // Disable the default for image assets
    image: {
      assetSources: (sources) => sources.filter((source) => source.name !== 'sanity-default')
    },
    // Disable the default for file assets
    file: {
      assetSources: (sources) => sources.filter((source) => source.name !== 'sanity-default')
    }
  },
  schema: {
    types: schemaTypes
  },
})
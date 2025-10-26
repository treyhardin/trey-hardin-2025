// ./deskStructure.js
import { CaseIcon, CogIcon, EnvelopeIcon, HomeIcon, UserIcon, TagsIcon } from '@sanity/icons'

export const studioStructure = (S) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('project')
        .title('Projects')
        .icon(CaseIcon),
      S.documentTypeListItem('projectTag')
        .title('Project Tags')
        .icon(TagsIcon),
      S.listItem().title('Home')
        .child(
          S.document()
            .schemaType("pageHome")
            .documentId("pageHome")
            .title("Home")
        )
        .icon(HomeIcon),
      S.listItem().title('About')
        .child(
          S.document()
            .schemaType("pageAbout")
            .documentId("pageAbout")
            .title("About")
        )
        .icon(UserIcon),
      S.listItem().title('Contact')
        .child(
          S.document()
            .schemaType("pageContact")
            .documentId("pageContact")
            .title("Contact")
        )
        .icon(EnvelopeIcon),
      S.listItem().title('Site Settings')
        .child(
          S.document()
            .schemaType("settings")
            .documentId("settings")
            .title("Site Settings")
        )
        .icon(CogIcon)
    ])
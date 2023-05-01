export default {
  name: 'info',
  title: 'Info',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'heroImage',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'introDescription',
      title: 'IntroDescription',
      type: 'string',
    },
    {
      name: 'aboutInformation',
      title: 'AboutInformation',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'socials',
      title: 'Socials',
      type: 'array',
      of: [{type: 'reference', to: {type: 'social'}}],
    },
    {
      name: 'skillsOrder',
      title: 'SkillsOrder',
      type: 'array',
      of: [{type: 'reference', to: {type: 'skill'}}],
    },
  ],
}

export default {
  name: 'social',
  title: 'Social',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'social media platform',
      type: 'string',
    },
    {
      name: 'url',
      title: 'Url',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
        }),
      options: {
        hotspot: true,
      },
    },
  ],
}

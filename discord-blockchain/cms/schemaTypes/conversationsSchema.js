import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'conversations',
  title: 'Conversations',
  type: 'document',
  fields: [
    defineField({
      name: 'roomName',
      type: 'string',
      title: 'Room Name',
    }),
    defineField({
      name: 'roomId',
      type: 'string',
      title: 'Room Id',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
    }),
    defineField({
      name: 'isDm',
      type: 'boolean',
      title: 'Is DM?',
    }),
    defineField({
      name: 'userReference',
      type: 'reference',
      to: [{type: 'users'}],
    }),
  ],
})

export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e5e7431a437e2e9b71ab294',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-ka6sezqf',
                  apiId: 'bea6435c-32ac-483b-9cc9-2362b101e665'
                },
                {
                  buildHookId: '5e5e743105bcccecf50f2d90',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-fsj5jenm',
                  apiId: 'b72e3627-18f9-424f-93ea-0cc5338a92cf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mpinter/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-fsj5jenm.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}

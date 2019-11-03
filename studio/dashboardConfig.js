export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5dbef677c79beb1a4dd1f130',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-4etbsm9e',
                  apiId: '552e2481-a264-4ca2-a1b7-2815db998067'
                },
                {
                  buildHookId: '5dbef677234e6763fdb4a47a',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-3m5tj72g',
                  apiId: 'b4fe42a8-f56b-44c1-8941-6640db7d1ba7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/djc74/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-3m5tj72g.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'GraphCMS',
        fieldName: 'gcms',
        url:
          'https://api-uswest.graphcms.com/v1/cjsevk67403s101cktotf9fbh/master'
      }
    }
  ]
};

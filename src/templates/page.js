import React from 'react';
import { graphql, Link } from 'gatsby';

export const query = graphql`
  query($id: ID!, $locale: GraphCMS_Locale!) {
    gcms {
      page(where: { id: $id }) {
        title(locale: $locale)
        content(locale: $locale) {
          html
        }
      }
    }
  }
`;

export default ({ data }) => (
  <div style={{ maxWidth: 600, margin: '5rem auto', width: '90%' }}>
    <h1>{data.gcms.page.title}</h1>
    <div dangerouslySetInnerHTML={{ __html: data.gcms.page.content.html }} />
    <Link to="/">Back to all pages</Link>
  </div>
);

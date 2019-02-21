exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const result = await graphql(`
    {
      gcms {
        es: pages {
          id
          slug(locale: ES)
        }
        en: pages {
          id
          slug(locale: EN)
        }
        de: pages {
          id
          slug(locale: DE)
        }
      }
    }
  `);

  // TODO error handling
  const locales = result.data.gcms;

  Object.entries(locales).forEach(([locale, pages]) => {
    const urlBase = locale === 'en' ? '/' : `/${locale}/`;

    pages.forEach(page => {
      createPage({
        path: `${urlBase}${page.slug}/`,
        component: require.resolve('./src/templates/page.js'),
        context: {
          id: page.id,
          locale: locale.toUpperCase()
        }
      });
    });
  });
};

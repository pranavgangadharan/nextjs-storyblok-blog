async function fetchAPI(query, { variables, preview } = {}) {
  const res = await fetch("https://gapi.storyblok.com/v1/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Token: "GSgDPPR2m3gzyDcup1NHlgtt",
      Version: preview ? "draft" : "published",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }

  return json.data;
}

export async function getHomeContent() {
  const data = await fetchAPI(`
    {
        HomeItems {
          items {
            content {
              Title
              subtitle
              blogNav
            }
          }
        }
      }
    `);
  return data?.HomeItems?.items;
}

export async function getBlogList() {
  const data = await fetchAPI(`
    {
      BlogItems {
        items {
          full_slug
          slug
          content {
            Title
          }
        }
      }
    }
    `);
  return data?.BlogItems?.items;
}

// export async function getAllBlogSlugs() {
//   const data = await fetchAPI(`
//   {
//     BlogItems {
//       items {
//         slug
//       }
//     }
//   }
//     `);
//   return data?.BlogItems?.items.map((item) => `/blogs/${item.slug}`);
// }

export async function getBlogBySlug(slug) {
  const blog = await fetchAPI(
    `
      query BlogBySlug($slug: ID!) {
        BlogItem(id: $slug) {
          content {
            Content
            Image {
              filename
            }
            Title
          }
        }
      }
    `,
    {
      preview: true,
      variables: {
        slug: `blogs/${slug}`,
      },
    }
  );
  return blog?.BlogItem?.content;
}

export async function getHeaderContent() {
  const data = await fetchAPI(`
  {
    HeaderItems {
      items {
        content {
          Navs
        }
      }
    }
  }
    `);
  return data?.HeaderItems?.items;
}

export async function getFooterContent() {
  const data = await fetchAPI(`
  {
    FooterItems {
      items {
        content {
          Label
        }
      }
    }
  }
    `);
  return data?.FooterItems?.items;
}

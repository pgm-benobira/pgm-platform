import { gql } from '@apollo/client';

// To get all the data for a page (title, description (seo), tagline / page title, impressions / pictures, page contents, and quote)
const GET_PAGE_DATA = gql`
query GET_PAGE_DATA($slug: String = "") {
  page(where: {slug: $slug}) {
    title
    pageDescription
    tagline {
      text
    }
    impressions {
      fileName
      url
    }
    pageContents {
      slug
      htmlContent {
        text
      }
    }
    quote {
      name
      role
      testimonial
    }
  }
}
`;

// To get all the services for the services page
const GET_ALL_SERVICES = gql`
query GET_ALL_SERVICES {
  services {
    title
    description
  }
}
`;

export { GET_PAGE_DATA, GET_ALL_SERVICES };
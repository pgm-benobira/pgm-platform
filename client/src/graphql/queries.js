import { gql } from '@apollo/client';

const GET_PAGE_DATA = gql`
query GET_PAGE_DATA($slug: String = "") {
  page(where: {slug: $slug}) {
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
  }
}
`;

export { GET_PAGE_DATA };
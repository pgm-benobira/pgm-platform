import { gql } from '@apollo/client';

const GET_PAGE_DATA = gql`
query GET_PAGE_DATA {
    page(where: {slug: "home"}) {
      tagline {
        text
      }
      impressions {
        fileName
        url
      }
    }
  }
`;

export { GET_PAGE_DATA };
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

// To get all the team members for the team page
const GET_ALL_TEAM_MEMBERS = gql`
query GET_ALL_TEAM_MEMBERS {
  teamMembers {
    name
    link
    description
    image {
      url
      fileName
    }
    functions {
      ... on Function {
        title
      }
    }
  }
}
`;

// To get all the blog posts for the blog page
const GET_ALL_BLOG_POSTS = gql`
query GET_ALL_BLOG_POSTS {
  blogPosts {
    title
    date
    slug
    page {
      slug
    }
    blogTags {
      id
      title
    }
    image {
      fileName
      url
    }
  }
}
`;

// To get all the projects for the projects page
const GET_ALL_PROJECTS = gql`
query GET_ALL_PROJECTS {
  projects {
    title
    slug
    page {
      slug
    }
    programTracks {
      id
      title
    }
    images(first: 1) {
      fileName
      url
    }
  }
}
`;

export { GET_PAGE_DATA, GET_ALL_SERVICES, GET_ALL_TEAM_MEMBERS, GET_ALL_BLOG_POSTS, GET_ALL_PROJECTS };
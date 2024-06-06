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

// To get a blog post by its slug
const GET_BLOG_POST_BY_SLUG = gql`
query GET_BLOG_POST_BY_SLUG($slug: String = "") {
  blogPost(where: {slug: $slug}) {
    title
    date
    slug
    teamMember {
      name
    }
    blogTags {
      title
    }
    image {
      fileName
      url
    }
    content {
      html
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
    image {
      fileName
      url
    }
  }
}
`;

// To get a project by its slug
const GET_PROJECT_BY_SLUG = gql`
query GET_PROJECT_BY_SLUG($slug: String = "") {
  project(where: {slug: $slug}) {
    title
    slug
    description
    course {
      title
    }
    programTracks {
      title
    }
    image {
      fileName
      url
    }
  }
}
`;

export { GET_PAGE_DATA, GET_ALL_SERVICES, GET_ALL_TEAM_MEMBERS, GET_ALL_BLOG_POSTS, GET_BLOG_POST_BY_SLUG, GET_ALL_PROJECTS, GET_PROJECT_BY_SLUG };
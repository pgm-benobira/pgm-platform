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

// To get the first two blog posts for the home page
const GET_FIRST_TWO_BLOG_POSTS = gql`
query GET_FIRST_TWO_BLOG_POSTS {
  blogPosts(first: 2) {
    title
    date
    slug
    page {
      slug
    }
    blogTags {
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

// To get the first two projects for the home page
const GET_FIRST_TWO_PROJECTS = gql`
query GET_FIRST_TWO_PROJECTS {
  projects(first: 2) {
    title
    slug
    page {
      slug
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

// Search content query
const GET_SEARCH_ITEMS = gql`
  query GET_SEARCH_ITEMS($query: String = "") {
    services(where: { 
      OR: [
        { title_contains: $query }, 
        { description_contains: $query }
      ]
    }) {
      title
      description
    }
    projects(where: { title_contains: $query }) {
      title
      slug
      page {
        slug
      }
      programTracks {
        title
      }
      image {
        fileName
        url
      }
    }
    blogPosts(where: { title_contains: $query }) {
      title
      date
      slug
      page {
        slug
      }
      blogTags {
        title
      }
      image {
        fileName
        url
      }
    }
    teamMembers(where: { 
      OR: [
        { name_contains: $query }, 
        { description_contains: $query }
      ]
    }) {
      name
      description
      image {
        url
        fileName
      }
    }
  }
`;

// To get all the CAD courses for the program page
const GET_ALL_CAD_COURSES = gql`
query GET_ALL_CAD_COURSES {
  courses(first: 23, where: {majors_some: {title_contains: "Cloud Application Development"}}, orderBy: sortOrder_ASC) {
    title
    studypoints
    programTrack {
      abbreviation
    }
    semester {
      title
    }
    year {
      title
    }
  }
}
`;

// To get all the IFD courses for the program page
const GET_ALL_IFD_COURSES = gql`
query GET_ALL_IFD_COURSES {
  courses(first: 23, where: {majors_some: {title_contains: "Interactive Front-end Development"}}, orderBy: sortOrder_ASC) {
    title
    studypoints
    programTrack {
      abbreviation
    }
    semester {
      title
    }
    year {
      title
    }
  }
}
`;

export { GET_PAGE_DATA, GET_ALL_SERVICES, GET_ALL_TEAM_MEMBERS, GET_ALL_BLOG_POSTS, GET_BLOG_POST_BY_SLUG, GET_FIRST_TWO_BLOG_POSTS, GET_ALL_PROJECTS, GET_PROJECT_BY_SLUG, GET_FIRST_TWO_PROJECTS, GET_SEARCH_ITEMS, GET_ALL_CAD_COURSES, GET_ALL_IFD_COURSES };

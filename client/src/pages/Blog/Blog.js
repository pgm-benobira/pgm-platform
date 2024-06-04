import React from 'react'
// html-react-parser
import parse from 'html-react-parser'
// graphql
import { useQuery } from '@apollo/client';
import { GET_PAGE_DATA, GET_ALL_BLOG_POSTS } from '../../graphql/queries';
// styles
import './Blog.css';
// pages
import Error from '../Error';
// helmet
import { Helmet } from 'react-helmet';
// components
import Loading from '../../components/Elements/Loading';
import Tag from '../../components/Basics/Tag';
import Bubble from '../../components/Basics/Bubble';

export default function Blog() {
  const slug = 'blog';

  // --------- QUERY FOR THE PAGE DATA --------- //

  const { loading, error, data } = useQuery(GET_PAGE_DATA, {
    variables: { slug },
  });
  const { loading: blogPostsLoading, error: blogPostsError, data: blogPostsData } = useQuery(GET_ALL_BLOG_POSTS);
  if (loading || blogPostsLoading) return <Loading />;
  if (error || blogPostsError) return <Error code='502' text='Invalid response.'/>;

  // --------- PAGE DATA --------- //

  const tagline = parse(data.page.tagline.text);

  // --------- RENDER --------- //

  return (
    <div className='container'>
      {/* head data */}
      <Helmet>
        <title>{data.page.title}</title>
        <meta name='description' content={data.page.pageDescription}/>
      </Helmet>

      {/* the top section */}
      <section className="blog-top">
        {tagline}
      </section>

      {/* the middle section */}
      <section className="flex blog-middle">
        {/* blog posts */}
        <div className="blog-posts">
          {blogPostsData.blogPosts.map(post => (
            <Bubble key={post.slug} className="blog-post">
              <h2>{post.title}</h2>
              <p>{post.date}</p>
              <div>{post.blogTags.map(tag => <Tag>{tag.title}</Tag>)}</div>
            </Bubble>
          ))}
        </div>
      </section>
    </div>
  )
}

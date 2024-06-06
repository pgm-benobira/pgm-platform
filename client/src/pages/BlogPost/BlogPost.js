import React from 'react'
// useParams
import { useParams } from 'react-router-dom'
// html-react-parser
import parse from 'html-react-parser'
// graphql
import { useQuery } from '@apollo/client';
import { GET_BLOG_POST_BY_SLUG } from '../../graphql/queries';
// styles
import './BlogPost.css';
// pages
import Error from '../Error';
// helmet
import { Helmet } from 'react-helmet';
// components
import Loading from '../../components/Elements/Loading';
import Bubble from '../../components/Basics/Bubble';
import Impression from '../../components/Basics/Impression';
import Tag from '../../components/Basics/Tag';
import Redirect from '../../components/Basics/Redirect';
// routes
import { ROUTES } from '../../routes/routes';

export default function BlogPost() {
  const { slug } = useParams();

  // --------- QUERY FOR THE PAGE DATA --------- //

  const { loading, error, data } = useQuery(GET_BLOG_POST_BY_SLUG, {
    variables: { slug },
  });
  if (loading) return <Loading />;
  if (error) return <Error code='502' text='Invalid response.'/>;

  return (
    <div className='container'>
      {/* head data */}
      <Helmet>
        <title>{data.blogPost.title} | GP</title>
        <meta name='description' content="Blog Post"/>
      </Helmet>

      {/* the top section */}
      <section className="flex blog-post-top">
        <Redirect link={ROUTES.blog.path} orientation='left' />
        <h1>{data.blogPost.title}</h1>
      </section>

      {/* the blog post */}
      <section className="flex blog-post">
        <div className='flex blog-post__info'>
          <div className='flex blog-post__credtis'>
            <Bubble addContainer='blog-post__date__container' addClass='blog-post__date flex flex--center'>
              <p>Gepubliceerd op: {new Date(data.blogPost.date).toLocaleDateString('en-GB')}</p>
            </Bubble>
            <Bubble addContainer='blog-post__author__container' addClass='blog-post__author flex flex--center '>
              <p>Geschreven door: {data.blogPost.teamMember.name}</p>
            </Bubble>
          </div>
          <Bubble addContainer='blog-post__tags__container' addClass='blog-post__tags flex flex--center'>
            {data.blogPost.blogTags.map(tag => (
              <Tag key={tag.title}>{tag.title}</Tag>
            ))}
          </Bubble>
        </div>
        <div className='flex blog-post__content'>
          <Impression url={data.blogPost.image.url} fileName={data.blogPost.image.fileName} />
          <Bubble addContainer='blog-post__text__container' addClass='blog-post__text'>
            {parse(data.blogPost.content.html)}
          </Bubble>
        </div>
      </section>
    </div>
  )
}

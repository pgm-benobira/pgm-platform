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
        <Redirect link='/blog' orientation='left' />
        <h1>{data.blogPost.title}</h1>
      </section>

      {/* the blog post */}
      <section className="flex blog-post">
        <div className='flex blog-post__info'>
          <div className='flex blog-post__credtis'>
            <Bubble addClass='flex flex--center'>
              <p>Gepubliceerd op: {data.blogPost.date}</p>
            </Bubble>
            <Bubble addClass='flex flex--center blog-post__author'>
              <p>Geschreven door: {data.blogPost.teamMember.name}</p>
            </Bubble>
          </div>
          <Bubble addClass='flex flex--center blog-post__tags'>
            {data.blogPost.blogTags.map(tag => (
              <Tag key={tag.title}>{tag.title}</Tag>
            ))}
          </Bubble>
        </div>
        <div className='flex blog-post__content'>
          <Impression url={data.blogPost.image.url} fileName={data.blogPost.image.fileName} />
          <Bubble addClass='blog-post__text'>
            {parse(data.blogPost.content.html)}
          </Bubble>
        </div>
      </section>
    </div>
  )
}

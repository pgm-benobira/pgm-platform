import React from 'react'
// html-react-parser
import parse from 'html-react-parser'
// graphql
import { useQuery } from '@apollo/client';
import { GET_PAGE_DATA } from '../../graphql/queries';
// styles
import './Services.css';
// pages
import Error from '../Error';
// helmet
import { Helmet } from 'react-helmet';
// components
import Loading from '../../components/Elements/Loading';

export default function Services() {
  const slug = 'services';

  // --------- QUERY FOR THE PAGE DATA --------- //

  const { loading, error, data } = useQuery(GET_PAGE_DATA, {
    variables: { slug },
  });
  if (loading) return <Loading />;
  if (error) return <Error code='502' text='Invalid response.'/>;

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
      <section className="top">
        {tagline}
      </section>

    </div>
  )
}

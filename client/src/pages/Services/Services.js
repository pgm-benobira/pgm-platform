import React from 'react'
// html-react-parser
import parse from 'html-react-parser'
// graphql
import { useQuery } from '@apollo/client';
import { GET_PAGE_DATA, GET_ALL_SERVICES } from '../../graphql/queries';
// styles
import './Services.css';
// pages
import Error from '../Error';
// helmet
import { Helmet } from 'react-helmet';
// components
import Loading from '../../components/Elements/Loading';
import Bubble from '../../components/Basics/Bubble';

export default function Services() {
  const slug = 'services';

  // --------- QUERY FOR THE PAGE DATA --------- //

  const { loading, error, data } = useQuery(GET_PAGE_DATA, {
    variables: { slug },
  });
  const { loading: servicesLoading, error: servicesError, data: servicesData } = useQuery(GET_ALL_SERVICES);
  if (loading || servicesLoading) return <Loading />;
  if (error || servicesError) return <Error code='502' text='Invalid response.'/>;

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

      {/* the services section */}
      <section className="flex services">
        {servicesData.services?.map((service, index) => (
          <Bubble key={index} addClass='service'>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </Bubble>
        ))}
      </section>

    </div>
  )
}

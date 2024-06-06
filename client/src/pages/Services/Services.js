/**
 * Services page
 * An overview of the services that the study offers.
 * It consists of two sections:
 * - the top section: the tagline
 * - the middle section: the services and the impression
 */

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
import Impression from '../../components/Basics/Impression';
import Redirect from '../../components/Basics/Redirect';

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

  const impressionPgm07 = data.page.impressions.find(impression => impression.fileName === 'pgm-07.jpg');

  // --------- RENDER --------- //

  return (
    <div className='container'>
      {/* head data */}
      <Helmet>
        <title>{data.page.title}</title>
        <meta name='description' content={data.page.pageDescription}/>
      </Helmet>

      {/* the top section */}
      <section className="services-top">
        {tagline}
      </section>

      {/* the middle section */}
      <section className="flex services-middle">
        <div className="flex services">
          {servicesData.services?.map((service, index) => (
            <Bubble key={index} addContainer='service__container' addClass='service'>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </Bubble>
          ))}
        </div>
        <div className="flex services-middle__right">
          <Impression fileName={impressionPgm07.fileName} url={impressionPgm07.url} />
          <Redirect title='Verken onze diensten' link='https://www.arteveldehogeschool.be/nl/onderzoek-en-samenwerking/samenwerken' target='_blank' />
        </div>
      </section>
    </div>
  )
}

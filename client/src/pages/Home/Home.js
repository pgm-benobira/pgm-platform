/**
 * Home page
 * The Home page is the first page that the user sees when visiting the website.
 * It consists of three sections:
 * - the top section: the tagline, the search bar and the programming languages
 * - the middle section: the highlights and the for you section
 * - the bottom section: the external links and the quote
 */

import React from 'react'
// html-react-parser
import parse from 'html-react-parser'
// graphql
import { useQuery } from '@apollo/client';
import { GET_PAGE_DATA } from '../../graphql/queries';
// styles
import './Home.css';
// pages
import Error from '../Error';
// helmet
import { Helmet } from 'react-helmet';
// components
import Loading from '../../components/Elements/Loading';
import Impression from '../../components/Basics/Impression';
import Search from '../../components/Basics/Search';
import Bubble from '../../components/Basics/Bubble';
import Button from '../../components/Basics/Button/Button';
import Quote from '../../components/Basics/Quote/Quote';

export default function Home() {
  const slug = 'home';

  // --------- QUERY FOR THE PAGE DATA --------- //

  const { loading, error, data } = useQuery(GET_PAGE_DATA, {
    variables: { slug },
  });
  if (loading) return <Loading />;
  if (error) return <Error code='502' text='Invalid response.'/>;

  // --------- PAGE DATA --------- //

  const tagline = parse(data.page.tagline.text);

  const impressionPgm01 = data.page.impressions.find(impression => impression.fileName === 'pgm-01.jpg');
  const impressionPgm02 = data.page.impressions.find(impression => impression.fileName === 'pgm-02.jpg');
  const impressionPgm03 = data.page.impressions.find(impression => impression.fileName === 'pgm-03.jpg');
  const impressionPgm04 = data.page.impressions.find(impression => impression.fileName === 'pgm-04.jpg');

  const programmingLanguages = parse(data.page.pageContents.find(pageContent => pageContent.slug === 'programminglanguages').htmlContent.text);
  const homeHighlights = parse(data.page.pageContents.find(pageContent => pageContent.slug === 'homehighlights').htmlContent.text);
  const foryou = parse(data.page.pageContents.find(pageContent => pageContent.slug === 'foryou').htmlContent.text);
  const externalLinks = parse(data.page.pageContents.find(pageContent => pageContent.slug === 'externallinks').htmlContent.text);

  // --------- RENDER --------- //

  return (
    <div className='container'>
      {/* head data */}
      <Helmet>
        <title>{data.page.title}</title>
        <meta name='description' content={data.page.pageDescription}/>
      </Helmet>

      {/* the top section */}
      <section className="flex home-top">
        <div className="home-top__left">
          {tagline}
          <Search />
          {programmingLanguages}
        </div>
        <Impression fileName={impressionPgm01.fileName} url={impressionPgm01.url} />
      </section>

      {/* the middle section */}
      <section className="flex home-middle">
        <Impression fileName={impressionPgm02.fileName} url={impressionPgm02.url} />
        <div className="flex home-middle__right">
          {homeHighlights}
          <div className="flex foryou__container">
            <div className="foryou">
              <Bubble children={foryou} />
              <Button text="Inschrijven" type='primary' link="https://www.arteveldehogeschool.be/node/3854" target='blank' />
            </div>
            <Impression fileName={impressionPgm03.fileName} url={impressionPgm03.url} />
          </div>
        </div>
      </section>

      {/* the bottom section */}
      <section className="flex home-bottom">
        <Bubble children={externalLinks} type='secondary'  />
        <div className="flex home-bottom__right">
          <Quote testimonial={data.page.quote.testimonial} name={data.page.quote.name} role={data.page.quote.role} />
          <Impression fileName={impressionPgm04.fileName} url={impressionPgm04.url} />
        </div>
      </section>
    </div>
  )
}

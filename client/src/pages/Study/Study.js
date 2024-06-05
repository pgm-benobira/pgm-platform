/**
 * Study page
 * The Study page is the page that provides information about the study program.
 * It consists of three sections:
 * - the top section: the tagline
 * - the middle section: the introduction, the highlights and the button to subscribe
 * - the bottom section: the quote, the external links and the redirect to the official website
 */

import React from 'react'
// html-react-parser
import parse from 'html-react-parser'
// graphql
import { useQuery } from '@apollo/client';
import { GET_PAGE_DATA } from '../../graphql/queries';
// styles
import './Study.css';
// pages
import Error from '../Error';
// helmet
import { Helmet } from 'react-helmet';
// components
import Loading from '../../components/Elements/Loading';
import Bubble from '../../components/Basics/Bubble';
import Impression from '../../components/Basics/Impression';
import Button from '../../components/Basics/Button';
import Quote from '../../components/Basics/Quote/Quote';
import Redirect from '../../components/Basics/Redirect';
import Media from '../../components/Basics/Media';

export default function Study() {
  const slug = 'study';

  // --------- QUERY FOR THE PAGE DATA --------- //

  const { loading, error, data } = useQuery(GET_PAGE_DATA, {
    variables: { slug },
  });
  if (loading) return <Loading />;
  if (error) return <Error code='502' text='Invalid response.'/>;

  // --------- PAGE DATA --------- //

  const tagline = parse(data.page.tagline.text);

  const video = data.page.impressions.find(video => video.fileName === 'video.mp4');
  const impression05 = data.page.impressions.find(impression => impression.fileName === 'pgm-05.jpg');
  const impression06 = data.page.impressions.find(impression => impression.fileName === 'pgm-06.jpg');

  const studyIntroduction = parse(data.page.pageContents.find(pageContent => pageContent.slug === 'studyintroduction').htmlContent.text);
  const studyHighlights = parse(data.page.pageContents.find(pageContent => pageContent.slug === 'studyhighlights').htmlContent.text);
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
      <section className="study-top">
        {tagline}
      </section>

      {/* the middle section */}
      <section className="flex study-middle">
        <Media url={video.url} />
        <div className="flex study-middle__right">
          <Bubble children={studyIntroduction}/>
          <div className="study-highlights">
            {studyHighlights}
            <Impression fileName={impression05.fileName} url={impression05.url}/>
          </div>
          <Button text="Inschrijven" type='primary' link="https://www.arteveldehogeschool.be/node/3854" target='blank' />
        </div>
      </section>

      {/* the bottom section */}
      <section className="flex study-bottom">
        <div className="flex study-bottom__left">
          <Quote testimonial={data.page.quote.testimonial} name={data.page.quote.name} role={data.page.quote.role}/>
          <Impression fileName={impression06.fileName} url={impression06.url}/>
          <Redirect title='Benieuwd naar meer?' link='https://www.arteveldehogeschool.be/nl/opleidingen/graduaat/programmeren' target='_blank' />
        </div>
        <div className="flex study-bottom__right">
          <Bubble children={foryou} />
          <Bubble children={externalLinks} type='secondary'  />
        </div>
      </section>
    </div>
  )
}

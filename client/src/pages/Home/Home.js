/**
 * Home page
 * The Home page is the first page that the user sees when visiting the website.
 * It consists of three sections:
 * - the top section: the tagline, the search bar and the programming languages
 * - the last two blog posts
 * - the middle section: the highlights and the for you section
 * - the last two projects
 * - the bottom section: the external links and the quote
 */

import React, { useContext } from 'react'
// context
import { ThemeContext } from '../../contexts/ThemeContext'
// html-react-parser
import parse from 'html-react-parser'
// graphql
import { useQuery } from '@apollo/client';
import { GET_PAGE_DATA, GET_FIRST_TWO_BLOG_POSTS, GET_FIRST_TWO_PROJECTS } from '../../graphql/queries';
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
import Card from '../../components/Elements/Card';

export default function Home() {
  const { darkMode } = useContext(ThemeContext);
  const slug = 'home';

  // --------- QUERY FOR THE PAGE DATA --------- //

  const { loading, error, data } = useQuery(GET_PAGE_DATA, {
    variables: { slug },
  });
  const { loading: blogPostsLoading, error: blogPostsError, data: blogPostsData } = useQuery(GET_FIRST_TWO_BLOG_POSTS);
  const { loading: projectsLoading, error: projectsError, data: projectsData } = useQuery(GET_FIRST_TWO_PROJECTS);
  if (loading || blogPostsLoading || projectsLoading) return <Loading />;
  if (error || blogPostsError || projectsError) return <Error code='502' text='Invalid response.'/>;

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
          <div className={`programming-languages ${darkMode ? 'programming-languages--dark' : ''}`}>
            {programmingLanguages}
          </div>
        </div>
        <Impression fileName={impressionPgm01.fileName} url={impressionPgm01.url} />
      </section>

      {/* the middle section */}
      <section className="flex home-middle">
        <Impression fileName={impressionPgm02.fileName} url={impressionPgm02.url} />
        <div className="flex home-middle__right">
          <div className={`home-highlights ${darkMode ? 'home-highlights--dark' : ''}`}>
            {homeHighlights}
          </div>
          <div className="flex foryou__container">
            <div className="foryou">
              <Bubble children={foryou} />
              <Button text="Inschrijven" type='primary' link="https://www.arteveldehogeschool.be/node/3854" target='blank' />
            </div>
            <Impression fileName={impressionPgm03.fileName} url={impressionPgm03.url} />
          </div>
        </div>
      </section>

      {/* last two blog posts */}
      <section className="flex home-blog">
        <h1 className="home-blog__title">Laatste blog artikelen</h1>
        <ul className="flex">
          {blogPostsData.blogPosts.map(post => (
            <Card
              key={post.slug}
              page={post.page.slug}
              slug={post.slug}
              title={post.title}
              date={post.date}
              tags={post.blogTags}
              fileName={post.image.fileName}
              url={post.image.url} />
          ))}
        </ul>
      </section>

      {/* the bottom section */}
      <section className="flex home-bottom">
        <Bubble addClass='externalLink__background' children={externalLinks} type='secondary'  />
        <div className="flex home-bottom__right">
          <Quote testimonial={data.page.quote.testimonial} name={data.page.quote.name} role={data.page.quote.role} />
          <Impression fileName={impressionPgm04.fileName} url={impressionPgm04.url} />
        </div>
      </section>

      {/* last two projects */}
      <section className="flex home-projects">
        <h1 className="home-projects__title">Laatste projecten van onze studenten</h1>
        <ul className="flex">
          {projectsData.projects.map(project => (
            <Card
              key={project.slug}
              page={project.page.slug}
              slug={project.slug}
              title={project.title}
              date={project.date}
              tags={project.programTracks}
              fileName={project.image.fileName}
              url={project.image.url} />
          ))}
        </ul>
      </section>
    </div>
  )
}

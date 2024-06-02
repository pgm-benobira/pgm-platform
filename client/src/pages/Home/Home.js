import React from 'react'
import { useQuery } from '@apollo/client';
import { GET_PAGE_DATA } from '../../graphql/queries';
import parse from 'html-react-parser'
import Impression from '../../components/Basics/Impression';
import Error from '../Error';
import Loading from '../../components/Elements/Loading';
import './Home.css';
import Search from '../../components/Basics/Search';
import Bubble from '../../components/Basics/Bubble';
import Button from '../../components/Basics/Button/Button';

export default function Home() {
  const slug = 'home';

  const { loading, error, data } = useQuery(GET_PAGE_DATA, {
    variables: { slug },
  });
  if (loading) return <Loading />;
  if (error) return <Error code='502' text='Invalid response.'/>;

  const impressionPgm01 = data.page.impressions.find(impression => impression.fileName === 'pgm-01.jpg');
  const impressionPgm02 = data.page.impressions.find(impression => impression.fileName === 'pgm-02.jpg');
  const impressionPgm03 = data.page.impressions.find(impression => impression.fileName === 'pgm-03.jpg');
  const impressionPgm04 = data.page.impressions.find(impression => impression.fileName === 'pgm-04.jpg');

  const foryou = data.page.pageContents.find(pageContent => pageContent.slug === 'foryou');
  const externalLinks = data.page.pageContents.find(pageContent => pageContent.slug === 'externallinks');

  return (
    <div className='container'>
      {/* the top section */}
      <section className="flex top">
        <div className="top__left">
          {parse(data.page.tagline.text)}
          <Search />
        </div>
        <Impression fileName={impressionPgm01.fileName} url={impressionPgm01.url} />
      </section>

      {/* the middle section */}
      <section className="flex middle">
        <Impression fileName={impressionPgm02.fileName} url={impressionPgm02.url} />
        <div className="flex middle__right">
          {/* here comes highlights */}
          <Bubble type='' />
          <div className="flex middle__right__bottom">
            <div className="foryou">
              <Bubble children={parse(foryou.htmlContent.text)} />
              <Button text="Inschrijven" link="https://www.arteveldehogeschool.be/node/3854" target='blank' />
            </div>
            <Impression fileName={impressionPgm03.fileName} url={impressionPgm03.url} />
          </div>
        </div>
      </section>

      {/* the bottom section */}
      <section className="flex bottom">
        <Bubble children={parse(externalLinks.htmlContent.text)} type='secondary'  />
        <div className="flex bottom__right">
          <div className='flex quote'>
            <Bubble />
            <Bubble type='secondary' />
          </div>
          <Impression fileName={impressionPgm04.fileName} url={impressionPgm04.url} />
        </div>
      </section>
    </div>
  )
}

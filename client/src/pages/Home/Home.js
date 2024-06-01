import React from 'react'
import { useQuery } from '@apollo/client';
import { GET_PAGE_DATA } from '../../graphql/queries';
import parse from 'html-react-parser'
import Impression from '../../components/Basics/Impression';

export default function Home() {
  const slug = 'home';

  const { loading, error, data } = useQuery(GET_PAGE_DATA, {
    variables: { slug },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  const impressionPgm01 = data.page.impressions.find(impression => impression.fileName === 'pgm-01.jpg');

  return (
    <>
      <div className="home">
        {parse(data.page.tagline.text)}
        <Impression fileName={impressionPgm01.fileName} url={impressionPgm01.url} />
      </div>
    </>
  )
}

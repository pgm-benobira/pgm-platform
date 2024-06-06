import React from 'react'
// useParams
import { useParams } from 'react-router-dom'
// html-react-parser
import parse from 'html-react-parser'
// graphql
import { useQuery } from '@apollo/client';
import { GET_PROJECT_BY_SLUG } from '../../graphql/queries';
// styles
import './Project.css';
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

export default function Project() {
  const { slug } = useParams();

  // --------- QUERY FOR THE PAGE DATA --------- //

  const { loading, error, data } = useQuery(GET_PROJECT_BY_SLUG, {
    variables: { slug },
  });
  if (loading) return <Loading />;
  if (error) return <Error code='502' text='Invalid response.'/>;

  return (
    <div className='container'>
      {/* head data */}
      <Helmet>
        <title>{data.project.title} | GP</title>
        <meta name='description' content="Project"/>
      </Helmet>

      {/* the top section */}
      <section className="flex project-top">
        <Redirect link='/projects' orientation='left' />
        <h1>{data.project.title}</h1>
      </section>

      {/* the project */}
      <section className="flex project">
        <Impression url={data.project.image.url} fileName={data.project.image.fileName} />
        <div className='flex project__content'>
          <Bubble addClass='project__description'>
            <p>{parse(data.project.description)}</p>
          </Bubble>
          <div className='flex project__info'>
            <Bubble addContainer='program-tracks__container' addClass='flex program-tracks'>
              <h2>Programmalijnen:</h2>
              {data.project.programTracks.map(track => (
                <Tag key={track.title}>{track.title}</Tag>
              ))}
            </Bubble>
            <Bubble type='secondary' addContainer='course__container' addClass='flex course'>
              <h2>Vak: {data.project.course.title}</h2>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 71.662 57.729"><path fill="none" stroke="#ff6e1f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 7.966S6.225 1 18.415 1 35.83 7.966 35.83 7.966v48.763s-5.225-3.483-17.415-3.483S1 56.729 1 56.729Zm34.831 0S41.055 1 53.246 1s17.415 6.966 17.415 6.966v48.763s-5.225-3.483-17.415-3.483-17.415 3.483-17.415 3.483Z" data-name="Icon akar-book"/></svg>
            </Bubble>
          </div>
        </div>
      </section>
    </div>
  )
}

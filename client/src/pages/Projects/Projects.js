import React, { useState } from 'react'
// html-react-parser
import parse from 'html-react-parser'
// graphql
import { useQuery } from '@apollo/client';
import { GET_PAGE_DATA, GET_ALL_PROJECTS } from '../../graphql/queries';
// pages
import Error from '../Error';
// helmet
import { Helmet } from 'react-helmet';
// components
import Loading from '../../components/Elements/Loading';
import Card from '../../components/Elements/Card';
import Bubble from '../../components/Basics/Bubble';
import Tag from '../../components/Basics/Tag';

export default function Projects() {
  const slug = 'projects';

  // --------- QUERY FOR THE PAGE DATA --------- //

  const { loading, error, data } = useQuery(GET_PAGE_DATA, {
    variables: { slug },
  });
  const { loading: projectsLoading, error: projectsError, data: projectsData } = useQuery(GET_ALL_PROJECTS);
  const [selectedProjectTrack, setSelectedProjectTrack] = useState(null);

  const handleProjectTrackChange = (newTrack) => {
    setSelectedProjectTrack(newTrack);
  };

  if (loading || projectsLoading) return <Loading />;
  if (error || projectsError) return <Error code='502' text='Invalid response.'/>;

  // --------- PAGE DATA --------- //

  const tagline = parse(data.page.tagline.text);

  // Filter the projects based on the selected projectTrack
  const filteredProjects = selectedProjectTrack ? projectsData.projects.filter(project => project.programTracks.some(track => track.title === selectedProjectTrack)) : projectsData.projects;

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

      {/* the filter buttons */}
      <Bubble addClass='flex flex--center filter-buttons' >
        <div className='filter-button' onClick={() => handleProjectTrackChange(null)}>
          <Tag>Alle projecten bekijken</Tag>
        </div>
        {[...new Set(projectsData.projects.flatMap(project => project.programTracks.map(track => track.title)))].map(track => (
          <div className='filter-button' onClick={() => handleProjectTrackChange(track)} key={track}>
            <Tag>{track}</Tag>
          </div>
        ))}
      </Bubble>

      {/* the middle section */}
      <section className="flex middle">
        {filteredProjects.map(project => (
          <Card
            key={project.slug}
            page={project.page.slug}
            slug={project.slug}
            title={project.title}
            date={project.date}
            tags={project.programTracks}
            fileName={project.images[0].fileName}
            url={project.images[0].url} />
        ))}
      </section>
    </div>
  )
}

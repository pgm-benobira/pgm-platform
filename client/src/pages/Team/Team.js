import React, { useState } from 'react'
// html-react-parser
import parse from 'html-react-parser'
// graphql
import { useQuery } from '@apollo/client';
import { GET_PAGE_DATA, GET_ALL_TEAM_MEMBERS } from '../../graphql/queries';
// styles
import './Team.css';
// pages
import Error from '../Error';
// helmet
import { Helmet } from 'react-helmet';
// components
import Loading from '../../components/Elements/Loading';
import Impression from '../../components/Basics/Impression';
import Button from '../../components/Basics/Button';
import TeamMember from '../../components/Elements/TeamMember/TeamMember';
import Bubble from '../../components/Basics/Bubble';

export default function Team() {
  const slug = 'team';

  // --------- QUERY FOR THE PAGE DATA --------- //

  const { loading, error, data } = useQuery(GET_PAGE_DATA, {
    variables: { slug },
  });
  const { loading: teamMembersLoading, error: teamMembersError, data: teamMembersData } = useQuery(GET_ALL_TEAM_MEMBERS);
  const [currentMember, setCurrentMember] = useState(0);

  if (loading || teamMembersLoading) return <Loading />;
  if (error || teamMembersError) return <Error code='502' text='Invalid response.'/>;

  // --------- PAGE DATA --------- //

  const tagline = parse(data.page.tagline.text);

  const impression08 = data.page.impressions.find(impression => impression.fileName === 'pgm-08.jpg');

  const teamMembers = teamMembersData.teamMembers;
  const member = teamMembers[currentMember];
  const memberFunctions = member.functions.map(func => func.title).join(', ');

  // --------- RENDER --------- //

  return (
    <div className='container'>
      {/* head data */}
      <Helmet>
        <title>{data.page.title}</title>
        <meta name='description' content={data.page.pageDescription}/>
      </Helmet>

      {/* the top section */}
      <section className="team-top">
        {tagline}
      </section>

      {/* the middle section */}
      <section className="flex team-middle">
        <TeamMember fileName={member.image.fileName} url={member.image.url} member={member.name} functions={memberFunctions} description={member.description} socialLink={member.link} />
        <div className='flex team-member__nav'>
          <div className='nav__container nav__container--previous' onClick={() => setCurrentMember(current => Math.max(current - 1, 0))} >
            <Bubble>
              <svg className="svg-nav svg-nav--previous" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50.828 50.828"><path fill="none" stroke="#ff6e1f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m49.414 1.414-48 48m8-48h40v40" data-name="Icon akar-arrow-up-right"></path></svg>
            </Bubble>
          </div>
          <div className='nav__container nav__container-next' onClick={() => setCurrentMember(current => Math.min(current + 1, teamMembers.length - 1))}>
            <Bubble>
              <svg className="svg-nav svg-nav--next" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50.828 50.828"><path fill="none" stroke="#ff6e1f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m49.414 1.414-48 48m8-48h40v40" data-name="Icon akar-arrow-up-right"></path></svg>
            </Bubble>
          </div>
        </div>
      </section>

      {/* row of all the pictures of the team members excluding the one that is active */}
      <section className='flex team-row'>
        {teamMembers.map((member, index) => {
          if (index !== currentMember) {
            return <div className='team-row__member' key={index} onClick={() => setCurrentMember(index)}>
            <Impression fileName={member.image.fileName} url={member.image.url} />
          </div>
          }
          return null;
        })}
      </section>

      {/* the bottom section */}
      <section className="flex team-bottom">
        <div className='vacatures'>
          <Button text="Vacatures" type='primary' link="https://jobs.arteveldehogeschool.be/" target='blank' />
          <h1>Een team dat <span className='focus'>klaarstaat</span> voor onze studenten! Wil jij ook de volgende generatie begeleiden?</h1>
        </div>
        <Impression fileName={impression08.fileName} url={impression08.url}/>
      </section>
    </div>
  )
}

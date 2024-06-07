import React from 'react'
// html-react-parser
import parse from 'html-react-parser'
// graphql
import { useQuery } from '@apollo/client';
import { GET_PAGE_DATA, GET_ALL_CAD_COURSES, GET_ALL_IFD_COURSES } from '../../graphql/queries';
// styles
import './Program.css';
// pages
import Error from '../Error';
// helmet
import { Helmet } from 'react-helmet';
// components
import Loading from '../../components/Elements/Loading';
import Bubble from '../../components/Basics/Bubble';

export default function Program() {
  const slug = 'program';

  // --------- QUERY FOR THE PAGE DATA --------- //

  const { loading, error, data } = useQuery(GET_PAGE_DATA, {
    variables: { slug },
  });
  const { loading: loadingCAD, error: errorCAD, data: dataCAD } = useQuery(GET_ALL_CAD_COURSES);
  const { loading: loadingIFD, error: errorIFD, data: dataIFD } = useQuery(GET_ALL_IFD_COURSES);
  if (loading || loadingCAD || errorCAD) return <Loading />;
  if (error || loadingIFD || errorIFD) return <Error code='502' text='Invalid response.'/>;

  // --------- PAGE DATA --------- //

  const tagline = parse(data.page.tagline.text);

  // --------- GROUP COURSES BY YEAR, SEMESTER --------- //

  const groupCourses = (courses) => {
    const grouped = {};

    courses.forEach((course) => {
      const { title, studypoints, programTrack, semester, year } = course;
      const yearTitle = year.title;
      const semesterTitle = semester.title;
      const trackAbbreviation = programTrack.abbreviation;

      if (!grouped[yearTitle]) {
        grouped[yearTitle] = {};
      }
      if (!grouped[yearTitle][semesterTitle]) {
        grouped[yearTitle][semesterTitle] = [];
      }
      grouped[yearTitle][semesterTitle].push({ title, studypoints, trackAbbreviation });
    });

    return grouped;
  };

  const cadCoursesGrouped = groupCourses(dataCAD.courses);
  const ifdCoursesGrouped = groupCourses(dataIFD.courses);

  // --------- RENDER COURSES --------- //

  const renderCourses = (groupedCourses) => {
    return Object.entries(groupedCourses).map(([year, semesters]) => (
      <div key={year} className='flex year'>
        <h2>{year}</h2>
        {Object.entries(semesters).map(([semester, courses]) => (
          <div key={semester} className='semester'>
            <h3>{semester}</h3>
            <ul>
              {courses.map((course, idx) => (
                <li key={idx} className={`track track--${course.trackAbbreviation}`}>
                  {course.title} - {course.studypoints} SP
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    ));
  };

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

      {/* the courses section */}
      <section className="flex courses__container">
        <Bubble addContainer='courses__container' addClass='flex courses courses--cad'>
          <div className='courses__header'>
            <h2 className='cad'>Cloud Application Development</h2>
            <p className='courses__major'>Het keuzetraject <span className='cad'>CAD</span> omvat in totaal 18 studiepunten en richt zich op het ontwikkelen van client-side en database-gestuurde web- en mobiele applicaties met behulp van hedendaagse frameworks.</p>
          </div>
          {renderCourses(cadCoursesGrouped)}
        </Bubble>
        <Bubble addContainer='courses__container' addClass='flex courses courses--cad'>
          <div className='courses__header'>
            <h2 className='ifd'>Interaction and Frontend Development</h2>
            <p className='courses__major'>Het keuzetraject <span className="ifd">IFD</span>, goed voor 18 studiepunten, richt zich op het ontwikkelen van interactieve visuele media, VR- en AR-toepassingen met een nadruk op UI-design, creativiteit, en coderen.</p>
          </div>
          {renderCourses(ifdCoursesGrouped)}
        </Bubble>
      </section>
    </div>
  )
}

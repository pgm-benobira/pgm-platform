/**
 * Results page
 * Page where the search results are displayed
 * - the top section: the search results for the query
 * - the middle section: the projects, blog posts, services and team members that match the query
 */

import React from "react";
// useParams
import { Link, useParams } from "react-router-dom";
// graphql
import { useQuery } from '@apollo/client';
import { GET_SEARCH_ITEMS } from '../../graphql/queries';
// styles
import './Results.css';
// pages
import Error from '../Error';
// helmet
import { Helmet } from 'react-helmet';
// components
import Loading from '../../components/Elements/Loading';
import Redirect from "../../components/Basics/Redirect";
// routes
import { ROUTES } from "../../routes/routes";
import Card from "../../components/Elements/Card";

export default function Results() {
    const { query } = useParams();

    // --------- QUERY FOR THE PAGE DATA --------- //

    const { loading, error, data } = useQuery(GET_SEARCH_ITEMS, {
        variables: { query },
    });
    if (loading) return <Loading />;
    if (error) return <Error code='502' text='Invalid response.'/>;

    // --------- RENDER --------- //

    return (
        <div className="container">
            {/* head data */}
            <Helmet>
                <title>Results page</title>
                <meta name='description' content={`Search Results for "${query}"`}/>
            </Helmet>

            {/* the top section */}
            <section className="flex results-top">
                <Redirect link={ROUTES.home.path} orientation='left' />
                <h1>Search Results for "<span className="focus">{query}</span>"</h1>
            </section>

            {/* the middle section */}
            <section className="flex results-middle">
                {data.projects.length > 0 || data.blogPosts.length > 0 || data.services.length > 0 || data.teamMembers.length > 0 ? (
                    <>
                        {data.projects.length > 0 && (
                            <div>
                                <h1>Projecten van onze studenten:</h1>
                                <ul className="flex">
                                    {data.projects.map(project => (
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
                            </div>
                        )}

                        {data.blogPosts.length > 0 && (
                            <div>
                                <h1>Blog artkelen:</h1>
                                <ul className="flex">
                                    {data.blogPosts.map(post => (
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
                            </div>
                        )}

                        {data.services.length > 0 && (
                            <div>
                                <h1>Gevonden services:</h1>
                                <ul className="flex">
                                    {data.services.map(service => (
                                        <Card
                                            key={service.name}
                                            page='services'
                                            description={service.description}
                                            title={service.title} />
                                    ))}
                                </ul>
                            </div>
                        )}

                        {data.teamMembers.length > 0 && (
                            <div>
                                <h1>Teamleden:</h1>
                                <ul className="flex">
                                    {data.teamMembers.map(member => (
                                        <Card
                                            key={member.name}
                                            page='team'
                                            description={member.description}
                                            title={member.name}
                                            fileName={member.image.fileName}
                                            url={member.image.url} />
                                    ))}
                                </ul>
                            </div>
                        )}
                    </>
                ) : (
                    <div className="no-results">
                        <h1>Geen resultaten gevonden, treur niet je kan ons altijd <Link className="focus" to='mailto:philippe.depauw@arteveldehs.be'>contacteren</Link>!</h1>
                    </div>
                )}
            </section>
        </div>
    );
}

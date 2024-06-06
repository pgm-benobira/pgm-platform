import './styles/reset.css'
import './styles/App.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, } from "react-router-dom";
import { ROUTES } from "./routes/routes";
import Root from "./layouts/Root";
import { Home, Study, Program, Projects, Project, Blog, BlogPost, Services, Team, Error, Results } from "./pages";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Root />} errorElement={<Error />}>
    <Route path={ROUTES.home.path} element={<Home />} />
    <Route path={ROUTES.study.path} element={<Study />} />
    <Route path={ROUTES.program.path} element={<Program />} />
    <Route path={ROUTES.projects.path} element={<Projects />} />
    <Route path={ROUTES.project.path} element={<Project />} />
    <Route path={ROUTES.blog.path} element={<Blog />} />
    <Route path={ROUTES.blogPost.path} element={<BlogPost />} />
    <Route path={ROUTES.services.path} element={<Services />} />
    <Route path={ROUTES.team.path} element={<Team />} />
    <Route path={ROUTES.results.path} element={<Results />} />
  </Route>
));

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

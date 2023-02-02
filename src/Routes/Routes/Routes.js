import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AllPosts from "../../Pages/AllPosts/AllPosts";
import Article from "../../Pages/Article/Article";
import Education from "../../Pages/Education/Education";
import Event from "../../Pages/Event/Event";
import Job from "../../Pages/Job/Job";

export const routes = createBrowserRouter([
   {
      path: '/',
      element: <Main></Main>,
      children: [
         {
            path: '/',
            element: <AllPosts></AllPosts>
         },
         {
            path: '/allposts',
            element: <AllPosts></AllPosts>
         },
         {
            path: '/article',
            element: <Article></Article>
         },
         {
            path: '/event',
            element: <Event></Event>
         },
         {
            path: '/education',
            element: <Education></Education>
         },
         {
            path: '/job ',
            element: <Job></Job>
         },
      ]
   }
])
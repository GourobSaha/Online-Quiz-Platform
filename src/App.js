import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blogs from './Components/Blogs/Blogs';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Questions from './Components/Questions/Questions';
import Statistics from './Components/Statistics/Statistics';
import Main from './Layouts/Main';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path:'/questions/:questionsId',
          loader: async ({params}) =>{
            // console.log(params.questionsId)
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.questionsId}`)
          },
          element:<Questions></Questions>
        },
        {
          path:'/statistics',
          loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Statistics></Statistics>
        },
        {
          path:'/blogs',
          element:<Blogs></Blogs>
        }
      ]
    },
    {
      path:'*',
      element:<NotFound></NotFound>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

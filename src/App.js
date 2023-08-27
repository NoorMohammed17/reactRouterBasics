import React from 'react';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
//import TodoApp from './TodoProject/TodoApp';

const App = () => {
  const router = createBrowserRouter([
    { path: "/",
    element: <HomePage />}
  ])


  return (
    <RouterProvider router={router}/>
   
  );
};

export default App;

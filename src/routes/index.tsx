import routesObjectsArray from './routesObjectsArray';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(routesObjectsArray);

export const Routes: React.FC = () => {
  return <RouterProvider router={router} />;
};

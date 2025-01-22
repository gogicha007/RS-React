import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import NotFound from './pages/notfound/notfound';
import { Details, detailsLoader } from './components/details/details';
import HomePage from './pages/Home/home';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<HomePage />}>
        <Route path=":id" element={<Details />} loader={detailsLoader} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;

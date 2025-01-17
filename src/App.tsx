import './App.css';
import RootLayout from './layouts/RootLayout';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import NotFound from './pages/notfound/notfound';
import { Details, detailsLoader } from './components/details/details';
import Results from './components/results/results';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="results" element={<Results />}>
          <Route path=":id" element={<Details />} loader={detailsLoader} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;

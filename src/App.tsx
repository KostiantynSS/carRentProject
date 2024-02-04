import { Routes, Route, Navigate } from 'react-router-dom';
import routes from "./routes";
import { Layout } from "./components/Layout";
import { Catalog, Favorites, Home } from './pages';



const App = () => {
const {HOME,CATALOG,FAVORITES}= routes
  return (
    <>
     <Routes>
        <Route path={HOME} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={CATALOG} element={<Catalog />} />
          <Route path={FAVORITES} element={<Favorites />}/>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

    </>
  )
}

export default App

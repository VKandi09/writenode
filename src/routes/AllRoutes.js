import { Routes, Route } from 'react-router-dom';
import { HomePage, CreatePost, PageNotFound } from '../pages';
import { ProtectedRouter } from './ProtectedRouter';

export const AllRoutes = () => {
  return (
    <main>
        <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='create' element={<ProtectedRouter><CreatePost /></ProtectedRouter>}/>
            <Route path='*' element={<PageNotFound />}/>
        </Routes>
    </main>
  )
}

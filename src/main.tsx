import { StrictMode, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import { createRoot } from 'react-dom/client'

const LazyHome = lazy(() => import('./components/Home'));
const LazyDetailedView = lazy(() => import('./components/DetailedView'));

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<LazyHome />} />
        <Route path="image">
          <Route path=":id" element={<LazyDetailedView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);

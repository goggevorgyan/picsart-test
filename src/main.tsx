import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import DetailedView from './components/DetailedView.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<App />} />
        <Route path="image">
          <Route path=":id" element={<DetailedView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);

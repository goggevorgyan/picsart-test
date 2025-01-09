import { useEffect, useState } from 'react'
import { fetchPhotos } from './services/photoService';
import { Photo, Photos } from './types/types';
import MasonryGrid from './components/MasonryGrid';

function App() {
  const [photos, setPhotos] = useState({} as Photos<Photo>);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('nature');

  useEffect(() => {
    fetchPhotos(page, query, setPhotos);
  }, [page, query]);

  console.log(photos);
  return (
    <>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      <input type="text" value={page} onChange={(e) => setPage(Number(e.target.value))} />
      {photos.photos && <MasonryGrid items={photos.photos} />}
    </>
  )
}

export default App

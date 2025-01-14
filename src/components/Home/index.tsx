import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import { fetchPhotos } from '../../services/photoService';
import { Photo } from '../../types/types';

const LazyMasonryGrid = lazy(() => import('./MasonryGrid'));

const Home: React.FC = () => {
  const [photos, setPhotos] = useState([] as Photo[]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('cocker');
  const [hasmore, setHasMore] = useState(true);

  const elementRef = useRef<HTMLDivElement>(null);

  const onIntersection = async (entries: IntersectionObserverEntry[]) => {
    if (entries[0].isIntersecting && hasmore) {
      fetchData();
    }
  };

  const fetchData = async () => {
    try {
      let res = await fetchPhotos(query, page);
      let data = await res.photos;
      setPhotos(prevPhotos => [...prevPhotos, ...data]);
      setHasMore(!!res.next_page);
      setPage(prevPage => prevPage + 1);
    } catch (err) {
      console.log(err);
    };
  };

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersection);

    if (observer && elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer && observer.disconnect();
  }, [photos]);

  return (
    <>
      <div className='fixed top-0 left-0 w-full h-16 bg-gray-800 text-white flex items-center justify-center'>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input value={query} name="searchQuery" onChange={e => { setQuery(e.target.value), setPage(1), setPhotos([]) }} type="search" className="block w-full p-4 ps-10 text-sm text-gray-900 rounded-lg bg-gray-50 dark:placeholder-gray-400" placeholder="Search string here" />
        </div>
      </div>
      {photos.length &&
        <Suspense fallback={<div>Loading...</div>}>
          <LazyMasonryGrid items={photos} />
        </Suspense>}
      {hasmore
        ? <div ref={elementRef} className="h-10 bg-gray-800 text-white flex items-center justify-center">Loading...</div>
        : <div ref={elementRef} className="h-10 bg-gray-800 text-white flex items-center justify-center">No more ...</div>}
    </>
  )
}

export default Home

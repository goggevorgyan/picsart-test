import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import WorkerConstructor from '../../worker?worker';
import { Photo, Photos } from '../../types/types';

const worker = new WorkerConstructor();
const LazyMasonryGrid = lazy(() => import('./MasonryGrid'));

const Home: React.FC = () => {
  const [photos, setPhotos] = useState([] as Photo[]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('cocker');
  const [hasmore, setHasMore] = useState(true);

  const elementRef = useRef<HTMLDivElement>(null);

  const onIntersection = async (entries: IntersectionObserverEntry[]) => {
    if (entries[0].isIntersecting && hasmore) {
      worker.postMessage({ query, page });
      worker.onmessage = (event: MessageEvent<Photos<Photo>>) => {
        const { photos, next_page } = event.data;
        setPhotos(prevPhotos => [...prevPhotos, ...photos]);
        setHasMore(!!next_page);
        setPage(prevPage => prevPage + 1);
      }
    }
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
      <div className="header">
        <input value={query} name="searchQuery" onChange={e => { setQuery(e.target.value), setPage(1), setPhotos([]) }} type="search" placeholder="Search string here" />
      </div>
      {photos.length &&
        <Suspense fallback={<div>Loading...</div>}>
          <LazyMasonryGrid items={photos} />
        </Suspense>}
      {hasmore
        ? <div ref={elementRef} className="message-box">Loading...</div>
        : <div ref={elementRef} className="message-box">No more ...</div>}
    </>
  )
}

export default Home

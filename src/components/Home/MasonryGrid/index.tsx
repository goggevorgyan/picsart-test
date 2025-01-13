import { lazy, Suspense } from "react";
import { GridProps } from "../../../types/types";

const LazyImage = lazy(() => import('./Image'));

const MasonryGrid: React.FC<GridProps> = ({ items }) => {
    return (
        <div id="grid" className="columns-1 sm:columns-2 md:columns-4 lg:columns-6 py-10 md:py-20 gap-4">
            {
                items.map((item, index) => (
                    <Suspense fallback={<div>Loading...</div>} key={index}>
                        <LazyImage item={item} key={index} />
                    </Suspense>
                ))
            }
        </div>
    );
};

export default MasonryGrid;
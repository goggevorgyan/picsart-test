import { lazy, Suspense } from "react";
import { GridProps } from "../../../types/types";

const LazyImage = lazy(() => import('./Image'));

const MasonryGrid: React.FC<GridProps> = ({ items }) => {
    return (
        <div id="grid">
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
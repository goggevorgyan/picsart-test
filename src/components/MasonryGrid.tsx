import { Photo } from "../types/types";
import Image from "./Image";

interface GridProps {
    items: Photo[];
}

const MasonryGrid: React.FC<GridProps> = ({ items }) => {
    return (
        <div className="columns-1 sm:columns-2 md:columns-4 lg:columns-6 py-10 md:py-20 gap-4">
            {
                items.map((item, index) => (
                    <Image item={item} key={index} />
                ))
            }
        </div>
    );
};

export default MasonryGrid;
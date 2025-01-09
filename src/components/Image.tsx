import { Photo } from "../types/types";

interface ImageProps {
    item: Photo;
}

const Image: React.FC<ImageProps> = ({ item }) => {
    return (
        <div className="mb-4 break-inside-avoid">
            <img className="w-full object-cver rounded-lg" src={item.src.medium} alt={item.alt} />
        </div>
    );
};

export default Image;
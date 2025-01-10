import { Link } from "react-router";
import { Photo } from "../types/types";

interface ImageProps {
    item: Photo;
}

const Image: React.FC<ImageProps> = ({ item }) => {
    return (
        <div className="mb-4 break-inside-avoid">
            <Link to={`/image/${item.id}`}>
                <img className="w-full object-cver rounded-lg" src={item.src.medium} alt={item.alt} />
            </Link>
        </div>
    );
};

export default Image;
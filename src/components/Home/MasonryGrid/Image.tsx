import { Link } from "react-router";
import { ImageProps } from "../../../types/types";

const Image: React.FC<ImageProps> = ({ item }) => {
    return (
        <div>
            <Link to={`/image/${item.id}`}>
                <img width="auto" height="auto" src={item.src.medium} alt={item.alt} />
            </Link>
        </div>
    );
};

export default Image;
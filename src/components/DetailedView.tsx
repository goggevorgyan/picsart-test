import { Link, useParams } from "react-router";
import { Photo } from "../types/types";
import { useEffect, useState } from "react";
import { fetchPhoto } from "../services/photoService";

const DetailedView: React.FC = () => {
    const [photo, setPhoto] = useState(null as Photo | null);
    let { id } = useParams<{ id: string }>();
    useEffect(() => {
        if (id)
            fetchPhoto(id, setPhoto);
    }, []);

    return (
        <div>
            <nav className="nav-bar">
                <Link to="/">
                    <svg className="back-btn" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd"
                            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                    </svg>
                </Link>
                <span>Back to home</span>
            </nav>
            {photo && (
                <div className="detailed-info">
                    <div>
                        <img src={photo.src.large} alt={photo.alt} />
                    </div>
                    <div>
                        <h2>
                            {photo.alt}
                        </h2>
                        <div>
                            <a href={photo.photographer_url} target="_blank">{photo.photographer}</a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DetailedView;
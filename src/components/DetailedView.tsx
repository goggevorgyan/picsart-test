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
        <div className="mb-4 break-inside-avoid">
            <nav className="inline-flex items-center p-1 rounded bg-white space-x-2">
                <Link to={`/`} className="p-1 rounded border text-black bg-white hover:text-white hover:bg-blue-600 hover:border-blue-600">
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd"
                            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                    </svg>
                </Link>
                <span>Back to home</span>
            </nav>
            {photo && (
                <div className="px-2 py-20 w-full flex justify-center">
                    <div className="bg-white lg:flex">
                        <div className="lg:w-1/2 md:w-full sm:w-full">
                            <img className="lg:scale-100 lg:w-full rounded-b-none border shadow sm:shadow-lg"
                                src={photo.src.large} alt={photo.alt} />
                        </div>
                        <div className="py-12 px-6 lg:px-12 max-w-xl lg:w-1/2">
                            <h2 className="text-3xl text-gray-800 font-bold">
                                {photo.alt}
                            </h2>
                            <div className="mt-8">
                                <a href={photo.photographer_url} target="_blank" className="bg-gray-900 text-gray-100 px-5 py-3 font-semibold rounded">{photo.photographer}</a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DetailedView;
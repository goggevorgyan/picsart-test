import { useParams } from "react-router";
import { Photo } from "../types/types";
import { useEffect, useState } from "react";
import { fetchPhoto } from "../services/photoService";

interface DetailedViewProps {
}

const DetailedView: React.FC<DetailedViewProps> = () => {
    const [photo, setPhoto] = useState(null as Photo | null);
    let { id } = useParams<{ id: string }>();
    useEffect(() => {
        if (id)
            fetchPhoto(id, setPhoto);
    }, []);

    return (
        <div className="mb-4 break-inside-avoid">
            {photo && (
                <div className="px-2 py-20 w-full flex justify-center">
                    <div className="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg rounded-lg">
                        <div className="lg:w-1/2">
                            <div className="lg:scale-110 h-80 bg-cover lg:h-full rounded-b-none border lg:rounded-lg"
                                style={{ backgroundImage: `url('${photo.src.large}')` }}>
                            </div>
                        </div>
                        <div className="py-12 px-6 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 rounded-t-none border lg:rounded-lg">
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
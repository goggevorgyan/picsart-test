import axios from "axios";
import { Photo, Photos } from "../types/types";

const AuthToken = 'bHz0U1AHM3cvae4vwOuzXDnPPNB0luGILBs0QmKXkbhBeKtY8LKk1bEA';
const PhotoGalleryUrl = 'https://api.pexels.com/v1/';

enum Action {
    Search = "search",
    Photo = "photos"
}

export const fetchPhotos = (page: number, query: string, setPhotos: (photos: Photos<Photo>) => void) => {
    axios.get(`${PhotoGalleryUrl}${Action.Search}`, {
        headers: {
            Authorization: AuthToken
        },
        params: { ...(query ? { query } : {}), page, per_page: 50 }
    })
        .then(res => {
            const photos = res.data;
            setPhotos(photos);
        }).catch();

}

export const fetchPhoto = (id: string, setPhoto: (photo: Photo) => void) => {
    axios.get(`${PhotoGalleryUrl}${Action.Photo}/${id}`, {
        headers: {
            Authorization: AuthToken
        }
    })
        .then(res => {
            const photo = res.data;
            setPhoto(photo);
        }).catch();
}

import axios from "axios";
import { Photo, Photos } from "../types/types";

const authToken = 'bHz0U1AHM3cvae4vwOuzXDnPPNB0luGILBs0QmKXkbhBeKtY8LKk1bEA';
const photoGalleryUrl = 'https://api.pexels.com/v1/search';

export const fetchPhotos = (page: number, query: string, setPhotos: (photos: Photos<Photo>) => void) => {
    axios.get(photoGalleryUrl, {
        headers: {
            Authorization: authToken
        },
        params: { query, page, per_page: 10 }
    })
        .then(res => {
            const photos = res.data;
            setPhotos(photos);
        }).catch();

}
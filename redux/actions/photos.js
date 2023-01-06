import { EDIT_PHOTO } from '../constants';

export function editPhoto(photo) {
    return {
        type: EDIT_PHOTO,
        payload: photo
    }
}
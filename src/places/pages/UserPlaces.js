import React, { useReducer } from 'react';
import { useParams } from 'react-router-dom';
import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
    {
        id:'p1',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world!',
        imageUrl: 'https://cropper.watch.aetnd.com/public-content-aetn.video.aetnd.com/video-thumbnails/AETN-History_VMS/21/202/tdih-may01-HD.jpg?w=1440',
        addres: '20 W 34th St, New York, NY 10001, United States',
        location: {
            lat: 40.7484,
            lan: -73.9857
        },
        creator: 'u1'
    },
    {
        id:'p2',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world!',
        imageUrl: 'https://cropper.watch.aetnd.com/public-content-aetn.video.aetnd.com/video-thumbnails/AETN-History_VMS/21/202/tdih-may01-HD.jpg?w=1440',
        address: '20 W 34th St, New York, NY 10001, United States',
        location: {
            lat: 40.7484,
            lan: -73.9857
        },
        creator: 'u2'
    }
]

const UserPlaces = props => {
    const userId = useParams().userId;
    const loadedPlaces =DUMMY_PLACES.filter(place => place.creator === userId);
    return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces
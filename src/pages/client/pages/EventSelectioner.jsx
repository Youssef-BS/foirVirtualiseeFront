import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { CollectionsBookmark } from '@material-ui/icons';

function EventSelectioner() {
    const [event, setEvent] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/event/getid/${id}`);
                setEvent(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [id]);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
        });
    };

    return (
        <div className="container mx-auto">
            {event && (
                <div className="flex flex-col items-center justify-center mt-8">
                    <h1 className="text-3xl font-bold mb-4">{event.EventName}</h1>
                    <p className="text-lg mb-4">{event.description}</p>
                    <p className="text-xl font-semibold mb-4">Date Debut: {formatDate(event.DateDebut)}</p>
                    <p className="text-xl font-semibold mb-4">Date Fin: {formatDate(event.DateFin)}</p>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Reserve
                    </button>
                </div>
            )}
        </div>
    );
}

export default EventSelectioner;

import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../../context/authContext';

function EventSelectioner() {
    const [event, setEvent] = useState(null);
    const [isReserved, setIsReserved] = useState(false);
    const { id } = useParams();
    const { currentUser } = useContext(AuthContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/event/getid/${id}`);
                setEvent(response.data);
                const reservationResponse = await axios.get(`http://localhost:3000/reservation/user/${currentUser._id}`);
                const reservations = reservationResponse.data;
                const isReserved = reservations.some(reservation => reservation.event === id);
                setIsReserved(isReserved);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [id, currentUser._id]);

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

    const handleClick = async () => {
        await axios.post("http://localhost:3000/reservation", {
            evenementId: id,
            userId: currentUser._id,
        });
    }

    return (
        <div className="container mx-auto px-4 py-8 mb-14">
            {event && (
                <div className="flex flex-col items-center justify-center">
                    <img src={`http://localhost:3000/${event?.photo}`} alt='' className='w-3/5 rounded-xl shadow-lg mb-4'/>
                    <h1 className="text-3xl font-bold mb-2">{event.EventName}</h1>
                    <p className="text-lg text-center mb-4">{event.description}</p>
                    <p className="text-xl font-semibold mb-2">Date Debut: {formatDate(event.DateDebut)}</p>
                    <p className="text-xl font-semibold mb-4">Date Fin: {formatDate(event.DateFin)}</p>
                    {isReserved ? (
                        <p className="text-red-500 mb-4">Vous avez déjà réservé cet événement.</p>
                    ) : (
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-md transition duration-300 ease-in-out w-52"
                            onClick={handleClick}
                            disabled={isReserved}
                        >
                            Réserver
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}

export default EventSelectioner;

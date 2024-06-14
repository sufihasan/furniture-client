import { useEffect, useState } from "react";


const useCurrentTime = () => {
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const formatAMPM = (date) => {
            let hours = date.getHours();
            let minutes = date.getMinutes();
            const ampm = hours >= 12 ? 'pm' : 'am';
            hours = hours % 12;
            hours = hours ? hours : 12; // handle midnight (0 hours)
            minutes = minutes < 10 ? '0' + minutes : minutes; // pad minutes with leading zero if needed
            return `${hours}:${minutes}${ampm}`;
        };

        const formatDate = (date) => {
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
            const day = String(date.getDate()).padStart(2, '0');
            return `${year}-${month}-${day}`;
        };

        const updateCurrentTime = () => {
            const date = new Date();
            const formattedTime = `${formatAMPM(date)}, ${formatDate(date)}`;
            setCurrentTime(formattedTime);
        };

        const intervalId = setInterval(updateCurrentTime, 1000);
        updateCurrentTime(); // Initialize immediately

        return () => clearInterval(intervalId);
    }, []);

    return currentTime;
};

export default useCurrentTime;
import { useState } from 'react'

function useSound(videoRef){
    const [sound, setSound] = useState(true);

    const handleSound = () => {
        setSound(!sound);
        videoRef.current.muted = !videoRef.current.muted;
    }

    return {sound, handleSound}
}

export default useSound;
import { useState } from "react";

const usePokemonStatus =  () => {

    const initialStatus = [
        {name: "Registered", value: true, isActive: false},
        {name: "No Registered", value: false, isActive: false},
    ];

    const [status, setStatus] = useState(initialStatus);
    const selectedStatus = status.filter(status => status.isActive).map(status => status.name);

    return [status, setStatus, selectedStatus];
};

export default usePokemonStatus;
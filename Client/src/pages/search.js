import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Search() {
    const college = window.sessionStorage.getItem('college');
    const [requestMade, setRequestMade] = useState(false);
    useEffect(() => {
        if (!requestMade) {
    axios.post('http://localhost:8080/search', {id: [1, 2, 3]}).then((response) => {
        //create array of (n) id numbers
        setRequestMade(true);
    })
    .catch(error => {
        console.log(error);
    });
    }
}, [requestMade]);
    //create variables for each (n) users for (firstName, age, uni, major, bio)
    return (
    <div>
        {/*display (n) user profiles*/}
    </div>
    )
}
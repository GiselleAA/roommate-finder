import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import { useNavigate } from 'react-router-dom';

export default function CollegeSearch() {
const navigate = useNavigate();
const isAuth = window.localStorage.getItem('isAuth');
const colleges = [ 
    { id: 0, name: 'California State University, Bakersfield' },
    { id: 1, name: 'California State University Channel Islands' },
    { id: 2, name: 'California State University, Chico' },
    { id: 3, name: 'California State University, Dominguez Hills' },
    { id: 4, name: 'California State University, East Bay' },
    { id: 5, name: 'California State University, Fresno' },
    { id: 6, name: 'California State University, Fullerton' },
    { id: 7, name: 'Humboldt State University' },
    { id: 8, name: 'California State University, Long Beach' },
    { id: 9, name: 'California State University, Los Angeles' },
    { id: 10, name: 'California State University Maritime Academy' },
    { id: 11, name: 'California State University, Monterey Bay' },
    { id: 12, name: 'California State University, Northridge' },
    { id: 13, name: 'California State Polytechnic University, Pomona' },
    { id: 14, name: 'California State University, Sacramento' },
    { id: 15, name: 'California State University, San Bernardino' },
    { id: 16, name: 'San Diego State University' },
    { id: 17, name: 'San Francisco State University' },
    { id: 18, name: 'San José State University' },
    { id: 19, name: 'California Polytechnic State University, San Luis Obispo' },
    { id: 20, name: 'California State University, San Marcos' },
    { id: 21, name: 'Sonoma State University' },
    { id: 22, name: 'California State University, Stanislaus' },
    { id: 23, name: 'UC Berkeley' },
    { id: 24, name: 'UC Davis' },
    { id: 25, name: 'UC Irvine' },
    { id: 26, name: 'UCLA' },
    { id: 27, name: 'UC Merced' },
    { id: 28, name: 'UC Riverside' },
    { id: 29, name: 'UC San Diego' },
    { id: 30, name: 'UC San Francisco' },
    { id: 31, name: 'UC Santa Barbara' },
    { id: 32, name: 'UC Santa Cruz' }
]

    const handleOnSearch = (string, results) => {
    console.log(string, results);
}

    const handleOnHover = (result) => {
    console.log(result);
}

    const handleOnSelect = (item) => {
    window.sessionStorage.setItem('college', item.name);
    if (isAuth)
        navigate('/search');
    else
        navigate('/signin');
}

    const handleOnFocus = () => {
    console.log('Focused');
}

    const formatResult = (item) => {
    return (
    <>
        <span style={{ display: 'block', textAlign: 'left' }}>{item.name}</span>
    </>
    )
}

    return (
        <ReactSearchAutocomplete
            items={colleges}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
            placeholder="Enter your UC or CSU..."
        />
    )
}
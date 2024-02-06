import React, {useState, useEffect }from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function List(props) {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => console.log(error));
    }, []);


    return (
        <div>
            <h1>Page HOME</h1>
            {data.map((item, index) => (
                <div key={item.id}>
                    {item.id < 10 &&
                    <NavLink to={`/list/${item.id}`} >
                        <h3>{item.title}</h3>
                    </NavLink> }
                </div>
            ))}

            <div>
                <h1>Outlet :</h1>
                <Outlet />
            </div>
        </div>
    );
}

export default List;
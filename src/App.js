import React from 'react';
import './App.css';
import Home from './pages/Home.js'
import List from './pages/List.js'
import ListItem from './pages/ListItem.js'
import Navbar from './component/Navbar.js';

import { RouterProvider, createRoutesFromElements } from 'react-router-dom';
import { createBrowserRouter, Route, Outlet } from 'react-router-dom';

// AppLayout est le parent de manière générale, il définira mon Layout si je souhaite y ajouter une Navbar, un footer... 
const AppLayout = () => (
    <div>
        <Navbar />
        <Outlet/>
    </div>
);

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            [
                <Route path="/" element={<AppLayout />}>
                    <Route path="/" element={<Home />} />

                    {/* Parent dans lequel on mettra la balise Outlet */}
                    <Route path="/list" element={<List />} >
                        <Route path="/list/:id" element={<ListItem />} />
                    </Route>
                </Route>
            ]
        )
    )

return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
);
}

export default App;

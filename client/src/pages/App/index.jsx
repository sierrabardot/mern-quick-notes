import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthPage } from '../AuthPage';
import { NotesPage } from '../NotesPage/NotesPage';
import { getUser } from '../../utilities/users-service';
import { NavBar } from '../../components/NavBar';

import './App.css';

function App() {
    const [user, setUser] = useState(() => {
        return getUser()
    })

    return (
        <>
            <header>
                <NavBar user={user} setUser={setUser} />
            </header>
        <main className="App">
            { user ? (
                <>
                    <Routes>
                        <Route path='/' element={<Navigate to='/notes' replace />} />
                        <Route path="/notes" element={<NotesPage />} />
                        <Route path='/*' element={<Navigate to='/' replace />} />
                    </Routes>
                </>
            ) : (
                <Routes>
                    <Route path='/login' element={<AuthPage setUser={setUser} />} />
                    <Route path='/signup' element={<AuthPage setUser={setUser} />} />
                    <Route path='/*' element={<Navigate to='/login' setUser={setUser} />} />
                </Routes>
            )
            }
        </main>
        <footer></footer>
    </>
    );
}

export default App;

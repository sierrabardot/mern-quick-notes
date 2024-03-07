import { useLocation } from 'react-router-dom'
import { SignUpForm } from '../../components/SignUpForm';
import { LoginForm } from '../../components/LoginForm';

export function AuthPage({ setUser }) {
    const location = useLocation()
    return (
        <div>
            {location.pathname === '/login' ? (
                <>
                    <h1 className='my-4'>Log In</h1>
                    <LoginForm setUser={setUser} />
                </>
             ) : (
                <>
                    <h1 className="my-4">Sign Up</h1>
                    <SignUpForm setUser={setUser} />
                </>
            )}
        </div>
    );
}
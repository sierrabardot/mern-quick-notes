import { useState } from 'react';
import { signUp } from '../../utilities/users-service';

export function SignUpForm({ setUser }) {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [error, setError] = useState(null);

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const userData = {
            name: form.name,
            email: form.email,
            password: form.password,
        };
        try {
            const user = await signUp(userData);
            setUser(user);
        } catch (e) {
            console.error(e);
            setError(`An error occurred with the sign up.`);
        }
    };

    const disable =
        !form.name ||
        !form.email ||
        !form.password ||
        form.password !== form.confirmPassword;

    return (
        <div>
            <div className={`form-container`}>
                <form autoComplete='off' onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className='form-label'>Name</label>
                        <input
                            className='form-control'
                            type='text'
                            name='name'
                            value={form.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                    <label className='form-label'>Email</label>
                    <input
                        className='form-control'
                        type='email'
                        name='email'
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                    </div>
                    <div className="mb-3">
                    <label className='form-label'>Password</label>
                    <input
                        className='form-control'
                        type='password'
                        name='password'
                        value={form.password}
                        onChange={handleChange}
                        required
                    />
                    </div>
                    <div className="mb-3">
                    <label className='form-label'>Confirm Password</label>
                    <input
                        className='form-control'
                        type='password'
                        name='confirmPassword'
                        value={form.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                    </div>
                    <div className="mb-3">
                    <button className="btn btn-primary" type='submit' disabled={disable}>
                        Sign up
                    </button>
                    </div>
                </form>
            </div>
            <p className='error-message'>{error}</p>
        </div>
    );
}
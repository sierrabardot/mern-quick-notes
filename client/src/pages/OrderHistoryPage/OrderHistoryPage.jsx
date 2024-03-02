import { useState } from 'react';
import { retrieveToken } from '../../utilities/users-service';
export function OrderHistoryPage() {
    const [user, setUser] = useState(null);
    const checkTokenExpiry = async () => {
        const user = await retrieveToken();
        console.info(user);
        setUser(user);
    }
    return (
        <>
            <h1>Order History Page</h1>
            <button onClick={checkTokenExpiry}>Check token expiry</button>
            <div>{user && new Date(user.exp).toString()}</div>
        </>
    );
}

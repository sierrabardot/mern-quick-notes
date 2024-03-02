// interface to the backend
// whatever API paths the backend provides, this module matches them, consumes them

// POST /users
export async function createUser(userData) {
    const response = await fetch(`/api/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData),
    });

    if(response.ok) {
        return response.json();
    } else {
        throw new Error(`An error occurred with the sign up`);
    }
}

export async function login(userData) {
    const response = await fetch(`/api/users/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData),
    });

    if(response.ok) {
        return response.json();
    } else {
        throw new Error(`An error occurred with the login`);
    }
}

// GET /users/current
async function getCurrentUser() {

}
import React, { useState, useEffect } from "react";

export function User() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/users');
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []); // Empty dependency array means it runs once after initial render

    return (
        <div>
            <h1>Hi</h1>
            {users.map((user) => (
                <p key={user.id}>{user.age}</p>
            ))}
        </div>
    );
}


import React, { useState, useEffect } from "react";

const GitHubUserSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (error) {
            console.error('Error fetching GitHub user:', error);
        }
    }, [error]);

    const handleSearch = async () => {
        if (!searchTerm.trim()) return;

        setLoading(true);
        setUserData(null);
        setError('');

        try {
            const username = searchTerm.trim();
            const response = await fetch(
                `https://api.github.com/users/${encodeURIComponent(username)}`
            );
            if (!response.ok) throw new Error('GitHub user not found.');
            setUserData(await response.json());
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Something went wrong.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <input
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="GitHub username"
            />
            <button onClick={handleSearch} disabled={loading}>
                {loading ? 'Searching...' : 'Search'}
            </button>
            {error && <p>{error}</p>}
            {userData && <p>{userData.name || userData.login}</p>}
        </div>
    );
};

export default GitHubUserSearch;



import React from 'react'

export const practice = () => {
  return (
    <div>practice</div>
  )
}

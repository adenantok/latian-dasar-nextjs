"use client"
import React, { useEffect, useState } from 'react'

interface Post {
    id: number;
    title: string;
    body: string;
}
export default function HomePage() {
    const [postData, setPostData] = useState<Post[]>([]);
    //const accessToken = localStorage.getItem("accessToken");

    
        const fetchPosts = async () => {
            try {
            const response = await fetch('https://dummyjson.com/posts', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    //'Authorization': `Bearer ${accessToken}`,
                }
            });
            const data = await response.json();
            setPostData(data.posts);
        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchPosts();
    })

    return (
        <div className="overflow-x-auto">
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th className="px-4 py-2">ID</th>
                        <th className="px-4 py-2">Title</th>
                        <th className="px-4 py-2">Body</th>
                    </tr>
                </thead>
                <tbody>
                    {postData.map(({ id, title, body }) => (
                        <tr key={id}>
                            <td className="border px-4 py-2">{id}</td>
                            <td className="border px-4 py-2">{title}</td>
                            <td className="border px-4 py-2">{body}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

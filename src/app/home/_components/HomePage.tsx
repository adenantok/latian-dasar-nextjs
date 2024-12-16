"use client";
import React, { useEffect, useState } from "react";
//import { useRouter } from 'next/navigation';
import Link from "next/link";

interface Post {
  id: number;
  title: string;
  body: string;
}
export default function HomePage() {
  const [postData, setPostData] = useState<Post[]>([]);
  // const router = useRouter();
  //const accessToken = localStorage.getItem("accessToken");
  // const handleComment = (id: number) => {
  //     console.log(id);
  //     router.push(`/post/${id}`);
  // }

  const fetchPosts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/posts", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          //'Authorization': `Bearer ${accessToken}`,
        },
      });
      const data = await response.json();
      setPostData(data.posts);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchPosts();
  });

  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Body</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {postData.map(({ id, title, body }) => (
            <tr key={id}>
              <td className="border px-4 py-2">{id}</td>
              <td className="border px-4 py-2">{title}</td>
              <td className="border px-4 py-2">{body}</td>
              <td className="border px-4 py-2">
                <Link href={`/post/${id}`}>
                  <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Comment
                  </div>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

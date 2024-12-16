"use client"
import React, { useEffect } from 'react'

interface PostPageProps {
  id: number;
 
}
interface Post {
  id : number;
  title: string;
  body: string;

  userId : number;
}
export default function PostPage( { id }: PostPageProps ){
  const [post, setPost] = React.useState<Post | null>(null);
  const fetchPostbyId = async (id: number) => {
    try {
      const response = await fetch(`https://dummyjson.com/posts/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      const data = await response.json();
      console.log(data);
      setPost(data);
    }
    catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchPostbyId(id);
  }, [id])


  // {
  //   "id": 1,
  //   "title": "His mother had always taught him",
  //   "body": "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
  //   "tags": [
  //     "history",
  //     "american",
  //     "crime"
  //   ],
  //   "reactions": {
  //     "likes": 192,
  //     "dislikes": 25
  //   },
  //   "views": 305,
  //   "userId": 121
  // }
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col shadow-md p-4">
        <p className="font-bold text-2xl">Post ID: {post?.id}</p>
        <p className="text-2xl">Title: {post?.title}</p>
        <p className="mt-4">Body: {post?.body}</p>
        <p className="mt-4 text-sm">UserId: {post?.userId}</p>
      </div>
    </div>
    
  )
}

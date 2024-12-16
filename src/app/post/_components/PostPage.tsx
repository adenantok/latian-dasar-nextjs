"use client";
import React, { useState, useEffect } from "react";

interface PostPageProps {
  id: number;
}
interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface Comment {
  id: number;
  postId: number;
  body: string;
}
export default function PostPage({ id }: PostPageProps) {
  const [post, setPost] = React.useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const fetchPostbyId = async (id: number) => {
    try {
      const response = await fetch(`https://dummyjson.com/posts/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      setPost(data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchComments = async (id: number) => {
    try {
      const response = await fetch(
        `https://dummyjson.com/comments/post/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data);
      setComments(data.comments);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchPostbyId(id);
    fetchComments(id);
  }, [id]);

  return (
    <>
      <div className="container mx-auto p-4">
        <div className="flex flex-col shadow-md p-4">
          <p className="font-bold text-2xl">Post ID: {post?.id}</p>
          <p className="text-2xl">Title: {post?.title}</p>
          <p className="mt-4">Body: {post?.body}</p>
          <p className="mt-4 text-sm">UserId: {post?.userId}</p>
        </div>
      </div>
      <div className="container mx-auto mt-4">
        <h2 className="text-2xl font-bold">Comments</h2>
        <div className="grid grid-cols-1 gap-4 mt-4">
          {post ? (
            <>
              {comments.map((comment) => (
                <div key={comment.id} className="flex flex-col shadow-md p-4">
                  <p className="font-bold text-lg">ID: {comment.id}</p>
                  <p className="mt-2">Body: {comment.body}</p>
                </div>
              ))}
            </>
          ) : (
            <p className="text-center text-lg">No comments</p>
          )}
        </div>
      </div>
    </>
  );
}


import React from "react";
import PostPage from "../_components/PostPage";
import Navbar from "@/components/Navbar";

// eslint-disable-next-line @next/next/no-async-client-component
export default async  function Page({ params }: { params: { id: number } }) {
  const { id } = await params;
  return(
    <>
    <Navbar />
    <PostPage id={id} />;
    </>
  )
}

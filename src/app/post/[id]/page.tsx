import React from 'react'
import PostPage from '../_components/PostPage'



export default async function Page({params}: {params: {id: number}}) {
  const {id} = await params
  return (
    <PostPage id={id} />
  )
}

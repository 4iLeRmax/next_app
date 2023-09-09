import { Metadata } from 'next';
import { useState } from 'react';

type PostProps = {
  params: {
    id: string;
  };
};

async function getData(num: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${num}`, {
    next: {
      revalidate: 60,
    },
  });

  return await res.json();
}

export async function generateMetadata({ params: { id } }: PostProps): Promise<Metadata> {
  return {
    title: `Post ${id}`,
  };
}

export default async function Post({ params: { id } }: PostProps) {
  const post = await getData(id);
  // console.log(post);
  return (
    <>
      <h1 className='text-3xl max-w-[50%] mx-auto text-center mb-5'>{post.title}</h1>
      <p className='max-w-[80%] mx-auto text-center'>{post.body}</p>
    </>
  );
}

import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppButton from './UI/button/AppButton';

export default function PostItem({ post, number, remove }) {
  const navigate = useNavigate();

  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {post.id}. {post.title}
        </strong>
        <div>{post.body}</div>
      </div>
      <div className="post__bnts">
        <AppButton onClick={() => navigate(`/posts/${post.id}`)}>
          Open
        </AppButton>
        <AppButton onClick={() => remove(post)}>Delete</AppButton>
      </div>
    </div>
  );
}

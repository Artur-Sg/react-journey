import React from 'react';
import AppButton from './UI/button/AppButton';

export default function PostItem({ post, number, remove }) {
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {post.id}. {post.title}
        </strong>
        <div>{post.body}</div>
      </div>
      <div className="post__bnts">
        <AppButton onClick={() => remove(post)}>Delete</AppButton>
      </div>
    </div>
  );
}

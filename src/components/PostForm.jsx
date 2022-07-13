import React, { useState } from 'react';
import AppInput from './UI/input/AppInput';
import AppButton from './UI/button/AppButton';

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: '', body: '' });

  const addNewPostAsObject = (e) => {
    e.preventDefault();
    create({ ...post, id: Date.now() });
    setPost({ title: '', body: '' });
  };

  return (
    <form>
      <AppInput
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        placeholder="Post title"
      />
      <AppInput
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        placeholder="Post body"
      />
      <AppButton onClick={addNewPostAsObject}>Add Post as Object</AppButton>
    </form>
  );
};

export default PostForm;

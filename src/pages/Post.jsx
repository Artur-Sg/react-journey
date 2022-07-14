import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import AppLoader from '../components/UI/loader/AppLoader';
import { useFetch } from '../hooks/useFetch';

export const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const [fetchPostById, isLoading, error] = useFetch(async (id) => {
    const { data: post } = await PostService.getPost(id);
    setPost(post);
  });

  const [fetchCommentsByPostId, isCommentsLoading, commentsError] = useFetch(
    async (id) => {
      const { data: comments } = await PostService.getCommentsByPostId(id);
      setComments(comments);
    }
  );

  useEffect(() => {
    fetchPostById(id);
    fetchCommentsByPostId(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {(error || commentsError) && (
        <h2 style={{ textAlign: 'center', color: 'red', margin: '15px 0px' }}>
          An error occurred: {error} {commentsError}
        </h2>
      )}

      {isLoading ? (
        <AppLoader />
      ) : (
        <div>
          <h5>
            Post {post.id} '{post.title}''
          </h5>
          <p>{post.body}</p>
        </div>
      )}

      {isCommentsLoading ? (
        <AppLoader />
      ) : (
        comments.map(({ id, name, email, body }) => (
          <div key={id}>
            <h3>
              {name} {email}
            </h3>
            <p>{body}</p>
          </div>
        ))
      )}
    </>
  );
};

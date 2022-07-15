import React, { useEffect, useRef, useState } from 'react';
import PostList from '../components/PostList';
import PostForm from '../components/PostForm';
import AppModal from '../components/UI/modal/AppModal';
import AppButton from '../components/UI/button/AppButton';
import PostService from '../API/PostService';
import AppLoader from '../components/UI/loader/AppLoader';
import { usePosts } from '../hooks/usePosts';
import { PostFilter } from '../components/PostFilter';
import { useFetch } from '../hooks/useFetch';
import { getPageCount } from '../utils/pagination';
import { useObserver } from '../hooks/useObserver';
import '../styles/app.css';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit] = useState(10);
  const [page, setPage] = useState(1);
  const lastElement = useRef();

  const [fetchPosts, isLoading, error] = useFetch(async (limit, page) => {
    const { data: newPosts, headers } = await PostService.getAll(limit, page);
    setPosts([...posts, ...newPosts]);
    const totalCount = headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
  });

  const sortedAndSearchedPosts = usePosts(posts, filter);

  useObserver(lastElement, page < totalPages, isLoading, () => {
    setPage(page + 1);
  });

  useEffect(() => {
    fetchPosts(limit, page);
  }, [page]); // eslint-disable-line react-hooks/exhaustive-deps

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <AppButton onClick={() => setModal(true)}>Add Post</AppButton>
      <AppModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </AppModal>
      <hr style={{ margin: '15px 0', color: 'teal' }} />
      <PostFilter filter={filter} setFilter={setFilter} />

      {error && (
        <h2 style={{ textAlign: 'center', color: 'red', margin: '15px 0px' }}>
          An error occurred: {error}
        </h2>
      )}

      {isLoading && <AppLoader />}

      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title="Posts List"
      />
      <div ref={lastElement} />
    </div>
  );
}

export default Posts;

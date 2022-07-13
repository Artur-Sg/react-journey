import React, { useEffect, useState } from 'react';
import PostList from '../components/PostList';
import PostForm from '../components/PostForm';
import AppModal from '../components/UI/modal/AppModal';
import AppButton from '../components/UI/button/AppButton';
import PostService from '../API/PostService';
import AppLoader from '../components/UI/loader/AppLoader';
import AppPagination from '../components/UI/pagination/AppPagination';
import { usePosts } from '../hooks/usePosts';
import { PostFilter } from '../components/PostFilter';
import { useFetch } from '../hooks/useFetch';
import { getPageCount } from '../utils/pagination';
import '../styles/app.css';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit] = useState(10);
  const [page, setPage] = useState(1);

  const [fetchPosts, isLoading, error] = useFetch(async (limit, page) => {
    const { data: posts, headers } = await PostService.getAll(limit, page);
    setPosts(posts);
    const totalCount = headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
  });

  const sortedAndSearchedPosts = usePosts(posts, filter);

  const changePage = (page) => {
    setPage(page);
    fetchPosts(limit, page);
  };

  useEffect(() => {
    fetchPosts();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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

      {isLoading ? (
        <AppLoader />
      ) : (
        <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title="Posts List"
        />
      )}
      <AppPagination
        totalPages={totalPages}
        currentPage={page}
        changePage={changePage}
      />
    </div>
  );
}

export default Posts;

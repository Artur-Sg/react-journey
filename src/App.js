import React, { useEffect, useState } from 'react';
// import { useRef } from 'react';
// import ClassCounter from './components/ClassCounter';
// import Counter from './components/Counter';
import './styles/app.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import { PostFilter } from './components/PostFilter';
import AppModal from './components/UI/modal/AppModal';
import AppButton from './components/UI/button/AppButton';
import { usePosts } from './hooks/usePosts';
import PostService from './API/PostService';
import AppLoader from './components/UI/loader/AppLoader';
import { useFetch } from './hooks/useFetch';

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);

  const [fetchPosts, isLoading, error] = useFetch(async () => {
    const posts = await PostService.getAll();
    setPosts(posts);
  });

  const sortedAndSearchedPosts = usePosts(posts, filter);

  useEffect(() => {
    fetchPosts();
  }, []);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <hr style={{ margin: '15px 0', color: 'teal' }} />
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
    </div>
  );
}

export default App;

// const [title, setTitle] = useState('');
// const postBodyRef = useRef();

// const resetInputs = () => {
//   setTitle('');
//   postBodyRef.current.value = '';
// };

// const addNewPost = (e) => {
//   e.preventDefault();

//   const newPost = { id: Date.now(), title, body: postBodyRef.current.value };

//   setPosts([...posts, newPost]);
//   resetInputs();
// };

// {
//   /* <Counter />
//       <ClassCounter />

//       <form>
//         <AppInput
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           placeholder="Post title"
//         />
//         <AppInput ref={postBodyRef} placeholder="Post body" />
//         <AppButton onClick={addNewPost}>Add Post</AppButton>
//       </form> */
// }

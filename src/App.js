import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { About } from './pages/About';
import Posts from './pages/Posts';
import './styles/app.css';

function App() {
  return (
    <div className="App">
      <ul className="navbar">
        <li className="navbar__link">
          <Link to="about">About</Link>
        </li>
        <li className="navbar__link">
          <Link to="posts">Posts</Link>
        </li>
      </ul>
      <Routes>
        <Route path="posts" element={<Posts />} />
        <Route path="about" element={<About />} />
      </Routes>
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

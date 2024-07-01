import { addDoc, collection } from 'firebase/firestore';
import { db, auth } from '../firebase/config';
import { useNavigate } from 'react-router-dom';
import { useTitle } from "../hooks/useTitle";


export const CreatePost = () => {
  const navigate = useNavigate();
  useTitle("Create");
  const postsRef = collection(db, "posts");

  async function handleSubmitPosts(event) {
    event.preventDefault();
    console.log(auth);
    const document = {
      title: event.target.title.value,
      description: event.target.description.value,
      author: {
        name: auth.currentUser.displayName,
        id: auth.currentUser.uid
      }
    }
    await addDoc(postsRef, document);
    navigate('/');
  }

  return (
    <section className="create">
      <div className="heading">
        <h1>Add New Post</h1>
      </div>
      <form className="createPost" onSubmit={handleSubmitPosts}>
        <input type="text" name="title" className="title" placeholder="Title" maxLength="50" required></input>
        <textarea type="text" name="description" className="description" placeholder="Description" maxLength="500" required></textarea>
        <button type="submit" className="submit">Create</button>
      </form>
    </section>
  )
}

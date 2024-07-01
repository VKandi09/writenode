import { PostCard, SkeletonCard } from "../components";
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase/config';
import { useEffect, useState, useRef } from "react";
import { useTitle } from "../hooks/useTitle";

export const HomePage = () => {
  const [ posts, setPosts ] = useState(new Array(2).fill(false));
  const [ toggle, setToggle ] = useState(false);
  useTitle("Home");
  const postsRef = useRef(collection(db, "posts"));

  useEffect(() => {
    async function getPosts(){
      const data = await getDocs(postsRef.current);
      setPosts(data.docs.map((doc) => (
        {...doc.data(), id: doc.id}
      )));
    }
    getPosts();
  }, [toggle, postsRef]);

  return (
    <section>
      { posts.map( (post, index) =>(
        post ? (
          <PostCard key={post.id} post={post} toggle={toggle} setToggle={setToggle} />
        ) : (
          <SkeletonCard key={index}/>
        )
      ))}
    </section>
  )
} 

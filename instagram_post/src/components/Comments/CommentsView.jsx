import React, { useRef } from 'react'
import Comment from "./Comment"
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)   
// General scroll to element function

 const CommentsView = () => {

   const myRef = useRef(null)
   const executeScroll = () => scrollToRef(myRef)

   return (

      <div style={styles.solidLine} >

    <Comment username={"celestgoldberg"} userComment={"Marvelous picture! Thought you would invite me too!"}/>        

    </div>
   )
}

export default CommentsView;

const styles = {
    solidLine: {
      borderTop: "1.4px solid #bbb",
    },
    container: {
      display: "flex",
      flexDirection: "row",
  
      margin: 15,
    },
    avatar: {},
  };
  
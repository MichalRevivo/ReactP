import { useSelector, useDispatch } from 'react-redux';
import { useState, useRef } from "react";
import { AddPost } from '../Redux/Action';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

import Typography from '@mui/material/Typography';
export const PostsComponent = () => {
  const masTitle = useRef();
  const masBody = useRef();

  const CurrentPepole = useSelector((myStore) => myStore.CurrentPepole);
  const posts = useSelector((myStore) => myStore.PostsData);
  const CountPost = useSelector((myStore) => myStore.CountPost);

  const filteredPosts = posts.flat().filter((post) => Number(post.userId) === Number(CurrentPepole.id));
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();

  const handleAddPost = () => {
    const newPost = {
        
            "userId": CurrentPepole.id,
            "id": CountPost+1,
            "title": masTitle.current.value,
            "body":  masBody.current.value
          
    //   message: mas.current.value
    };

    dispatch(AddPost(newPost));
    setCount(count + 1);
    console.log(filteredPosts);
  };

  return (
    <>
      <form className="form-container" style={{marginBottom:"3px"}}>
        <div id="ctext" style={{ height: "490px", overflow: "auto" }}>
          {filteredPosts.map((post) => (
        
            <Card style={{marginLeft:"140px",marginBottom:"50px",width:"600px" }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  <p>MY POST</p>
              </Typography>
              <Typography variant="h5" component="div">
              <p key={post.id}></p>
      
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
              <h3>{post.title}</h3>
              </Typography>
              <Typography variant="body2">
                <p>{post.body}</p>
      
                <br />
                {'"good lack"'}
              </Typography>
            </CardContent>
          </Card>
          ))}
        </div>
        <textarea placeholder="Start typing your new post...!" ref={masBody} style={{marginBottom:"55px"}} name="msg" required >
        </textarea>
            <textarea placeholder="What do you have to tell us? Give a title"  ref={masTitle} style={{marginBottom:"125px",height:"5px"}} name="msg" required ></textarea>
            <Button variant="outlined" style={{ borderColor:"rgb(101, 86, 29)",color:"rgb(101, 86, 29)",backgroundColor:"white"}} onClick={handleAddPost}>Add post</Button>

      </form>
      <div className="footer1"></div> 

    </>
  );
}
 export default PostsComponent;




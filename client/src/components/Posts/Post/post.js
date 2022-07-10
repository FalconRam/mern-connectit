import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import { deletePost, likePost } from "../../../actions/posts";
import { useDispatch } from "react-redux";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbUpAltOutlined from "@material-ui/icons/ThumbUpAltOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import useStyles from "./styles";

const Post = ({ post, currentId, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));

  const updatePost = () =>
    user?.result._id === post.creator ? setCurrentId(post._id) : null;

  const Likes = () => {
    if (post) {
      return post.likes.find(
        (like) => like === (user?.result?._id || user?.result?.googleId)
      ) ? (
        <>
          <FavoriteOutlinedIcon fontSize="small" style={{ color: "red" }} />
          &nbsp;
          {post.likes.length > 2
            ? `You, ${post.likes.length - 1} others`
            : `${post.likes.length} Like${post.likes.length > 1 ? "s" : ""}`}
        </>
      ) : (
        <>
          <FavoriteBorderOutlinedIcon fontSize="small" />
          &nbsp;{post.likes.length} {post.likes.length <= 1 ? "Like" : "Likes"}
        </>
      );
    }
  };

  return (
    <Card className={classes.card} raised elevation={10}>
      <CardMedia
        className={classes.media}
        image={post.selectedFile}
        tittle={post.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.name}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      {user?.result?._id === post.creator ||
      user?.result?.googleId === post?.creator ? (
        <div className={classes.overlay2}>
          <Button style={{ color: "white" }} size="small" onClick={updatePost}>
            <MoreHorizIcon fontSize="medium" />
          </Button>
        </div>
      ) : null}
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <Typography
        className={classes.title}
        gutterBottom
        variant="h5"
        component="h2"
      >
        {post.title}
      </Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.message}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(likePost(post._id))}
        >
          {/* <ThumbUpAltIcon fontSize="small" />
          &nbsp; {post.likes.length === 1 ? "Like" : "Likes"} &nbsp;{" "}
          {post.likes.length} */}
          <Likes />
        </Button>
        {user?.result?._id === post.creator ||
        user?.result?.googleId === post?.creator ? (
          <Button
            size="small"
            color="primary"
            onClick={() => dispatch(deletePost(post._id))}
          >
            <DeleteIcon />
          </Button>
        ) : null}
      </CardActions>
    </Card>
  );
};

export default Post;

import React, { useState } from "react";
import { Paper, Typography, TextField, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import FileBase from "react-file-base64";
import useStyles from "./styles";
import {createPost} from "../../actions/posts";

const Form = () => {
  const classes = useStyles();
  const [postData, setPostData] = useState({
    creator: "",
    tittle: "",
    message: "",
    tags: "",
    selectedField: "",
  });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(postData));
    setPostData({
      creator: "",
      tittle: "",
      message: "",
      tags: "",
      selectedField: "",
    });
  };

  const clear = () => {
    setPostData({
      creator: "",
      tittle: "",
      message: "",
      tags: "",
      selectedField: "",
    });
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Create a Post</Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.tittle}
          onChange={(e) => setPostData({ ...postData, tittle: e.target.value })}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Caption"
          fullWidth
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          ></FileBase>
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          type="submit"
          size="large"
          color="primary"
        >
          Submit
        </Button>
        <Button
          className={classes.buttonSubmit}
          variant="outlined"
          size="large"
          color="secondary"
          onClick={clear}
        >
          Reset
        </Button>
      </form>
    </Paper>
  );
};

export default Form;

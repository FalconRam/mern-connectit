import React, { useState } from "react";
import { Paper, Typography, TextField, Button } from "@material-ui/core";
import useStyles from "./styles";

const Form = () => {
  const classes = useStyles();
  const [postData, setPostData] = useState({
    creator: "",
    tittle: "",
    message: "",
    tags: "",
    selectedField: "",
  });

  const handleSubmit = () => {};

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={classes.form}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Create a Post</Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
        <TextField
          name="tittle"
          variant="outlined"
          label="Tittle"
          value={postData.tittle}
          onChange={(e) => setPostData({ ...postData, tittle: e.target.value })}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Caption"
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
        />
      </form>
    </Paper>
  );
};

export default Form;

import React, { useState, useEffect, useContext } from 'react';
import { TextField, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { NewsDataContext } from '../App';

function EditCard(props) {
  const [editedComment, setEditedComment] = useState({ title: '', content: '' });
  const { rowsArray, updateArray } = useContext(NewsDataContext);

  useEffect(() => {
    setEditedComment({ title: props.comment.title, content: props.comment.content });
  }, [props.comment]);

  const handleTitleChange = (event) => {
    setEditedComment({ ...editedComment, title: event.target.value });
  };

  const handleContentChange = (event) => {
    setEditedComment({ ...editedComment, content: event.target.value });
  };

  function handleSave() {
    const updatedRows = rowsArray.map((row) => {
      if (row.id === props.id) {
        return { ...row, title: editedComment.title, content: editedComment.content };
      } else {
        return row;
      }
    });
    updateArray(updatedRows);
    props.onClose(); // Call onClose to close the dialog
  }

  return (
    <Dialog open={props.bool} onClose={props.onClose}>
      <DialogTitle>Edit News</DialogTitle>
      <DialogContent>
        <TextField
          label="Title"
          value={editedComment.title}
          onChange={handleTitleChange}
          margin="dense"
          fullWidth
        />
        <TextField
          label="Content"
          value={editedComment.content}
          onChange={handleContentChange}
          margin="dense"
          multiline
          rows={3}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClose}>Cancel</Button>
        <Button onClick={handleSave}>Save</Button>
      </DialogActions>
    </Dialog>
  );
}

export default EditCard;
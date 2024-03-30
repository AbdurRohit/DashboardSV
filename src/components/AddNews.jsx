import React, { useState, useContext } from 'react';
import { Box, TextField, Button, Typography, Grid, Select, MenuItem, Card, CardMedia, Alert ,Snackbar} from '@mui/material';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { NewsDataContext } from '../App';

const categories = [
  'tech',
  'political',
  'science',
  'business',
  'development',
  'travel',
  'environment',
  'education',
  'health',
  'agriculture',
  'finance',
  'social',
  'culture',
  'entertainment',
];

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const AddNews = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [previewVideo, setPreviewVideo] = useState(null);
  const { rowsArray, updateArray } = useContext(NewsDataContext);
  const [showAlert, setShowAlert] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handleSnackbar = () => {
    setOpenSnackbar(true);
    setTimeout(() => {
      setOpenSnackbar(false);
    }, 3000);
  };

  const handleAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    setVideo(file);
    setPreviewVideo(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title === '' || content === '') {
      handleAlert();
      return;
    }
    handleSnackbar()

    const newRow = {
      id: rowsArray.length + 1,
      no: rowsArray.length + 1,
      title,
      content,
      views: 0,
      options: 0,
      comment: 0,
      category,
      image,
      video,
    };

    const updatedRows = [...rowsArray, newRow];

    updateArray(updatedRows);

    setTitle('');
    setContent('');
    setCategory('');
    setImage(null);
    setVideo(null);
    setPreviewImage(null);
    setPreviewVideo(null);
  };

  return (
    <Box>
    <Typography variant="h2" mb={3}>
      Add News
    </Typography>
    {showAlert && (
        <Alert severity="error" onClose={() => setShowAlert(false)}>
          All fields need to be filled!
        </Alert>
      )}
    <form onSubmit={handleSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            label="Title"
            value={title}
            onChange={handleTitleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Content"
            value={content}
            onChange={handleContentChange}
            multiline
            rows={4}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Select
            value={category}
            onChange={handleCategoryChange}
            fullWidth
          >
            <MenuItem value="">Select Category</MenuItem>
            {categories.map((cat) => (
              <MenuItem key={cat} value={cat}>{cat}</MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12}>
          <Button
            component="label"
            role={undefined}
            variant="contained"
            type="file"
            accept="image/*"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
          >
            Upload Image
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              hidden
            />
            <VisuallyHiddenInput type="file" />
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            component="label"
            role={undefined}
            variant="contained"
            type="file"
            accept="video/*"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
          >
            Upload Video
            <input
              type="file"
              accept="video/*"
              onChange={handleVideoChange}
              hidden
            />
            <VisuallyHiddenInput type="file" />
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Publish
          </Button>
    
        </Grid>
      </Grid>
    </form>
    
    <Snackbar
      open={openSnackbar}
      autoHideDuration={6000}
      onClose={handleCloseSnackbar}
      message={"News Uploaded"}
    />

    <Box mt={4}>
      <Typography variant="h5">Mobile Preview</Typography>
      <Card sx={{ maxWidth: 345 }}>
        {previewImage && (
          <CardMedia
            component="img"
            height="194"
            image={previewImage}
            alt="Preview Image"
          />
        )}
        {previewVideo && (
          <CardMedia
            component="video"
            height="194"
            src={previewVideo}
            controls
          />
        )}
        <Box p={2}>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="body2">{content}</Typography>
        </Box>
      </Card> 
    </Box>
    </Box> 
  )
}
export default AddNews;




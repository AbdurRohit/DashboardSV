import React from "react"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid,Divider } from "@mui/material";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function ViewNewsModal(props) {
  console.log(props.data);
    return (
        <>
            <Modal
                open={props.open}
                onClose={props.onClose}
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"

            >
                      <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h5" component="h2" gutterBottom>
                        {props.data.title}
                    </Typography>

                    <Divider sx={{ my: 2 }} /> {/* Optional divider */}

                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Typography variant="inherit" gutterBottom>
                               <b>ID:</b>  {props.data.id}
                            </Typography>
                            <Typography variant="inherit" gutterBottom>
                               <b>No:</b>  {props.data.no}
                            </Typography>
                            <Typography variant="inherit" gutterBottom >
                                <b>Views: </b>{props.data.views}
                            </Typography>
                          
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="inherit" gutterBottom noWrap >
                                <b>Content:</b> {props.data.content}
                            </Typography>
                            <Typography variant="inherit" gutterBottom >
                                <b>Comments: </b>{props.data.comment}
                            </Typography>
                         
                        </Grid>
                    </Grid>

                    {/* Optional:  A more detailed description  */}
                    {props.data.description && (
                        <Box sx={{ my: 2 }}> 
                            <Typography variant="h6" gutterBottom>Description</Typography>
                            <Typography variant="body1">
                                {props.data.description} 
                            </Typography>
                        </Box>
                    )}
                </Box>
            </Modal>
            
        </>
    )
}
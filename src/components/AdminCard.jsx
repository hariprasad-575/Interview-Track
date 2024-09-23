import React, { useState } from 'react';
import { 
    Card, 
    CardHeader, 
    CardContent, 
    IconButton, 
    Typography, 
    Avatar, 
    Button, 
    Dialog, 
    DialogTitle, 
    DialogContent, 
    DialogActions, 
    Box, 
    Grid 
} from '@mui/material';
import { DeleteOutlined } from '@mui/icons-material';
import applicationsData from '../application.json';

const SimpleCard = (props) => {
    const { companyName, role, experience, technicalSkills, salaryRange, description } = props;
    const [dialogOpen, setDialogOpen] = useState(false);

    const handleDialogOpen = () => {
        setDialogOpen(true);
    };

    const handleDialogClose = () => {
        setDialogOpen(false);
    };

    return (
        <Card elevation={2} sx={{ borderRadius: 2, transition: '0.3s', '&:hover': { boxShadow: 6}, mb: 2 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: 'primary.main', color: 'white' }}>
                        {companyName[0].toUpperCase()}
                    </Avatar>
                }
                action={
                    <IconButton>
                        <DeleteOutlined sx={{ color: 'black' }} />
                    </IconButton>
                }
                title={
                    <Typography sx={{ fontWeight: 'bold', textTransform: 'uppercase', fontSize: '1.2rem' }}>
                        {companyName}
                    </Typography>
                }
                subheader={
                    <Typography sx={{ fontWeight: 'bold', color: 'grey', fontSize: '0.9rem' }}>
                        {role} ({experience} years)
                    </Typography>
                }
            />
            <CardContent>
                <Typography variant='body2' color='grey' sx={{ 
                mb: 1,
                maxHeight: '1.5em',
                overflow: 'hidden', 
                textOverflow: 'ellipsis', 
                whiteSpace: 'nowrap' 
                }}>
                    Technical Skills: {technicalSkills.join(', ')}
                </Typography>
                {salaryRange && (
                    <Typography variant='body2' color='grey' sx={{ mb: 1 }}>
                        Salary Range: {salaryRange}
                    </Typography>
                )}
                {description && (
                    <Typography variant='body2' color='grey' sx={{ mb: 1 }}>
                        {description}
                    </Typography>
                )}
            </CardContent>
            <Button sx={{ m: 1 }} variant="contained" color="primary" onClick={handleDialogOpen}>
                View Applications
            </Button>

            {/* Dialog for Applications */}
            <Dialog
                open={dialogOpen}
                onClose={handleDialogClose}
                PaperProps={{
                    sx: {
                        backgroundColor:'#dbdbdb',
                        margin: 0,
                        top: '6%',
                        borderRadius: 2,
                        boxShadow: 4,
                        // marginBottom:4,
                        maxHeight: '85%', // Limit max height
                        overflowY: 'auto',
                    },
                }}
            >
                <DialogTitle sx={{ textAlign: 'center' }}>
                    {companyName.toUpperCase()} Applications List
                </DialogTitle>
                <DialogContent>
                    <Grid container spacing={2}>
                        {applicationsData.map((app, index) => (
                            <Grid item xs={12} sm={12} key={index}>
                                <Card elevation={1} sx={{ padding: 2, borderRadius: 1 }}>
                                    <Typography variant='h6' gutterBottom>
                                        {app.name} - {app.role}
                                    </Typography>
                                    <Typography variant='body2'>
                                        Experience: {app.experience} years
                                    </Typography>
                                    <Typography variant='body2'>
                                        Skills: {app.skills.join(', ')}
                                    </Typography>
                                    <Typography variant='body2'>
                                        GPA: {app.gpa}
                                    </Typography>
                                    <Typography variant='body2'>
                                        College: {app.college}
                                    </Typography>
                                    <Box sx={{ mt: 1 }}>
                                        <Button variant="outlined" color="success" sx={{ mr: 1 }}>
                                            Accept
                                        </Button>
                                        <Button variant="outlined" color="error">
                                            Reject
                                        </Button>
                                    </Box>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDialogClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </Card>
    );
};

export default SimpleCard;

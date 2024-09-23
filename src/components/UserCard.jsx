import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
    Card, 
    CardHeader, 
    CardContent, 
    IconButton, 
    Typography, 
    Avatar, 
    Button,  
} from '@mui/material';
// import { DeleteOutlined } from '@mui/icons-material';


const UserCard = (props) => {
    const navigate = useNavigate();
    const { jobId, companyName, role, experience, technicalSkills, salaryRange, description,islogged } = props;
    function handleApply(jobId){
        if(islogged){
            navigate(`/apply/${jobId}`);
        }
        else{
            navigate('/login');
        }
    }
    return (
        <Card elevation={2} sx={{ borderRadius: 2, transition: '0.3s', '&:hover': { boxShadow: 6 }, mb: 2 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: 'primary.main', color: 'white' }}>
                        {companyName[0].toUpperCase()}
                    </Avatar>
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
            <Button sx={{ m: 1 }} variant="contained" color="primary"  onClick={() => handleApply(jobId)}>
                Apply
            </Button>
        </Card>
    );
};

export default UserCard;

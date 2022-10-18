import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';

export default function ImgMediaCard({data}) {
    //
    useEffect(()=>{
        console.log(data);
    })
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={data.img}
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {data.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {data.title} are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
            </Typography>
            <p style={{fontStyle:'italic', fontWeight:'bold', fontSize:'12px'}}>by {data.author}</p>
            </CardContent>
            <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Read More</Button>
            </CardActions>
        </Card>
    );
}

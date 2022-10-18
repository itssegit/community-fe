import * as React from 'react';
import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

/**
 * 
 * URL 파라미터 사용법 예시
 */

const dummyData = {
    giorgio: {
        name: '죠르죠',
        description: '으아아아아아 하기 싫어!',
        email: 'giorgio0420@naver.com',
        nickname: 'giorgio'
    },
    ironman: {
        name: '초리초리',
        description: '힝힝',
        email: 'incheol@naver.com',
        nickname: 'plmmaster'
    },
    yl: {
        name: 'yl',
        description: '힝힝',
        email: 'incheol@naver.com',
        nickname: 'plmmaster'
    },
    local: {
        name: 'local',
        description: '힝힝',
        email: 'incheol@naver.com',
        nickname: 'plmmaster'
    }
}

const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
      author: '@bkristastucchio',
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
      author: '@rollelflex_graphy726',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
      author: '@helloimnik',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
      author: '@nolanissac',
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
      author: '@hjrc33',
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
      author: '@arwinneil',
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
      author: '@tjdragotta',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
      author: '@katie_wasserman',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
      author: '@silverdalex',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
      author: '@shelleypauls',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
      author: '@peterlaster',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
      author: '@southside_customs',
      cols: 2,
    },
];
  

const Profile = () => {
    const params = useParams();
    const profile = dummyData[params.username];

    return (
        <div>
            <h1>Giorgio님의 프로필</h1>
            {
                profile ? (
                    <>
                        <div>
                            <h2>{profile.name}</h2>
                            <p>{profile.email}</p>
                            <Typography>
                                {profile.description}
                            </Typography>
                        </div>
                        <div style={{marginTop:'3rem'}}>
                            <div>
                                <h3>{profile.name} 님의 뻬이보리츠</h3>
                            </div>
                            <ImageList sx={{ width: 500, height: 450 }}>
                                <ImageListItem key="Subheader" cols={2}>
                                    <ListSubheader component="div" style={{display:'flex', alignItems:'center', paddingLeft:'0px'}}><PhotoCameraIcon/>12월 업로드 이미지</ListSubheader>
                                </ImageListItem>
                                {itemData.map((item) => (
                                    <ImageListItem key={item.img}>
                                    <img
                                        src={`${item.img}?w=248&fit=crop&auto=format`}
                                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                        alt={item.title}
                                        loading="lazy"
                                    />
                                    <ImageListItemBar
                                        title={item.title}
                                        subtitle={item.author}
                                        actionIcon={
                                        <IconButton
                                            sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                            aria-label={`info about ${item.title}`}
                                        >
                                            <InfoIcon />
                                        </IconButton>
                                        }
                                    />
                                    </ImageListItem>
                                ))}
                            </ImageList>
                        </div>
                    </>
                ) : (
                    <p>존재하지 않는 사용자입니다.</p>
                )
            }
        </div>
    )
}

export default Profile;
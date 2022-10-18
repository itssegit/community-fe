import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

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
    }
}

const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
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
                            <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
                            {itemData.map((item) => (
                                <ImageListItem key={item.img}>
                                <img
                                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading="lazy"
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
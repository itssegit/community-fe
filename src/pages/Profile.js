import { useParams } from "react-router-dom";

/**
 * 
 * URL 파라미터 사용법 예시
 */

const dummyData = {
    giorgio: {
        name: '죠르죠',
        description: '아무것도 하기 싫당',
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

const Profile = () => {
    const params = useParams();
    const profile = dummyData[params.username];

    return (
        <div>
            <h1>사용자 프로필</h1>
            {
                profile ? (
                    <div>
                        <h2>{profile.name}</h2>
                        <p>{profile.email}</p>
                        <p>{profile.nickname}</p>
                        <p>{profile.description}</p>
                    </div>
                ) : (
                    <p>존재하지 않는 사용자입니다.</p>
                )
            }
        </div>
    )
}

export default Profile;
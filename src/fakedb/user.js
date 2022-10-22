const FakeDBUser = () => {
    //
    const users = {
        giorgio: {
            name: '죠르죠',
            description: '으아아아아아 하기 싫어!',
            email: 'giorgio0420@naver.com',
            nickname: 'giorgio',
            role: 'admin'
        },
        ironman: {
            name: '초리초리',
            description: '힝힝',
            email: 'incheol@naver.com',
            nickname: 'plmmaster',
            role: 'manager'
        },
        yl: {
            name: 'yl',
            description: '힝힝',
            email: 'incheol@naver.com',
            nickname: 'plmmaster',
            role: 'admin'
        },
        local: {
            name: 'local',
            description: '힝힝',
            email: 'incheol@naver.com',
            nickname: 'plmmaster',
            role: 'manager'
        }    
    }

    const getUserById = (id) => {
        return users[id];
    }

    const getAllUsers = () => {
        return users;
    }

    const FakeDBUserObj = {
        getUserById,
        getAllUsers
    }

    return FakeDBUserObj;
};

export default FakeDBUser;
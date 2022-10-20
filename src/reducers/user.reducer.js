import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const initialState = {
    isLogined: false
}

const LOGIN = 'user/LOGIN';
const LOGOUT = 'user/LOGOUT';

/**
 * 1. 각 component에서는 아래의 action을 호출하게 된다.
 * 
 */
export const login = createAction(LOGIN);
export const logout = createAction(LOGOUT);

/**
 * 2. 호출된 action에 따라 아래의 리듀서를 생성하게 된다.
 * 
 */
const UserReducer = handleActions(
    {
        [LOGIN] : (state, action) => {
            produce(state, draft => {
                draft.isLogined = true;
            })
        },
        [LOGOUT] : (state, action) => {
            produce(state, draft => {
                draft.isLogined = false;
            })
        }
    },
    initialState
);

export default UserReducer;
import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

/**
 * state & variables
 */

const articleItem = {
    articleNo: '',
    title: '',
    story: '',
    comments: [],
    likes: '',
    bads: ''
};

const initialState = {
    inputArticle: {},
    articles: []
};

const CREATE = 'article/CREATE';
const UPDATE = 'article/UPDATE';
const DELETE = 'article/DELETE';

/**
 * 2. 외부에서 호출할 ACTION 정의
 */

export const createArticle = createAction(CREATE, article => article);
export const updateArticle = createAction(UPDATE, article => article);
export const deleteArticle = createAction(DELETE, articleNo => articleNo);

const ArticleReducer = handleActions(
    {
        [CREATE] : (state, {payload: article}) => {
            produce(state, draft => {
                const createObj = {...articleItem};
                createObj.title = article.title;
                draft.articles.push(createObj);
            });
        }
    },
    initialState
);

export default ArticleReducer;

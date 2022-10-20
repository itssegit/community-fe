import { combineReducers } from 'redux';
import user from './user.reducer';
import article from './article.reducer';

/**
 * redux 적용 참조 자료
 * https://freestrokes.tistory.com/160
 */

const rootReducer = combineReducers({
  user,
  article
});

export default rootReducer;
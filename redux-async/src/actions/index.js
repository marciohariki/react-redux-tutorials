//vendor
import _ from 'lodash';

//local
import jsonPlaceholder from '../api/jsonPlaceholder';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_USER = 'FETCH_USER';

export const fetchPostAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value();
};

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get('/posts');
  dispatch({ type: FETCH_POSTS, payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: FETCH_USER, payload: response.data });
};
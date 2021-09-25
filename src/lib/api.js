import axios from 'axios';
import queryString from 'query-string';

export const writePost = ({title, body, tag}) => axios.post('/api/v1/posts', { title, body, tag });
export const getPost = (id) => axios.get(`/api/v1/posts/${id}`);
export const getPostList = ({ tag, page }) => axios.get(`/api/v1/posts/?${queryString.stringify({ tag, page })}`);
export const editPost = ({id, title, body, tag}) => axios.put(`/api/v1/posts/${id}`, { title, body, tag});
export const removePost = (id) => axios.delete(`/api/v1/posts/${id}`);

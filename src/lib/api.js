import axios from "axios";

export const writeArticle = ({title, body, tags}) => axios.post('/api/posts/')
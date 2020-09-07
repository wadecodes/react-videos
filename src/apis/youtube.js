import axios from 'axios';

const KEY = 'AIzaSyCDk-lSNFisiwwlqU_CcFBh6RAF76Tuixo';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    type: 'video',
    key: KEY,
  },
});

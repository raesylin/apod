import fetcher from '@/utils/http';
import { nasaApi as apiKey } from '@/utils/constants';

export default {
  async getPicData(date) {
    // console.log(date);
    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`;
    // const url = 'http://localhost:3000/image';
    // const url = 'http://localhost:3000/youtube';
    // const url = 'http://localhost:3000/vimeo';
    const response = await fetcher(url);
    // console.log(response);
    return response;
  },
};

import fetcher from '@/utils/http';

export default {
  async getPicData(date) {
    console.log(date);
    // const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`;
    const url = 'http://localhost:3000/data';
    const response = await fetcher(url);
    return response;
  },
};

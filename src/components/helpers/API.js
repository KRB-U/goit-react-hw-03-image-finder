// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
// 39964073-185c2139e5f09a7ca52633e4a

import axios from 'axios';

// axios.defaults.baseURL = 'https://pixabay.com/api/?';

const searchItem = async (currentPage, valueInput) => {
  const BASE_URL = `https://pixabay.com/api/?`;

  const searchQueryParams = new URLSearchParams({
    key: '39964073-185c2139e5f09a7ca52633e4a',
    q: valueInput,
    image_type: 'photo',
    orientation: 'horizontal',
    //   safesearch: 'true',
    page: currentPage,
    per_page: 12,
  });

  const response = await axios.get(`${BASE_URL}${searchQueryParams}`);
  console.log(response.data.hits);

  return response.data.hits;
};

export { searchItem };

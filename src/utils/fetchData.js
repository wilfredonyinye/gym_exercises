export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      // 'X-RapidAPI-Key': '7baab676fbmshd011b73dc9109d8p1bc689jsnb7da8aebf142',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};
  
export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    // 'X-RapidAPI-Key': '7baab676fbmshd011b73dc9109d8p1bc689jsnb7da8aebf142',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}
const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apikey: '9f0ef637be31150148e58d2dacb732a2',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;
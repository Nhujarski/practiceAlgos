let networkError = () => Math.random() * 200;

const getShows = () => {
  return new Promise((resolve, reject) => {
    resolve([
      { id: 1, title: 'Stranger Things', views: '501,002' },
      { id: 2, title: 'Sense 8', views: '501,002' },
      { id: 3, title: 'Wednesday', views: '501,002' },
      { id: 4, title: 'Chilling Tales of Sabrina', views: '501,002' },
      { id: 5, title: 'Avatar: the last air bender', views: '501,002' },
    ]);
  });
};

const getLikes = () => {
  return new Promise((resolve, reject) => {
    if (networkError() > 50) {
      resolve([
        { showId: 1, numOfLikes: 3000000 },
        { showId: 2, numOfLikes: 2000000 },
        { showId: 3, numOfLikes: 1000000 },
        { showId: 4, numOfLikes: 5000000 },
        { showId: 5, numOfLikes: 14234565 },
      ]);
    } else {
      reject(Error('Network error: Network timeout!'));
    }
  });
};

const getData = () => {
  return Promise.all([getShows(), getLikes().catch((error) => error)]).then(
    ([shows, likes]) => {
      console.log('shows', shows);
      console.log('likes', likes);

      for (let i = 0; i < shows.length; i++) {
        if (shows[i] && likes[i] && shows[i].id === likes[i].showId) {
          shows[i].numOfLikes = likes[i].numOfLikes;
        } else {
          shows[i].numOfLikes = null;
        }
      }
      return shows;
    }
  );
};

getData().then((shows) => console.log('Shows:', shows));

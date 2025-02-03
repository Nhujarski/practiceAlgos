const getShows = async () => [
  { id: 1, title: 'Stranger Things', views: '501,002' },
  { id: 2, title: 'Sense 8', views: '501,002' },
  { id: 3, title: 'Wednesday', views: '501,002' },
  { id: 4, title: 'Chilling Tales of Sabrina', views: '501,002' },
  { id: 5, title: 'Avatar: the last air bender', views: '501,002' },
];

const getLikes = async () => {
  let networkError = Math.random() < 0.5;
  await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate network delay
  if (networkError) {
    throw new Error('Network error occurred while fetching likes');
  }
  return [
    { showId: 1, numOfLikes: 3000000 },
    { showId: 2, numOfLikes: 2000000 },
    { showId: 3, numOfLikes: 1000000 },
    { showId: 4, numOfLikes: 5000000 },
    { showId: 5, numOfLikes: 14234565 },
  ];
};

const getData = async () => {
  try {
    const [shows, likes] = await Promise.all([
      getShows(),
      getLikes().catch((error) => {
        console.warn('Failed to fetch likes:', error.message);
        return []; // Default to empty likes array on failure
      }),
    ]);

    // Create a mapping for fast lookup
    const likesMap = likes.reduce((acc, like) => {
      acc[like.showId] = like.numOfLikes;
      return acc;
    }, {});

    // Combine shows with likes
    return shows.map((show) => ({
      ...show,
      numOfLikes: likesMap[show.id] || null, // Default to null if no match
    }));
  } catch (error) {
    console.error('Error fetching data:', error.message);
    return []; // Return empty array on critical failure
  }
};

// Run and log the result
getData().then((shows) => console.log('Shows:', shows));

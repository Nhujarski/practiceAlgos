// Simulate fetching show info
const getShowInfo = async () => [
  { id: 1, name: 'Show A', description: 'A great show' },
  { id: 2, name: 'Show B', description: 'Another great show' },
  { id: 3, name: 'Show C', description: 'Yet another show' },
];

// Simulate fetching likes with random failure
const getShowLikes = async () => {
  const shouldFail = Math.random() < 0.5; // 50% chance to fail
  await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate network delay
  if (shouldFail)
    throw new Error('Network timeout or error occurred while fetching likes');
  return [
    { showID: 1, numberOfLikes: 100 },
    { showID: 3, numberOfLikes: 50 },
  ];
};

// Optimized combine function
async function combineShowData() {
  let shows, likesMap;

  try {
    // Fetch show info and likes data concurrently
    [shows, likesMap] = await Promise.all([
      getShowInfo(),
      getShowLikes()
        .then(
          (likes) =>
            // Convert likes array to a Map for fast lookups
            new Map(
              likes.map(({ showID, numberOfLikes }) => [showID, numberOfLikes])
            )
        )
        .catch((error) => {
          console.warn('Warning: Failed to fetch likes:', error.message);
          return new Map(); // Use an empty Map on failure
        }),
    ]);
  } catch (error) {
    console.error('Error fetching data:', error.message);
    return []; // Return empty array if both fetches fail
  }
  console.log('likes map >>>>> ', likesMap);
  // Add likes to shows efficiently
  return shows.map((show) => ({
    ...show,
    numberOfLikes: likesMap.get(show.id) ?? null, // Default to null if no likes are found
  }));
}

// Example usage
combineShowData().then((data) => console.log('data >>>:', data));

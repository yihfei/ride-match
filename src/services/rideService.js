export const fetchGrabData = async (pickupLocation, dropoffLocation) => {
  if (!currentLocation || !destination) {
    return []; // Return an empty array if locations are not provided
  }

  try {
    // Replace with your actual API endpoint
    //const response = await fetch(`/api/ride-options?current=${encodeURIComponent(currentLocation)}&destination=${encodeURIComponent(destination)}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch ride options:', error);
    return [];
  }
};
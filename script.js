// Function to redirect to the Booking Page when a "Book Now" button is clicked
document.addEventListener("DOMContentLoaded", function () {
  // Get all "Book Now" buttons
  const bookButtons = document.querySelectorAll('.book-now-btn');

  // Add event listener for each button
  bookButtons.forEach((button) => {
    button.addEventListener('click', function (event) {
      event.preventDefault();
      // Redirect to the booking page
      const roomName = button.getAttribute('data-room'); // Get the room name (you can also set room ID if needed)
      window.location.href = `booking.html?room=${roomName}`;  // This URL format can be adjusted if necessary
    });
  });
});

// Smooth scrolling when navigating to a room section (optional)
document.querySelectorAll('.room-link').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

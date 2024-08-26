// Select the elements from the DOM
const header = document.querySelector(".title header"); // Targeting the header in the title section
const themeToggleButton = document.querySelector(".secondary button"); // Targeting the theme toggle button
const body = document.querySelector("body"); // Targeting the body element to change background color
const introHeader = document.querySelector(".intro header"); // Targeting the header in the intro section
const aboutHeader = document.querySelector(".about header"); // Targeting the header in the about section
const lookingForHeader = document.querySelector(".looking-for header"); // Targeting the header in the looking-for section

// Additional selectors for text content
const introParagraph = document.querySelector(".intro p"); // Targeting the paragraph in the intro section
const aboutParagraph = document.querySelector(".about p"); // Targeting the paragraph in the about section
const lookingForParagraph = document.querySelector(".looking-for p"); // Targeting the paragraph in the looking-for section

// Define the array of blog posts
const blogPosts = [
  {
    username: "user1",
    textContent: "This is the first blog post.",
    date: "2024-08-12"
  },
  {
    username: "user2",
    textContent: "Here is another interesting blog post.",
    date: "2024-08-13"
  },
  {
    username: "user3",
    textContent: "This blog post is the third one.",
    date: "2024-08-14"
  }
];

// Changing the header text to introduce Nick Jeppeson
// The header text is updated to better reflect the user's name, enhancing the personalization of the profile.
function changeHeaderText(newText) {
  if (header) {
    header.textContent = newText; // Update the text content of the header element
  } else {
    console.error('Header element not found');
  }
}

// Implementing the theme color toggle functionality
// The toggle button switches the background between light and dark themes, enhancing readability and user experience.
// The button's colors are inverted to provide clear visual feedback on the current theme.
themeToggleButton.addEventListener("click", function() {
  if (body.style.backgroundColor === "black") {
    // Switch to light theme
    body.style.backgroundColor = "#F0EEEB"; // Light background color
    introHeader.style.color = "#0F0E12"; // Light theme text color for intro header
    aboutHeader.style.color = "#0F0E12"; // Light theme text color for about header
    lookingForHeader.style.color = "#0F0E12"; // Light theme text color for looking for header
    introParagraph.style.color = "#403C50"; // Light theme text color for intro paragraph
    aboutParagraph.style.color = "#403C50"; // Light theme text color for about paragraph
    lookingForParagraph.style.color = "#403C50"; // Light theme text color for looking for paragraph
    themeToggleButton.style.backgroundColor = "#0F0E12"; // Button color for light theme
    themeToggleButton.style.color = "white"; // Text color for the button in light theme
  } else {
    // Switch to dark theme
    body.style.backgroundColor = "black"; // Dark background color
    introHeader.style.color = "white"; // Dark theme text color for intro header
    aboutHeader.style.color = "white"; // Dark theme text color for about header
    lookingForHeader.style.color = "white"; // Dark theme text color for looking for header
    introParagraph.style.color = "white"; // Dark theme text color for intro paragraph
    aboutParagraph.style.color = "white"; // Dark theme text color for about paragraph
    lookingForParagraph.style.color = "white"; // Dark theme text color for looking for paragraph
    themeToggleButton.style.backgroundColor = "white"; // Button color for dark theme
    themeToggleButton.style.color = "#0F0E12"; // Text color for the button in dark theme
  }
});

// Create the blog post interaction functionality
// The for loop iterates over the array of blog posts, displaying each post's details using an alert.
// The "Read My Blog" button allows the user to view all blog posts in a sequential manner.
// Each blog post's details are shown using alerts, providing clear information about the content, author, and date.
function showBlogPosts() {
  for (const post of blogPosts) {
    alert(`Username: ${post.username}\nContent: ${post.textContent}\nDate: ${post.date}`);
    // Show each blog post's details in an alert
  }
}

// Attach the blog post interaction to the "Read My Blog" button
// This button is used to trigger the blog post alerts when clicked.
const readMyBlogButton = document.querySelector(".primary button"); // Targeting the "Read My Blog" button
if (readMyBlogButton) {
  readMyBlogButton.addEventListener("click", showBlogPosts); // Adding an event listener to show blog posts on button click
} else {
  console.error('Read My Blog button not found');
}

// Change the header text when the page loads
// Setting the initial header text to welcome the user and personalize the profile.
changeHeaderText("Hello, I'm Nick Jeppeson"); // Change the header text to reflect the user's name

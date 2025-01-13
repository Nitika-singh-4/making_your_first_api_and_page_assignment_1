const express = require("express");
const app = express();

/*
Task:
You need to build an API for a virtual assistant that provides customized responses.

Requirements:
1. Create a GET endpoint at "/assistant/greet".
2. The endpoint should accept a "name" as a query parameter (e.g., /assistant/greet?name=John).
3. The API should return a JSON response with:
   a. A personalized greeting using the name provided.
   b. A cheerful message based on the current day of the week.

Example Responses:
- For Monday:
  {
    "welcomeMessage": "Hello, John! Welcome to our assistant app!",
    "dayMessage": "Happy Monday! Start your week with energy!"
  }
- For Friday:
  {
    "welcomeMessage": "Hello, John! Welcome to our assistant app!",
    "dayMessage": "It's Friday! The weekend is near!"
  }
- For other days:
  {
    "welcomeMessage": "Hello, John! Welcome to our assistant app!",
    "dayMessage": "Have a wonderful day!"
  }

Add the required logic below to complete the API.
*/

// Helper function to generate a day-specific message
function getDayMessage() {
  const daysMessages = {
    0: "Have a wonderful day! It's Sunday!",
    1: "Happy Monday! Start your week with energy!",
    2: "Happy Tuesday! Keep going strong!",
    3: "It's Wednesday! You're halfway through the week!",
    4: "Happy Thursday! Almost there!",
    5: "It's Friday! The weekend is near!",
    6: "Happy Saturday! Enjoy your weekend!",
  };

  const currentDay = new Date().getDay(); // Get the current day (0-6)
  return daysMessages[currentDay] || "Have a wonderful day!";
}

// Root route for basic message
app.get("/", (req, res) => {
  res.send("Welcome to the Virtual Assistant API!");
});

// Endpoint to greet the user
app.get("/assistant/greet", (req, res) => {
  const userName = req.query.name; // Extract the name from the query parameter

  if (!userName) {
    return res.status(400).json({
      error: "Please provide a name as a query parameter (e.g., ?name=John).",
    });
  }

  const dayMessage = getDayMessage();
  const welcomeMessage = `Hello, ${userName}! Welcome to our assistant app!`;

  res.json({
    welcomeMessage,
    dayMessage,
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Virtual Assistant API is running on http://localhost:${PORT}`);
});
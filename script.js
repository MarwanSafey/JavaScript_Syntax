// Store message components in an object
const messageComponents = {
    greetings: ["Hello", "Hi", "Greetings", "Hey", "Howdy"],
    subjects: ["adventurer", "friend", "stranger", "traveler", "explorer"],
    actions: ["explore the world", "find treasure", "save the kingdom", "defeat the dragon", "discover new lands"],
  };

  // Function to randomly select an element from an array
  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  // Function to generate a random message
  function generateMessage() {
    const greeting = getRandomElement(messageComponents.greetings);
    const subject = getRandomElement(messageComponents.subjects);
    const action = getRandomElement(messageComponents.actions);
  return `${greeting}, ${subject}! It's time to ${action}!`;
  }
  
  // Generate and display the message
  const message = generateMessage();
  console.log(message);
  
  
  
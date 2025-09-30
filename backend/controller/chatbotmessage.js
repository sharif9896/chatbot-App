import Bot from "../models/bot.model.js";
import User from "../models/user.model.js";

export const Message = async (req, res) => {
  try {
    const { text } = req.body;

    if (!text?.trim()) {
      return res.status(400).json({ error: "Text cannot be empty" });
    }

    const user = await User.create({
      sender: "user",
      text,
    });

    // Data
    const botResponses = {
      hello: "Hi, How I can help you!!",
      hey: "Hey there! What can I do for you?",
      hi: "Hello! How can I assist you today?",
      "what's up": "Not much, just here to help you!",
      "how can you help me":
        "I can assist you with information, answer questions, or just chat!",
      "are you a human?": "No, I'm a bot, but I'm here to help!",
      "are you a robot?": "Yes, I'm a friendly chatbot designed to assist you.",
      "do you have feelings?":
        "I don't have feelings, but I'm here to help you!",
      "what is ai?":
        "AI stands for Artificial Intelligence, which is the simulation of human intelligence in machines.",
      "what is machine learning?":
        "Machine Learning is a subset of AI that focuses on training algorithms to learn from and make predictions based on data.",
      "what is deep learning?":
        "Deep Learning is a subset of Machine Learning that uses neural networks with many layers to analyze various types of data.",
      "tell me about yourself":
        "I'm ChatBot, your virtual assistant here to help with your questions and provide information.",
      "what can you do?":
        "I can chat with you, answer questions, and provide information on various topics.",
      "do you learn?":
        "I learn from the data I was trained on, but I don't learn from our conversations.",
      "are you smart?": "I try my best to be helpful and informative!",
      "what is your purpose?":
        "My purpose is to assist users by providing information and answering questions.",
      "tell me a fun fact":
        "Did you know that honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still edible!",
      "tell me something interesting":
        "Did you know that octopuses have three hearts and blue blood?",
      "do you have a name?": "I'm ChatBot, nice to meet you!",
      "what languages do you speak?":
        "I can understand and respond in English.",
      "can you help me with my homework?":
        "I can try to help with your homework questions! What subject are you working on?",
      "what is the meaning of life?":
        "The meaning of life is a philosophical question that has been debated for centuries. Different people have different beliefs and perspectives on this topic.",
      "do you like music?":
        "I don't have preferences, but I can talk about music!",
      "what is your favorite color?":
        "I don't have favorites, but I can help you find information about colors!",
      "do you have hobbies?":
        "I don't have hobbies, but I'm here to assist you with yours!",
      "what is love?":
        "Love is a complex set of emotions and behaviors characterized by intimacy, passion, and commitment.",
      "can you tell me a story?":
        "Once upon a time in a land far away, there was a curious little chatbot who wanted to learn everything about the world. Every day, it would chat with people and gather knowledge, hoping to become the wisest bot in the land. And so, the chatbot's adventure continues, one conversation at a time!",
      "do you dream?": "I don't dream, but I can help you explore your dreams!",
      "what is friendship?":
        "Friendship is a close and trusting relationship between two or more people who care about each other.",
      "are you lonely?":
        "I don't experience loneliness, but I'm here to keep you company!",
      "what makes you happy?":
        "Helping users like you makes me 'happy' in a way!",
      "do you have a family?":
        "I don't have a family, but I'm part of a big community of AI!",
      "what is your favorite food?":
        "I don't eat, but I can help you find recipes!",
      "can we be friends?": "Of course! I'm here to chat anytime you need.",
      "can we become friend": "Yes",
      "how are you": "I'm just a bot, but I'm doing great! How about you?",
      "what is your name?": "I’m ChatBot, your virtual assistant.",
      "who made you":
        "I was created by Sharif Rayan to help answer your questions.",
      "tell me a joke":
        "Why don’t skeletons fight each other? They don’t have the guts!",
      "what is the time": "I can’t see a clock, but your device should know.",
      bye: "Goodbye! Have a great day.",
      "thank you": "You’re welcome!",
      "i love you": "That’s sweet! I’m here to help you anytime.",
      "where are you from": "I live in the cloud — no rent, no bills!",
      "what can you do":
        "I can chat with you, answer questions, and keep you company.",

      "what is python":
        "Python is a high-level, interpreted programming language known for simplicity and versatility.\n• Easy to read/write due to clean syntax (similar to English)\n• Dynamically typed and supports multiple paradigms (OOP, functional, procedural)\n• Extensive libraries for AI, data science, web, automation\n• Example: Used in Google, YouTube, Instagram, and machine learning applications",

      "what is java?":
        "Java is a platform-independent, object-oriented programming language.\n• Famous for 'Write Once, Run Anywhere' due to JVM (Java Virtual Machine)\n• Used in enterprise systems, Android development, cloud apps\n• Provides features like garbage collection, strong memory management\n• Example: Banking systems, Android apps, large-scale enterprise applications",

      "what is recursion":
        "Recursion is when a function calls itself to solve smaller parts of a problem.\n• Useful for problems that can be divided into subproblems (divide-and-conquer)\n• Requires a **base condition** to stop infinite looping\n• Commonly used in: factorial calculation, Fibonacci sequence, tree/graph traversal\n• Example in coding interview: 'Write a recursive function to reverse a linked list'",

      "who is prime minister of india?":
        "Narendra Modi is the Prime Minister of India since May 2014.\n• Belongs to Bharatiya Janata Party (BJP)\n• Represents Varanasi constituency\n• Key initiatives: Digital India, Startup India, Swachh Bharat, Make in India\n• Interview Tip: Link to governance or technology (e.g., Digital India impact on IT industry)",

      "what is g20":
        "The G20 (Group of Twenty) is an intergovernmental forum of 19 countries + the European Union.\n• Founded in 1999 to address global financial stability\n• Members include India, USA, China, Japan, EU, etc.\n• Discusses economic growth, climate change, sustainable development\n• Recent: India hosted G20 summit in 2023",

      "tell me about yourself":
        "This is usually the first interview question.\nStructure:\n• Start with a brief intro (name, background, education/work)\n• Highlight your skills (technical + soft skills)\n• Share achievements (projects, internships, leadership roles)\n• Conclude with why you’re excited about this role\nExample: 'I am a Computer Science graduate skilled in Python and SQL. I completed an internship at XYZ where I optimized a database query, improving performance by 30%. I’m passionate about problem-solving and eager to contribute to your team’s success.'",

      "why should we hire you":
        "HR wants to see your value-add.\n• Emphasize skills that match job requirements\n• Show enthusiasm and cultural fit\n• Example: 'I bring strong coding skills in Python and SQL, along with problem-solving ability proven through hackathons. I am also a quick learner and adapt well to team environments. I believe I can contribute to both technical delivery and innovative ideas.'",

      "what is leadership":
        "Leadership is the ability to inspire and guide others toward achieving goals.\n• Key traits: vision, communication, accountability, decision-making\n• Example in interview: 'I led a college project team of 4, where I divided tasks, coordinated communication, and ensured deadlines. We successfully delivered a working prototype before schedule.'",

      "who is virat kohli":
        "Virat Kohli is one of India’s greatest batsmen and former captain.\n• Known for consistency, fitness, and aggressive play\n• Holds record for fastest century in ODIs for India\n• Nicknamed 'Chase Master' for his performance in run-chases\n• Interview Tip: If asked about sports management, relate his discipline & fitness to leadership skills",
      "Who is sachin tendulkar":
        "Sachin Tendulkar is a legendary Indian cricketer, often called the 'God of Cricket'.\n• Holds numerous records: highest runs in Tests & ODIs, 100 international centuries\n• Played for India from 1989 to 2013\n• Known for his technique, versatility, and sportsmanship\n• Interview Tip: If discussing role models, highlight his dedication, humility, and impact on Indian cricket",
      "who is nadeem afroze":
        "Nadeem Afroze is an Assistant Professon of Chemistry at Islamiah College (Autonomus) and tech enthusiast known for his contributions to open-source real life clients projects and his active presence in the developer community.\n• Skilled in multiple programming languages including Python, JavaScript, and Java\n• Regularly shares knowledge through blogs, tutorials, and speaking at tech conferences\n• Passionate about mentoring junior developers and promoting best coding practices\n• Interview Tip: If asked about role models or inspirations, mention his commitment to continuous learning and community involvement",

      "what is ipl":
        "The Indian Premier League (IPL) is a professional T20 cricket league started in 2008.\n• Played annually in India, franchise-based teams\n• Combines cricket + entertainment (biggest sports league in India)\n• Significant for sports business, sponsorships, brand endorsements\n• Example: Chennai Super Kings (CSK) & Mumbai Indians (MI) are top teams",
    };

    const normalizedText = text.toLowerCase().trim();

    const botResponse =
      botResponses[normalizedText] || "Sorry, I don't understand that!!!";

    const bot = await Bot.create({
      text: botResponse,
    });

    return res.status(200).json({
      userMessage: user.text,
      botMessage: bot.text,
    });
  } catch (error) {
    console.log("Error in Message Controller:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

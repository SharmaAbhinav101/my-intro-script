#!/usr/bin/env node

// ─── Data ───────────────────────────────────────────
const profile = {
  name: "Abhinav Sharma",
  role: "Full Stack Developer (Learning)",
  location: "Meerut, India 🇮🇳",
  contact: {
    github: "github.com/SharmaAbhinav101",   
    email: "abhinav101220@email.com",          
  },
};

const skills = {
  "Languages":   ["JavaScript", "HTML", "CSS"],
  "Runtime":     ["Node.js"],
  "Tools":       ["Git & GitHub", "VS Code"],
  "Soft Skills": ["Problem Solving", "Consistent Learner"],
};

const currentlyLearning = ["React", "Express.js", "REST APIs"];

const quote = {
  text: "The best way to get started is to quit talking and begin doing.",
  author: "Walt Disney",
};


const line  = (char = "─", len = 44) => char.repeat(len);
const label = (text) => `\x1b[36m${text}\x1b[0m`;   
const bold  = (text) => `\x1b[1m${text}\x1b[0m`;    


console.log("\n" + line());
console.log(bold(`👋->  Hi, I'm ${profile.name}!`));
console.log(`  ${profile.role}`);
console.log(`  📍 ${profile.location}`);
console.log(line());

console.log(`\n${label("🚀->  Skills")}`);
for (const [category, list] of Object.entries(skills)) {
  console.log(`  ${bold(category + ":")} ${list.join(", ")}`);
}

console.log(`\n${label("📚 -> Currently Learning")}`);
currentlyLearning.forEach(item => console.log(`   → ${item}`));

console.log(`\n${label("🔗 -> Find Me Online")}`);
console.log(`   GitHub : ${profile.contact.github}`);
console.log(`   Email  : ${profile.contact.email}`);

console.log(`\n${label("💡->  Quote")}`);
console.log(`   "${quote.text}"`);
console.log(`   — ${quote.author}`);

console.log("\n" + line() + "\n");
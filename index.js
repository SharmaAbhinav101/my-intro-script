// index.js

const name = "Abhinav Sharma";  // ← Change this

const skills = [
  "JavaScript",
  "Node.js",
  "Problem Solving",
  "Git & GitHub",    // ← Add/remove your skills
];

const quote = "The best way to get started is to quit talking and begin doing. – Walt Disney";

console.log("========================================");
console.log(`👋  Hi, I'm ${name}!`);
console.log("========================================");
console.log("\n🚀 My Skills:");
skills.forEach(skill => console.log(`   ✅ ${skill}`));
console.log("\n💡 My Motivational Quote:");
console.log(`   "${quote}"`);
console.log("\n========================================\n");
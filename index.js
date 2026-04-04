const profile = {
  name: "Abhinav Sharma",
  role: "Full Stack Developer (Learning)",
  location: "Meerut, India",
  contact: "github.com/SharmaAbhinav101",   

  skills: {
    languages:  ["JavaScript", "HTML", "CSS"],
    tools:      ["Node.js", "Git & GitHub", "VS Code"],
    learning:   ["React", "Express.js", "MongoDB"],
  },

  quote: "The best way to get started is to quit talking and begin doing. – Walt Disney",
};

const line = "=".repeat(45);

console.log(line);
console.log(`👋  Hi, I'm ${profile.name}`);
console.log(`💼  ${profile.role}`);
console.log(`📍  ${profile.location}`);
console.log(`🔗  ${profile.contact}`);
console.log(line);

console.log("\n🛠️  Skills:");
Object.entries(profile.skills).forEach(([category, list]) => {
  console.log(`\n   ${category.toUpperCase()}`);
  list.forEach(item => console.log(`      ✅ ${item}`));
});

console.log(`\n💡 "${profile.quote}"`);
console.log(`\n📅  Last updated: ${new Date().toLocaleDateString("en-IN")}`);
console.log(`\n${line}\n`);
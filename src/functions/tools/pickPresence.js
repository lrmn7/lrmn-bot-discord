const { ActivityType } = require("discord.js");

/**
 * @type {{type: ActivityType; text: string; status: string}[]}
 */
const activities = [
  //
  {
    type: 3,
    text: "your dreams 💖",
    status: "online",
  },
  {
    type: 2,
    text: "your heart 💗",
    status: "idle",
  },
  {
    type: 1,
    text: "your mind 💦",
    status: "dnd",
  },
];
async function pickPresence(client) {
  const choice = activities[Math.trunc(Math.random() * activities.length)];
  await client.user.setPresence({
    activities: [
      {
        name: choice.text,
        type: choice.type,
      },
    ],
    status: choice.status,
  });
}
module.exports = { pickPresence };

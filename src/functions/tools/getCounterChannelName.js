function getCounterChannelName(memberCount) {
  let name;

  switch (true) {
    case memberCount < 1000:
      name = `👥 ${memberCount} member`;
      break;
    case memberCount < 1000000:
      name = `👥 ${Math.floor(memberCount / 1000)}k member Discord`;
      break;
    default:
      name = `👥 ${Math.floor(memberCount / 1000000)}M member Discord`;
      break;
  }

  return name;
}
module.exports = { getCounterChannelName };
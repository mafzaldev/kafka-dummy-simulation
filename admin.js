const { kafka } = require("./client");

(async function init() {
  const admin = kafka.admin();
  admin.connect();
  console.log("Admin connected.");

  console.log("Creating topic [rider-updates]");
  admin.createTopics({
    topics: [
      {
        topic: "rider-updates",
        numPartitions: 2,
      },
    ],
  });
  console.log("Topic created [rider-updates]");

  await admin.disconnect();
  console.log("Admin disconnected.");
})();

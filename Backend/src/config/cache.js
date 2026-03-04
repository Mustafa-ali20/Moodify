const Redis = require("ioredis").default; //use default will give u suggestions

const redis = new Redis({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  password: process.env.REDIS_PASSWORD,
});

redis.on("connect", () => {
  console.log("server is connected to Redis");
});

redis.on("error", (error) => {
  console.log(error);
});

module.exports = redis;

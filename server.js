const express = require('express');
const axios = require('axios').default;
const client = require('./client'); // ✅ Redis client
const app = express();

app.get('/', async (req, res) => {
    const cacheValue = await client.get('todos'); // ✅ Check Redis cache

    if (cacheValue) return res.json(JSON.parse(cacheValue)); // ✅ Cache hit

    const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos'); // ✅ Fetch if cache miss
    await client.set('todos', JSON.stringify(data)); // ✅ Store in Redis
    await client.expire('todos', 30); // ✅ TTL of 30 seconds

    return res.json(data); // ✅ Respond to client
});

app.listen(9000, () => {
  console.log('✅ Server is running on http://localhost:9000');
});

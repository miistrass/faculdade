const fastify = require('fastify')({ logger: true });

const port = process.env.PORT || 8888;

fastify.get('/', async () => {
  return { message: 'Hello from Fastify + Docker!' };
});

const start = async () => {
  try {
    await fastify.listen({ port, host: '0.0.0.0' }); // host 0.0.0.0 é essencial no Docker
    console.log(`Server running on port ${port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();

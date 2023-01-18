'use strict'

module.exports = async function (fastify, opts) {
  fastify.route({
    method: "GET",
    url: "/",
    schema: {
      querystring: {
        name: { type: "string" }
      },
      response: {
        200: {
          type: "object",
          properties: {
            hello: { type: "string" }
          }
        }
      }
    },
    prehandler: async (request, reply) => {
      // authentication check for example
    },
    handler: async (request, reply) => {
      return { hello: "world" };
    }
  })
}

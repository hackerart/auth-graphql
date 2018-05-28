const graphql = require('graphql');
const { GraphQLSchema } = graphql;

const query = require('./types/root_query');
const mutation = require('./mutation/mutations');

module.exports = new GraphQLSchema({ query, mutation });

const { GraphQLObjectType } = require('graphql');
const auth = require('./auth');

const mutations = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        ...auth
    }
});

module.exports = mutations;

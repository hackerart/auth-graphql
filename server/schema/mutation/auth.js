const { GraphQLString } = require('graphql');
const UserType = require('../types/UserType');
const { signup, login } = require('../../services/auth');

const credentials = {
    email: { type: GraphQLString},
    password: { type: GraphQLString }
};

module.exports = {
    signup: {
        type: UserType,
        args: { ...credentials },
        resolve(parentValue, args, req) {
            return signup({ ...args, req });
        }
    },
    login: {
        type: UserType,
            args: { ...credentials },
        resolve(parentValue, args, req) {
            return login({ ...args, req });
        }
    },
    logout: {
        type: UserType,
            resolve(parentValue, args, req) {
            const { user } = req;
            req.logout();
            return user;
        }
    }
};

import { resolvers as demandResolvers } from './demand/Demand';

const resolvers = {
    ...demandResolvers,

    Query: {
        ...demandResolvers.Query,
    },
};

export default resolvers;
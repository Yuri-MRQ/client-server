import { gql } from 'apollo-server-express';
import { typeDefs as clientTypeDefs } from './client/Client';
import { typeDefs as demandsTypeDefs} from './demand/Demand';

const typeDefs = gql `
    type: Query {
        _root: String
    }

    ${clientTypeDefs}
    ${demandsTypeDefs}
`;

export default typeDefs
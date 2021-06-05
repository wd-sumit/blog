import { gql } from 'apollo-server-express';

import rootTypeDefs from './root.type';

export default [rootTypeDefs(gql)];

// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { DataVisitation, ICSRverticals } = initSchema(schema);

export {
  DataVisitation,
  ICSRverticals
};
import * as dotenv from 'dotenv';

dotenv.config();

const APP_PORT = +process.env.APP_PORT || 4001;
const SPLURGE_SWANLING_MICROSERVICE_URL =
  process.env.SPLURGE_SWANLING_MICROSERVICE_URL || 'http://127.0.0.1:4000/swanling';

export { APP_PORT, SPLURGE_SWANLING_MICROSERVICE_URL };

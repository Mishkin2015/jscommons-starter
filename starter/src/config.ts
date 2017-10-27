import { config } from 'dotenv';
config();

import getBooleanOption from 'jscommons/dist/config/getBooleanOption';
import getNumberOption from 'jscommons/dist/config/getNumberOption';
import getStringOption from 'jscommons/dist/config/getStringOption';
import * as os from 'os';

const DEFAULT_EXPRESS_PORT = 80;
const DEFAULT_MORGAN_DIR = `${process.cwd()}/logs/access`;

export default {
  logger: {
    cloudWatch: {
      awsConfig: {
        accessKeyId: getStringOption(process.env.CLOUDWATCH_ACCESS_KEY_ID),
        region: getStringOption(process.env.CLOUDWATCH_REGION),
        secretAccessKey: getStringOption(process.env.CLOUDWATCH_SECRET_ACCESS_KEY),
      },
      enabled: getBooleanOption(process.env.CLOUDWATCH_ENABLED, false),
      level: getStringOption(process.env.CLOUDWATCH_LEVEL, 'info'),
      logGroupName: getStringOption(process.env.CLOUDWATCH_LOG_GROUP_NAME, 'PROJECT_SLUG'),
      logStreamName: getStringOption(process.env.CLOUDWATCH_LOG_STREAM_NAME, os.hostname()),
    },
    console: {
      level: getStringOption(process.env.CONSOLE_LEVEL, 'info'),
    },
  },
  presenter: {
    express: {
      bodyParserLimit: getStringOption(process.env.EXPRESS_BODY_PARSER_LIMIT, '5mb'),
      customRoute: getStringOption(process.env.EXPRESS_CUSTOM_ROUTE, 'status'),
      customRouteText: getStringOption(process.env.EXPRESS_CUSTOM_ROUTE_TEXT, 'ok'),
      morganDirectory: getStringOption(process.env.EXPRESS_MORGAN_DIRECTORY, DEFAULT_MORGAN_DIR),
      port: getNumberOption(process.env.EXPRESS_PORT, DEFAULT_EXPRESS_PORT),
    },
  },
  repo: {
    facade: getStringOption(process.env.REPO_FACADE),
  },
  translator: {
    facade: getStringOption(process.env.LANG, 'en'),
  },
};

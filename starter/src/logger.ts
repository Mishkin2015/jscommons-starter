import commonWinston from 'jscommons/dist/winston';
import config from './config';

export default commonWinston({
  cloudWatch: {
    awsConfig: {
      accessKeyId: config.logger.cloudWatch.awsConfig.accessKeyId,
      region: config.logger.cloudWatch.awsConfig.region,
      secretAccessKey: config.logger.cloudWatch.awsConfig.secretAccessKey,
    },
    enabled: config.logger.cloudWatch.enabled,
    level: config.logger.cloudWatch.level,
    logGroupName: config.logger.cloudWatch.logGroupName,
    logStreamName: config.logger.cloudWatch.logStreamName,
  },
  console: {
    level: config.logger.console.level,
  },
});

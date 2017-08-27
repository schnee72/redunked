import webpack from 'webpack';
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';
import config from '../webpack.config.prod';

config.plugins.push(new BundleAnalyzerPlugin());

process.env.NODE_ENV = 'production';

const bundler = webpack(config);

bundler.run((err, stats) => {
  if (err) {
    throw new Error(err);
  }

  console.log(stats); // eslint-disable-line no-console
});

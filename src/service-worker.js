/**
 * Taken from https://twitter.com/ekafyi/status/1409555938214703107
 */
import { precacheAndRoute } from 'workbox-precaching';
import { build, files, version } from '$service-worker';

precacheAndRoute([
  ...build.map((file) => {
    console.log('=== $service-worker build ===', file); // eslint-disable-line no-console
    return {
      url: file,
      revision: null,
    };
  }),
  ...files.map((file) => {
    console.log('=== $service-worker files ===', file); // eslint-disable-line no-console
    return {
      url: file,
      revision: `${version}`,
    };
  }),
]);

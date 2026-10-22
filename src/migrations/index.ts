import * as migration_20261022_025621_baseline from './20261022_025621_baseline';
import * as migration_20261022_025632_payload_3_91 from './20261022_025632_payload_3_91';

export const migrations = [
  {
    up: migration_20261022_025621_baseline.up,
    down: migration_20261022_025621_baseline.down,
    name: '20261022_025621_baseline',
  },
  {
    up: migration_20261022_025632_payload_3_91.up,
    down: migration_20261022_025632_payload_3_91.down,
    name: '20261022_025632_payload_3_91'
  },
];

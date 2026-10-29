import * as migration_20261022_025621_baseline from './20261022_025621_baseline';
import * as migration_20261022_025632_payload_3_91 from './20261022_025632_payload_3_91';
import * as migration_20261028_020756_tags from './20261028_020756_tags';
import * as migration_20261029_034238_skills from './20261029_034238_skills';

export const migrations = [
  {
    up: migration_20261022_025621_baseline.up,
    down: migration_20261022_025621_baseline.down,
    name: '20261022_025621_baseline',
  },
  {
    up: migration_20261022_025632_payload_3_91.up,
    down: migration_20261022_025632_payload_3_91.down,
    name: '20261022_025632_payload_3_91',
  },
  {
    up: migration_20261028_020756_tags.up,
    down: migration_20261028_020756_tags.down,
    name: '20261028_020756_tags',
  },
  {
    up: migration_20261029_034238_skills.up,
    down: migration_20261029_034238_skills.down,
    name: '20261029_034238_skills'
  },
];

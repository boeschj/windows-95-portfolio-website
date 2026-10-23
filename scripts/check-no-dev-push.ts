import { getPayload } from 'payload';
import config from '../src/payload.config';

const DEV_PUSH_BATCH = -1;

const payload = await getPayload({ config });
const { totalDocs } = await payload.count({
    collection: 'payload-migrations',
    where: { batch: { equals: DEV_PUSH_BATCH } },
});

if (totalDocs > 0) {
    payload.logger.error(
        'payload_migrations has a dev-mode schema push marker (batch -1), so `payload migrate` would skip pending migrations. Remove the marker before deploying.'
    );
    process.exit(1);
}

process.exit(0);

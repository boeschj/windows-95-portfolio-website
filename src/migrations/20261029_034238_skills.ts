import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "skills" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"summary" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  ALTER TABLE "tags" ADD COLUMN "_order" varchar;
  CREATE INDEX "tags__order_idx" ON "tags" USING btree ("_order");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "skills" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "skills" CASCADE;
  DROP INDEX "tags__order_idx";
  ALTER TABLE "tags" DROP COLUMN "_order";`)
}

import { MigrationEventTypes, MigrationListener } from "@0xtender/evm-helpers";
import { existsSync } from "fs";
import { join } from "path";

const listener = new MigrationListener<MigrationEventTypes>();


listener.on("event_data", async (...data) => {
  console.log(data)
});

const run_worker = async () => {
  // async import to skip build errors
  /// init for older data
  if (existsSync(join(__dirname, "./migration.ts"))) {
    const migrationPath = "./migration";
    const { migrate } = await import(`${migrationPath}`);
    await migrate(listener);
  } else {
    console.log(`Exiting: no migration file generated`);
  }
};

run_worker().catch(console.error);

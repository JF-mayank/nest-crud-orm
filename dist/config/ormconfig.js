"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSourceOptions = void 0;
const typeorm_1 = require("typeorm");
const dotenv = require("dotenv");
dotenv.config();
exports.dataSourceOptions = {
    type: 'postgres',
    replication: {
        master: {
            host: process.env.WRITE_DB_HOST,
            port: +process.env.WRITE_DB_PORT,
            username: process.env.WRITE_DB_USERNAME,
            database: process.env.WRITE_DB_NAME,
        },
        slaves: [{
                host: process.env.READ_DB_HOST,
                port: +process.env.READ_DB_PORT,
                username: process.env.READ_DB_USERNAME,
                database: process.env.READ_DB_NAME,
            }]
    },
    entities: ['dist/**/**/*.entity.{ts,js}'],
    synchronize: false,
    logging: true,
    migrations: ['dist/db/migrations/*{.ts,.js}'],
    migrationsRun: true,
};
const dataSource = new typeorm_1.DataSource(exports.dataSourceOptions);
exports.default = dataSource;
//# sourceMappingURL=ormconfig.js.map
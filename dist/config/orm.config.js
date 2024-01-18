"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrmConfig = exports.typeOrmModuleOptions = void 0;
const config_1 = require("@nestjs/config");
exports.typeOrmModuleOptions = {
    imports: [config_1.ConfigModule],
    inject: [config_1.ConfigService],
    useFactory: (configService) => {
        const dynamicOptions = {
            type: 'postgres',
            replication: {
                master: {
                    host: configService.get('WRITE_DB_HOST'),
                    port: +configService.get('WRITE_DB_PORT'),
                    username: configService.get('WRITE_DB_USERNAME'),
                    database: configService.get('WRITE_DB_NAME'),
                },
                slaves: [{
                        host: configService.get('READ_DB_HOST'),
                        port: +configService.get('READ_DB_PORT'),
                        username: configService.get('READ_DB_USERNAME'),
                        database: configService.get('READ_DB_NAME'),
                    }]
            },
            entities: ['dist/**/**/*.entity.{ts,js}'],
        };
        return {
            ...exports.typeOrmModuleOptions,
            ...dynamicOptions,
        };
    },
};
exports.OrmConfig = {
    ...exports.typeOrmModuleOptions,
    migrationsTableName: "migrations",
    migrations: ["src/migrations/*.ts"],
    cli: {
        "migrationsDir": "src/migrations"
    }
};
exports.default = exports.OrmConfig;
//# sourceMappingURL=orm.config.js.map
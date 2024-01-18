"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migrations1705557606606 = void 0;
class Migrations1705557606606 {
    constructor() {
        this.name = 'Migrations1705557606606';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" ADD "last_name" character varying`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "last_name"`);
    }
}
exports.Migrations1705557606606 = Migrations1705557606606;
//# sourceMappingURL=1705557606606-migrations.js.map
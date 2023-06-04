"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_controller_1 = require("./user/user.controller");
const user_service_1 = require("./user/user.service");
const user_entity_1 = require("./user/user.entity");
const group_controller_1 = require("./group/group.controller");
const group_service_1 = require("./group/group.service");
const group_entity_1 = require("./group/group.entity");
const transaction_controller_1 = require("./transaction/transaction.controller");
const transaction_service_1 = require("./transaction/transaction.service");
const transaction_entity_1 = require("./transaction/transaction.entity");
const local_strategy_1 = require("./auth/local.strategy");
const roles_guard_1 = require("./auth/roles.guard");
const mail_service_1 = require("./mail/mail.service");
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: 'password',
                database: 'mydatabase',
                entities: [],
                synchronize: true,
            }),
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.User, group_entity_1.Group, transaction_entity_1.Transaction]),
        ],
        controllers: [user_controller_1.UserController, group_controller_1.GroupController, transaction_controller_1.TransactionController],
        providers: [
            user_service_1.UserService,
            group_service_1.GroupService,
            transaction_service_1.TransactionService,
            local_strategy_1.LocalStrategy,
            roles_guard_1.RolesGuard,
            mail_service_1.MailService,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map
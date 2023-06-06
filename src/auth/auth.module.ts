import { Module } from "@nestjs/common";
import { AuthController } from "./controller/auth.controller";
import { ClientEntity } from "./entities/client.entity";
import { AuthService } from "./service/auth.service";
import {TypeOrmModule} from "@nestjs/typeorm"

@Module({
    imports:[TypeOrmModule.forFeature([ClientEntity])],
    controllers: [AuthController],
    providers:[AuthService],
    exports:[AuthService]
})

export class AuthModule{}
import { IsBoolean, IsObject } from "class-validator"
import { ClientEntity } from "../entities/client.entity"


export class RegisterClientResponseDto{
    @IsBoolean()
    success: boolean;

    data: ClientEntity;
}
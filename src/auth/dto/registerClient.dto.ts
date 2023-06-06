import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class RegisterClientDto{
    @IsString()
    @IsOptional()
    fullName: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    phoneNumber: string;

    @IsString()
    @IsOptional()
    location: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}
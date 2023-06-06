import { Bind, Body, Controller, Get, Param, ParseIntPipe, ParseUUIDPipe, Post, ValidationPipe } from "@nestjs/common";
import { RegisterClientDto } from "../dto/registerClient.dto";
import { RegisterClientResponseDto } from "../dto/registerClientResponse.dto";
import { AuthService } from '../service/auth.service';

@Controller('auth')
export class AuthController{
    constructor(private authService: AuthService) {}

  
    @Post('client')
    async createClient(@Body(new ValidationPipe()) request:RegisterClientDto):Promise<RegisterClientResponseDto>{
        return await this.authService.createClient(request);
    }
}
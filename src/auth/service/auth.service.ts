import { HttpException, Injectable } from "@nestjs/common";
import { ClientEntity } from "../entities/client.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { RegisterClientDto } from "../dto/registerClient.dto";
import { RegisterClientResponseDto } from "../dto/registerClientResponse.dto";
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService{

    constructor(
        @InjectRepository(ClientEntity)
        private readonly clientsRepository:Repository<ClientEntity>,

    ){}

    async createClient(
        createClient: RegisterClientDto,
    ): Promise<RegisterClientResponseDto>{
        const client = new ClientEntity();
        if (createClient.fullName) client.fullName = createClient.fullName;
        if (createClient.phoneNumber) client.phoneNumber = createClient.phoneNumber;
        client.email = createClient.email;
        client.location = createClient.location;
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(createClient.password, salt);
        client.password = hashedPassword
        const savedClient = await this.clientsRepository.save(client);
        return {
            success: true,
            data: savedClient,
        };
    }

    async checkIfEmailExists(email: string): Promise<boolean> {
    const client = await this.clientsRepository.findOne({ where: { email } });
    if (client) {
      throw new HttpException('Email already exists', 400);
    }
    return false;
  }
}
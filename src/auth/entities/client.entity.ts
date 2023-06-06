import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ClientEntity{
    @PrimaryGeneratedColumn('uuid')
    id?: string;

    @Column('text',{nullable:true})
    fullName?: string;

    @Column('text')
    email: string;

    @Column('text',{nullable:true})
    phoneNumber?: string;

    @Column('text')
    location: string;

    @Column('text')
    password: string;

}
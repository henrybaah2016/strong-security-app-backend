import { DataSource, DataSourceOptions } from "typeorm";
import * as dotenv from 'dotenv'

dotenv.config();

const env = process.env;

const url = new URL(env.DATABASE_URL);
const db = url.pathname.replace('/', '').trim();


export const ormOptions:  DataSourceOptions = ({
    type: "postgres",
    host: url.hostname,
    port: Number(url.port),
    username: url.username,
    password: url.password,
    database: db,
    synchronize: true,
    logging: true,
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    dropSchema:false,
    migrationsRun: false,
})

export const  dataSource = new DataSource(ormOptions);
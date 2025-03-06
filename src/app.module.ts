// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

// @Module({
//   imports: [],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}



import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DonaBenModule } from './donaciones-beneficiarios/donaben.module';
import { RolModule } from './rol/rol.module';
import { UsuarioModule } from './usuario/usuario.module';
import { UsuarioRolModule } from './Usuario_Rol/Usuario_Rol.module';
import { BeneficiarioModule } from './beneficiarios/beneficiarios.module';
import { DonanteModule } from './donaciones/donaciones.module';


@Module({
  imports: [
    ConfigModule.forRoot(), // Carga las variables de .env
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT ?? '5438', 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    DonaBenModule,
    RolModule,
    UsuarioModule,
    UsuarioRolModule,
    BeneficiarioModule,
    DonanteModule


  ],
})
export class AppModule {}

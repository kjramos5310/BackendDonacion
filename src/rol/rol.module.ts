import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rol } from './rol.entity';
import { RolService } from './rol.service';
import { RolController } from './rol.controller';
import { UsuarioRol } from 'src/Usuario_Rol/Usuario_Rol.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Rol, UsuarioRol])],
  providers: [RolService],
  controllers: [RolController],
  exports: [RolService]
})
export class RolModule {}
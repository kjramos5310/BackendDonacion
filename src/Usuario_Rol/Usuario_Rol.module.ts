import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioRol } from './Usuario_Rol.entity';
import { UsuarioRolService } from './Usuario_Rol.service';
import { UsuarioRolController } from './Usuario_Rol.controller';
import { Usuario } from 'src/usuario/usuario.entity';
import { Rol } from 'src/rol/rol.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UsuarioRol, Usuario, Rol])],
  providers: [UsuarioRolService],
  controllers: [UsuarioRolController],
  exports: [UsuarioRolService]
})
export class UsuarioRolModule { }
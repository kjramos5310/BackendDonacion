import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, UpdateDateColumn, CreateDateColumn } from 'typeorm';
import { UsuarioRol } from 'src/Usuario_Rol/Usuario_Rol.entity';


@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id_usuario?: number;

  @Column()
  nombre_completo?: string;

  @Column()
  email?: string;

  @Column()
  telefono: string;

  @Column()
  estado: string;

  @CreateDateColumn()
  fecha_creacion: Date;

  @UpdateDateColumn()
  ultima_conexion?: Date;

  @Column()
  password_hash: string;

  @OneToMany(() => UsuarioRol, usuarioRol => usuarioRol.id_usuario, {cascade: true})
  usuarioRoles: UsuarioRol[];
  

}
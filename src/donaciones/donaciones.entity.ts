import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { DonacionBeneficiario } from 'src/donaciones-beneficiarios/donaben.entity';

@Entity('donante')
export class Donante {
  @PrimaryGeneratedColumn()
  id_donante1: number; // Cambiado a "id_donante" para reflejar que es un donante

  @Column()
  nombre: string; // Nombre del donante (persona u organización)

  @Column()
  tipo_donante: string; // Tipo de donante (ej: "individual", "empresa", "organización")

  @Column()
  contacto: string; // Información de contacto (teléfono, correo, etc.)

  @Column()
  ubicacion: string; // Ubicación del donante

  @Column({ type: 'text', nullable: true })
  notas_adicionales?: string; // Notas adicionales sobre el donante

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha_registro: Date; // Fecha en que se registró el donante

  @OneToMany(() => DonacionBeneficiario, donacionBeneficiario => donacionBeneficiario.donante)
  donacionesBeneficiarios: DonacionBeneficiario[]; // Relación con las donaciones asignadas a beneficiarios
}
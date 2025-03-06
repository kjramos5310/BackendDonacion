import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { DonacionBeneficiario } from 'src/donaciones-beneficiarios/donaben.entity';

@Entity('beneficiario')
export class Beneficiario {
  @PrimaryGeneratedColumn()
  id_beneficiario: number;

  @Column()
  nombre: string;

  @Column({ type: 'enum', enum: ['individual', 'organización'] })
  tipo: string;

  @Column()
  contacto: string;

  @Column()
  ubicacion: string;

  @Column({ type: 'text', nullable: true })
  necesidades?: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha_registro: Date;

  @OneToMany(() => DonacionBeneficiario, donacionBeneficiario => donacionBeneficiario.beneficiario)
  donacionesBeneficiarios: DonacionBeneficiario[];
}

import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn } from 'typeorm';
import { Donante } from 'src/donaciones/donaciones.entity';
import { Beneficiario } from 'src/beneficiarios/beneficiarios.entity';

@Entity('donacion_beneficiario')
export class DonacionBeneficiario {
  @PrimaryGeneratedColumn()
  id_donben: number;

  @ManyToOne(() => Donante, donante => donante.donacionesBeneficiarios)
  donante: Donante; // Relación ManyToOne con Donante

  @ManyToOne(() => Beneficiario, beneficiario => beneficiario.donacionesBeneficiarios)
  beneficiario: Beneficiario; // Relación ManyToOne con Beneficiario

  @Column('decimal')
  cantidad_asignada: number; // Cantidad de alimentos asignada

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  @CreateDateColumn()
  fecha_asignacion: Date; // Fecha en que se asignó la donación

  // @Column({ type: 'enum', enum: ['pendiente', 'entregado'], default: 'pendiente' })
  @Column()
  estado_entrega: string; // Estado de la entrega (pendiente o entregado)
}
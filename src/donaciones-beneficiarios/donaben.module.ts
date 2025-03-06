import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DonacionBeneficiario } from './donaben.entity';
import { DonaBenService } from './donaben.service';
import { DonaBeneficiarioController } from './donaben.controller';
import { Beneficiario } from 'src/beneficiarios/beneficiarios.entity';
import { Donante } from 'src/donaciones/donaciones.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DonacionBeneficiario, Beneficiario, Donante])],
  providers: [DonaBenService],
  controllers: [DonaBeneficiarioController],
  exports: [DonaBenService]
})
export class DonaBenModule { }
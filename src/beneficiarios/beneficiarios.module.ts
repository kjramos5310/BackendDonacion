import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BeneficiarioService } from './beneficiarios.service';
import { Beneficiario } from './beneficiarios.entity';
import { BeneficiarioController } from './beneficiarios.controller';
import { DonacionBeneficiario } from 'src/donaciones-beneficiarios/donaben.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Beneficiario, DonacionBeneficiario])],
  providers: [BeneficiarioService],
  controllers: [BeneficiarioController],
  exports: [BeneficiarioService]
})
export class BeneficiarioModule {}
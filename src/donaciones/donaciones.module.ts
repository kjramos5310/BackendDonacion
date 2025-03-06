import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Donante } from './donaciones.entity';
import { DonanteService } from './donaciones.service';
import { DonanteController } from './donaciones.controller';
import { DonacionBeneficiario } from 'src/donaciones-beneficiarios/donaben.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DonacionBeneficiario, Donante])],
  providers: [DonanteService],
  controllers: [DonanteController],
  exports: [DonanteService]
})
export class DonanteModule {}
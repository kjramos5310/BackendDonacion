import { Injectable,NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Beneficiario } from './beneficiarios.entity';

@Injectable()
export class BeneficiarioService {
  constructor(
    @InjectRepository(Beneficiario)
    private readonly beneficiarioRepository: Repository<Beneficiario>,
  ) {}

  async obtenerTodos(): Promise<Beneficiario[]> {
    return this.beneficiarioRepository.find({relations: ['donacionesBeneficiarios']});
  }

  async obtenerPorId(id: number): Promise<Beneficiario> {
    const roltemp = await this.beneficiarioRepository.findOne({
      where:{id_beneficiario:id},
      relations: ['donacionesBeneficiarios']
    });
    if (!roltemp) {
      throw new NotFoundException(`Rol with id ${id} not found`);
    }
    return roltemp;
  }

  async crear(data: Partial<Beneficiario>): Promise<Beneficiario> {
    const roltemp = this.beneficiarioRepository.create(data);
    return this.beneficiarioRepository.save(roltemp);
  }

  async actualizar(id: number, data: Partial<Beneficiario>): Promise<Beneficiario> {
    await this.beneficiarioRepository.update(id, data);
    return this.obtenerPorId(id);
  }

  async eliminar(id: number): Promise<void> {
    const data = await this.obtenerPorId(id);
    await this.beneficiarioRepository.remove(data);
  }
}
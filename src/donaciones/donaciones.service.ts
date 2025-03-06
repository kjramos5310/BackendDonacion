import { Injectable,NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Donante } from './donaciones.entity';

@Injectable()
export class DonanteService {
  constructor(
    @InjectRepository(Donante)
    private readonly donanteRepository: Repository<Donante>,
  ) {}

  async obtenerTodos(): Promise<Donante[]> {
    return this.donanteRepository.find({relations: ['donacionesBeneficiarios']});
  }

  async obtenerPorId(id: number): Promise<Donante> {
    const roltemp = await this.donanteRepository.findOne({
      where:{id_donante1:id},
      relations: ['donacionesBeneficiarios']
    });
    if (!roltemp) {
      throw new NotFoundException(`Rol with id ${id} not found`);
    }
    return roltemp;
  }

  async crear(data: Partial<Donante>): Promise<Donante> {
    const roltemp = this.donanteRepository.create(data);
    return this.donanteRepository.save(roltemp);
  }

  async actualizar(id: number, data: Partial<Donante>): Promise<Donante> {
    await this.donanteRepository.update(id, data);
    return this.obtenerPorId(id);
  }

  async eliminar(id: number): Promise<void> {
    const data = await this.obtenerPorId(id);
    await this.donanteRepository.remove(data);
  }
}
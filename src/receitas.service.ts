// src/receitas/receitas.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Receita } from './receitas/receitas.entity';
import { ReceitasRepository } from './receitas/receitas.repository';
import { ReceitaDto } from './receitas/dto/receita.dto/receita.dto';

@Injectable()
export class ReceitasService {
  constructor(
    @InjectRepository(ReceitasRepository)
    private readonly receitasRepository: ReceitasRepository,
  ) {}

  async listarReceitas(): Promise<Receita[]> {
    return this.receitasRepository.find();
  }

  async obterReceitaPorId(id: string): Promise<Receita> {
    const receita = await this.receitasRepository.findOne(id);
    if (!receita) {
    }
    return receita;
  }

  async cadastrarReceita(receitaDto: ReceitaDto): Promise<Receita> {
    const novaReceita = this.receitasRepository.create(receitaDto);
    return this.receitasRepository.save(novaReceita);
  }

  async atualizarReceita(id: string, receitaDto: ReceitaDto): Promise<Receita> {
    await this.obterReceitaPorId(id); // Verifica se a receita existe
    await this.receitasRepository.update(id, receitaDto);
    return this.obterReceitaPorId(id);
  }

  async deletarReceita(id: string): Promise<void> {
    await this.obterReceitaPorId(id); // Verifica se a receita existe
    await this.receitasRepository.delete(id);
  }
}

/* eslint-disable prettier/prettier */
// src/receitas/receitas.repository.ts
import { EntityRepository, Repository } from 'typeorm';
import { Receita } from './receitas.entity';

@EntityRepository(Receita)
export class ReceitasRepository extends Repository<Receita> {
  async listarReceitas(): Promise<Receita[]> {
    return await this.find();
  }
}

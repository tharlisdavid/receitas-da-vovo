import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  NotFoundException,
} from '@nestjs/common';
import { ReceitaDto } from './dto/receita.dto/receita.dto';
import { v4 as uuid } from 'uuid';
import { Receita } from 'src/receitas/receitas.entity';

@Controller('receitas')
export class ReceitasController {
  private receitas: ReceitaDto[] = [];

  @Get()
  listarReceitas() {
    return this.receitas;
  }

  @Get(':id')
  obterReceita(@Param('id') id: string) {
    const receita = this.receitas.find((r) => r.id === id);
    if (!receita) {
      throw new NotFoundException('Receita não encontrada');
    }
    return receita;
  }

  @Post('cadastrar')
  cadastrarReceita(@Body() receitaDto: ReceitaDto) {
    const novaReceita = { id: uuid(), ...receitaDto };
    this.receitas.push(novaReceita);
    return { mensagem: 'Receita cadastrada com sucesso!', data: novaReceita };
  }

  @Put(':id')
  atualizarReceita(@Param('id') id: string, @Body() receitaDto: ReceitaDto) {
    const index = this.receitas.findIndex((r) => r.id === id);
    if (index === -1) {
      throw new NotFoundException('Receita não encontrada');
    }
    this.receitas[index] = { ...this.receitas[index], ...receitaDto };
    return {
      mensagem: 'Receita atualizada com sucesso!',
      data: this.receitas[index],
    };
  }

  @Delete(':id')
  deletarReceita(@Param('id') id: string) {
    const index = this.receitas.findIndex((r) => r.id === id);
    if (index === -1) {
      throw new NotFoundException('Receita não encontrada');
    }
    const receitaRemovida = this.receitas.splice(index, 1);
    return { mensagem: 'Receita removida com sucesso!', data: receitaRemovida };
  }
}

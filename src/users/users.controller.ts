import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, UseGuards, Request } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiNoContentResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: 'Criar o usuário' })
  @ApiCreatedResponse({ description: 'Usuário criado com sucesso.' })
  @ApiBadRequestResponse({ description: 'Erro na criação do usuário.' })
  create(@Body() dto: CreateUserDto) {
    return this.usersService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Buscar todos os usuários' })
  @ApiOkResponse({ description: 'Lista de usuários retornada com sucesso.' })
  @ApiNotFoundResponse({ description: 'Erro ao buscar a lista de usuários.' })
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar usuário via ID' })
  @ApiOkResponse({ description: 'Usuário retornado com sucesso.' })
  @ApiNotFoundResponse({ description: 'Erro ao buscar o usuário' })
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar dados do usuário via id' })
  @ApiOkResponse({ description: 'Dados do usuário atualizado com sucesso.' })
  @ApiBadRequestResponse({ description: 'Dados inválidos.' })
  @ApiNotFoundResponse({ description: 'Usuário não encontrado.' })
  update(@Param('id') id: string, @Body() dto: UpdateUserDto) {
    return this.usersService.update(id, dto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  @HttpCode(204)
  @ApiOperation({ summary: 'Deletar usuário via id' })
  @ApiNoContentResponse({ description: 'Usuário deletado com sucesso.' })
  @ApiBadRequestResponse({ description: 'Id inserido não encontrado.' })
  remove(@Request() req, @Param('id') id: string) {
    return this.usersService.remove(id);
  }
}

import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber, IsString, MaxLength } from "class-validator";

export class CreateUserDto {

  @ApiProperty({
    description: "Nome completo do usuário",
    example: "João Pedro da Silva",
    type: String,
  })
  @IsNotEmpty({ message: "O nome completo é obrigatório" })
  @IsString({ message: "Precisa ser uma string" })
  @MaxLength(255, {message: "Tamanho máximo de 255 caracteres"})
  nome: string;

  @ApiProperty({
    description: "Email do usuário",
    example: "usuario@mail.com",
    type: String,
  })
  @IsNotEmpty({ message: "O email é obrigatório" })
  @IsString({ message: "Precisa ser uma string" })
  @MaxLength(100, { message: "Tamanho máximo de 100 caracteres" })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: "Número do CPF do usuário",
    example: "12345678900",
    type: String,
  })
  @IsNotEmpty({ message: "O CPF é obrigatório" })
  @IsString({ message: "Precisa ser uma string" })
  @MaxLength(14, { message: "Tamanho máximo de 14 caracteres" })
  cpf: string;

  @ApiProperty({
    description: "Número de celular do usuário, no modelo Brasileiro",
    example: "61912345678",
    type: String,
  })
  @IsOptional()
  @IsString({ message: "Precisa ser uma string" })
  @MaxLength(20, { message: "Tamanho máximo de 20 caracteres" })
  @IsPhoneNumber('BR', { message: "Precisa estar no formato de número de celular válido"})
  celular?: string;

  @ApiProperty({
    description: "Senha do usuário",
    type: String,
  })
  @IsNotEmpty({ message: "A senha é obrigatória" })
  @IsString({ message: "Precisa ser uma string" })
  senha: string;
}

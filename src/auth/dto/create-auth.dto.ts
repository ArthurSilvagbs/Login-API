import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateAuthDto {
  @IsNotEmpty({ message: 'Email não pode ser vazio' })
  @IsEmail()
  email: string;

  @IsNotEmpty({ message: 'Senha não pode estar vazia' })
  @IsString()
  senha: string;
}

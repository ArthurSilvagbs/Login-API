import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ name: 'nome', nullable: false, length: 255 })
  nome: string;

  @Column({ name: 'nome', nullable: false, length: 100 })
  email: string;

  @Column({ name: 'nome', nullable: false, length: 14 })
  cpf: string;

  @Column({ name: 'nome', length: 20 })
  celular?: string;

  @Column({ name: 'nome', nullable: false, length: 255 })
  senha: string;

  @CreateDateColumn({ name: 'criada_em' })
  createdAt: string;
}

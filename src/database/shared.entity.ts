import { BaseEntity, CreateDateColumn, DeleteDateColumn, Index, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export abstract class SharedEntity extends BaseEntity {
    @Index({ unique: true })
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn({ type: 'date' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'date' })
    updatedAt: Date;

    @DeleteDateColumn({ type: 'date' })
    deletedAt: Date;
}
import { BaseEntity, CreateDateColumn, DeleteDateColumn, Index, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export abstract class SharedEntity extends BaseEntity {
    @Index({ unique: true})
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn({ type: 'timestamptz' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamptz' })
    updatedAt: Date;

    @DeleteDateColumn({ type: 'timestamptz' })
    deletedAt: Date;

}
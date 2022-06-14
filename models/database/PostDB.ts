import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import UserDb from './userDb';
import CommentDB from './CommentDB';

@Entity()
class PostDB {
  @PrimaryGeneratedColumn()
  id?: number;

  @OneToMany(() => CommentDB, (comment) => comment.post)
  comments?: CommentDB[];

  @Column('text')
  title: string;

  @Column('text')
  content: string;

  @ManyToOne(() => UserDb, (user) => user.posts, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'author' })
  user?: UserDb;

  @Column('integer')
  author: number;

  @Column('text', { nullable: true })
  image?: string;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  dateCreated?: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  dateModified?: Date;

  constructor(
    id: number,
    title: string,
    content: string,
    author: number,
    dateCreated: Date,
    dateModified: Date
  ) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.author = author;
    this.dateCreated = dateCreated;
    this.dateModified = dateModified;
  }
}

export default PostDB;

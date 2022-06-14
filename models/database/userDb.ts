import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import CommentDB from './CommentDB';
import PostDB from './PostDB';

@Entity()
class UserDB {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  name: string;

  @Column('text')
  email: string;

  @Column('text')
  password: string;

  @Column('boolean')
  isAdmin: boolean;

  @Column('text')
  imgPath?: string;

  @OneToMany(() => PostDB, (post) => post.author)
  posts?: PostDB[];

  @OneToMany(() => CommentDB, (comment) => comment.author)
  comments?: CommentDB[];

  @Column('date')
  dateCreated: Date;

  @Column('date')
  dateModified: Date;

  constructor(
    id: number,
    name: string,
    email: string,
    password: string,
    isAdmin: boolean
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.isAdmin = isAdmin;
    this.password = password;
    this.dateCreated = new Date();
    this.dateModified = new Date();
  }
}
export default UserDB;

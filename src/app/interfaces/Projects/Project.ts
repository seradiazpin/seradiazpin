import { Skill } from '../skill';
export interface Project{
    id:number,
    name:string,
    skills:Array<Skill>,
    description: string,
    github:string,
    site:string
    imgsrc:string
}
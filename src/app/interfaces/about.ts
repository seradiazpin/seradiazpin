import { Hobby } from './hobby';
import { Experience } from './experience';
import { Language } from './language';
import { Degree } from './degree';
export interface About{
    id: number,
    lan: number,
    resume : string,
    degrees : Array<Degree>,
    experience : Array<Experience>,
    languages : Array<Language>,
    hobies : Array<Hobby>
}
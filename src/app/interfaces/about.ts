import { Hobby } from './hobby';
import { Experience } from './experience';
import { Language } from './language';
import { Degree } from './degree';
import { Contact } from './contact';
import { Certificates } from './certificates';
export interface About{
    id: number,
    lan: number,
    resume : string,
    degrees : Array<Degree>,
    contact:Array<Contact>,
    certificates:Array<Certificates>,
    experience : Array<Experience>,
    languages : Array<Language>,
    hobies : Array<Hobby>
    information : Array<string>
}
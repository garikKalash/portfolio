import {Education} from './education.model';
import {Skill} from './skill.model';
import {Language} from './language.model';
import {Experience} from './experience.model';

export class CV {
  name: string;
  surname: string;
  email: string;
  telephone: string;
  skype: string;
  address: string;
  educations: Education[] = [];
  languages: Language[] = [];
  skills: Skill[] = [];
  experiences: Experience[] = [];

}

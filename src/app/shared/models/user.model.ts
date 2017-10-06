import { Education } from './education.model'
import { Experience } from './experience.model'
import { Skill } from './skill.model'

export class User {
    _id:        string;
    email:      string;
    password:   string;
    firstName:  string;
    lastName:   string;
    title:      string;
    url:        string;
    phoneNo:    string;
    address:    string;
    linkedIn:   string;
    instagram:  string;
    pinterest:  string;
    profile:    string;
    interests:              Array<string>;
    education:              Array<Education>;
    experience:             Array<Experience>;
    complementaryEducation: Array<Education>;
    languages:              Array<Skill>;
    hardskills:             Array<Skill>;
    softskills:             Array<Skill>;
}

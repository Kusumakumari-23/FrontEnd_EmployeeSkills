import { Skill } from './skill';

export class Employee {

    public empId: bigint;
    public firstName: string;
    public lastName: string;
    public hireDate: Date;
    public city: string;
    public email: string;
    public phoneNo: string;
    public skill: Skill[];

}

import {User} from "./User";
import {MessageBuilder} from "./Message";

export class Room{
    private name: string;
    private members: Array<User>;
    private password: string;
    private numberOfMembers = 0;
    private messageHistory: Array<MessageBuilder> = new Array<MessageBuilder>();
    constructor(name:string,password:string) {
        this.name = name;
        this.password = password;
    }

    public getName(): string {
        return this.name;
    }
    public addMember(user: User): void {
        this.members.push(user);
        this.numberOfMembers++;
    }

    public removeMember(user: User): void {
        const index = this.members.findIndex(member => member.getSocketId() === user.getSocketId());
        if (index !== -1) {
            this.members.splice(index, 1);
            this.numberOfMembers--;
        }
    }

}
export class Quotes {
    public upvotes: number
    public downvotes: number
    public completeDate: Date
    constructor(public quote: string, public author: string, public name: string){
        this.upvotes =0;
        this.downvotes =0;
        this.completeDate = new Date;
    }
}

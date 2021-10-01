import { GithubUser } from "../ValueObjects/GithubUser";

export class Reviewer {
    private githubUser: GithubUser;

    constructor(githubUser: GithubUser) {
        this.githubUser = githubUser
    }

    public getGithubUser(): GithubUser
    {
        return this.githubUser;
    }
};

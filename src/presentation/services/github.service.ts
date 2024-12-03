import { GithubIssuePayload, GithubStarPayload } from '../../interfaces';

export class GithubService {
  constructor() {}

  onStar(payload: GithubStarPayload): string {
    const { action, sender, repository } = payload;

    return `${sender.login} ${action} star on ${repository.full_name}`;
  }

  onIssue(payload: GithubIssuePayload): string {
    const { action, issue } = payload;

    if (action === 'opened') {
      return `An issue was opened with this title ${issue.title}`;      
    }

    if (action === 'closed') {
      return `An issue was closed by ${issue.user.login}`;      
    }

    if (action === 'reopened') {
      return `An issue was reopened by ${issue.user.login}`;      
    }

    return `Unhandled action for the issue event ${action}`;
  }
}

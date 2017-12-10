const TYPES = {
    UserRepository: Symbol('UserRepository'),
    UserService: Symbol('UserService'),
    IssueService: Symbol('IssueService'),
    IssueRepository: Symbol('IssueRepository'),
    VoteRepository: Symbol('VoteRepository'),
    VoteService: Symbol('VoteService'),
    CommentService: Symbol('CommentService'),
    CommentRepository: Symbol('CommentRepository'),
    BroadcastingService: Symbol('BroadcastingService'),
    EmailService: Symbol('EmailService'),
    Controller: Symbol('Controller')
};

export default TYPES;

export enum Role {
    ADMIN = 'admin',
    USER = 'user',
    MANAGER = 'manager',
    GUEST = 'guest',
}

export interface User {
    id: string;
    name: string;
    email: string;
    role: Role;
    teamId?: string;
    team ?: Team;
    createdAt: Date;
    updatedAt: Date;
}

export interface Team {
    id: string;
    name: string;
    description?: string | null;
    code: string;
    members: User[];
    createdAt: Date;
    updatedAt: Date;
}
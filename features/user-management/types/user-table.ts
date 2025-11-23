export interface UserTableProps {
    persons? : PersonData[],
};

export interface PersonData {
    id : string
    avatarUrl: string,
    userName: string,
    email : string,
    role : string,
    status : string
}

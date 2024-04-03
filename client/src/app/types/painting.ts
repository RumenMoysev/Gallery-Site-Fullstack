export interface painting {
    title: string,
    imageUrl: string,
    summary: string,
    createdAtTime: string,
    updatedAtTime: string,
    likes: string[] | undefined,
    _id: string
}

export interface paintingDetails {
    title: string,
    imageUrl: string,
    summary: string,
    description: string,
    createdAtTime: string,
    updatedAtTime: string,
    likes: string[],
    owner: string | boolean,
    _id: string
}
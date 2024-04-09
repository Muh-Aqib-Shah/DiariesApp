export interface Diary{
    title: string,
    id? : string
    createdAt: string
    updatedAt: string
    userId: string
    entryIds: string[] | null
    type: "private" | "public"
}
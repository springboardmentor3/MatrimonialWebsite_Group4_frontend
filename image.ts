import { FileHandle } from "./pages/file-handle";

export interface Image{
    rid:number,
    name:string,
    description:string,
    images:FileHandle[]
}
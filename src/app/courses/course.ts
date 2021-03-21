export class Course{
    id!: number
    name:string | undefined;
    imageUrl: string | undefined;
    price: number | undefined;
    code!: string;
    duration: number | undefined;
    rating: number =0;
    releaseDate: string | undefined;
    description: string | undefined;
}
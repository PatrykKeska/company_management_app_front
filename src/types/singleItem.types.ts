export interface SingleItemTypes {
    name: string,
    price: number,
    pieces: number,
    dateOfBuy: string,
    img: string
    id?:string
    key?:string
}

declare module "*.jpeg" {
    const src: any;
    export = value;
}
export interface IPersonalData {
    title: string;
    cardTitle: string;
    url: string;
    cardSubtitle: string;
    cardDetailedText: string;
}

export interface IPhotosGallery {
    photoGallery: string;
}

export interface IWinnerData {
    name: string;
    id: number;
    photo: string;
    photoGallery: IPhotosGallery[];
    description: string;
    age: number;
    youtube: string;
    maps: string;
    items: IPersonalData[]
}
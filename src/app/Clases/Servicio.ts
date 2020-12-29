export class Servicio {
    id: string;
    name: string;
    desprice: string;
    price: number;
    description: string[];
    urlInfo: string;
    url: string;
    img: string[];
    likes: number;
    tags: string[];
    rutas?: Ruta[];
}

export class Ruta {
    id?: number;
    name: string;
    inicio?: string;
    fin?: string;
    duracion?: string;
    altitud?: number;
    dificultad?: Dificultad;
    mapa: string;
    img: string[];
    desc?: string[];
}

export enum Dificultad {
    'Moderada' = 'Moderada',
    'Alta' = 'Alta',
    'Baja' = 'Baja'
}

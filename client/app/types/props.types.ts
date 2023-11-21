export interface Main {
  data: Datum[];
  meta: Meta;
}

export interface Datum {
  id: number;
  attributes: PurpleAttributes;
}

export interface PurpleAttributes {
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  hero: Hero;
  exclusivos: Exclusivos;
  vehiculos: Vehiculos;
}

export interface Exclusivos {
  id: number;
  title: string;
  carrusel: Carrusel[];
}

export interface Carrusel {
  id: number;
  marca: string;
  modelo: string;
  ano: string;
  kilometros: string;
  imagenes: Imagenes;
}

export interface Imagenes {
  data: DAT[];
}

export interface DAT {
  id: number;
  attributes: DataAttributes;
}

export interface DataAttributes {
  name: string;
  alternativeText: null;
  caption: null;
  width: number | null;
  height: number | null;
  formats: Formats | null;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
  createdAt: Date;
  updatedAt: Date;
}

export interface Formats {
  large: Large;
  small: Large;
  medium: Large;
  thumbnail: Large;
}

export interface Large {
  ext: EXT;
  url: string;
  hash: string;
  mime: MIME;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
}

export enum EXT {
  JPEG = ".jpeg",
  Webp = ".webp",
}

export enum MIME {
  ImageJPEG = "image/jpeg",
  ImageWebp = "image/webp",
}

export interface Hero {
  id: number;
  title: string;
  background: Background;
}

export interface Background {
  data: DAT;
}

export interface Vehiculos {
  id: number;
  title: string;
  vehiculo: Vehiculo[];
}

export interface Vehiculo {
  id: number;
  marca: string;
  modelo: string;
  ano: string;
  kilometros: string;
  combustible: string;
  fotos: Imagenes;
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

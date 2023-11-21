import type { Schema, Attribute } from '@strapi/strapi';

export interface CarruselCarrusel extends Schema.Component {
  collectionName: 'components_carrusel_carrusels';
  info: {
    displayName: 'carrusel';
    description: '';
  };
  attributes: {
    marca: Attribute.String & Attribute.Required;
    modelo: Attribute.String & Attribute.Required;
    ano: Attribute.String & Attribute.Required;
    kilometros: Attribute.String & Attribute.Required;
    imagenes: Attribute.Media & Attribute.Required;
  };
}

export interface ExclusivosExclusivos extends Schema.Component {
  collectionName: 'components_exclusivos_exclusivos';
  info: {
    displayName: 'exclusivos';
  };
  attributes: {
    title: Attribute.String;
    carrusel: Attribute.Component<'carrusel.carrusel', true>;
  };
}

export interface HeroHero extends Schema.Component {
  collectionName: 'components_hero_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    title: Attribute.String;
    background: Attribute.Media;
  };
}

export interface UsadosUsados extends Schema.Component {
  collectionName: 'components_usados_usados';
  info: {
    displayName: 'usados';
  };
  attributes: {
    title: Attribute.String;
    carrusel: Attribute.Component<'carrusel.carrusel', true>;
  };
}

export interface VehiculoVehiculo extends Schema.Component {
  collectionName: 'components_vehiculo_vehiculos';
  info: {
    displayName: 'vehiculo';
    icon: 'car';
    description: '';
  };
  attributes: {
    modelo: Attribute.String;
    combustible: Attribute.Enumeration<['diesel', 'nafta', 'gnc']>;
    marca: Attribute.String;
    kilometros: Attribute.String;
    ano: Attribute.String;
    fotos: Attribute.Media;
  };
}

export interface VehiculosVehiculos extends Schema.Component {
  collectionName: 'components_vehiculos_vehiculos';
  info: {
    displayName: 'vehiculos';
  };
  attributes: {
    title: Attribute.String;
    vehiculo: Attribute.Component<'vehiculo.vehiculo', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'carrusel.carrusel': CarruselCarrusel;
      'exclusivos.exclusivos': ExclusivosExclusivos;
      'hero.hero': HeroHero;
      'usados.usados': UsadosUsados;
      'vehiculo.vehiculo': VehiculoVehiculo;
      'vehiculos.vehiculos': VehiculosVehiculos;
    }
  }
}

import type { Schema, Attribute } from '@strapi/strapi';

export interface BaseDevNotes extends Schema.Component {
  collectionName: 'components_base_dev_notes';
  info: {
    displayName: 'Dev notes';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    body: Attribute.RichText;
    content: Attribute.Blocks;
  };
}

export interface BaseLink extends Schema.Component {
  collectionName: 'components_base_links';
  info: {
    displayName: 'download link';
    description: '';
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
    platform: Attribute.Relation<
      'base.link',
      'oneToOne',
      'api::platform.platform'
    >;
    note: Attribute.String;
  };
}

export interface BaseVariant extends Schema.Component {
  collectionName: 'components_base_variants';
  info: {
    displayName: 'variant';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    mods: Attribute.Relation<'base.variant', 'oneToMany', 'api::mod.mod'>;
    dlcs: Attribute.Relation<'base.variant', 'oneToMany', 'api::dlc.dlc'>;
    alias: Attribute.String;
    name_cn: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'base.dev-notes': BaseDevNotes;
      'base.link': BaseLink;
      'base.variant': BaseVariant;
    }
  }
}

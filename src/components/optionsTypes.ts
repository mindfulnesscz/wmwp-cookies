export type metaItem = {
  slug: string;
  name: string;
};

export type careerListFeedItem = {
  title: string;
  excerpt: string;
  link: string;
  location: metaItem;
  department: metaItem;
  type: metaItem;
}

export type MetaFeed = {
  settings_json: 'string'
}

export type globalSettings = {
  showFilter: boolean
}

export type Settings = {
  locations: Array<metaItem>
  departments: Array<metaItem>
  types: Array<metaItem>
  globalSettings: globalSettings
}
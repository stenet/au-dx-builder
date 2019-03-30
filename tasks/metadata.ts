export interface IMetadata {
  Widgets: {
    [key: string]: IWidgetConfig;
  },
  ExtraObjects: {
  }
}
export interface IWidgetConfig {
  Description: string;
  Module: string;
  Options: {
    [key: string]: {
      PrimitiveTypes?: string[];
      ItemPrimitiveTypes?: string[];
      Description: string;
    }
  }
}
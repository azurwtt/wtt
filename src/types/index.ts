export interface Route {
  name: string;
  url: `/${string}`;
  component: any;
  visible: boolean;
}

export interface Notes {
  title: string;
  description: string;
  image: string;
  alt: string;
}
export interface NotesConfig {
  sectionHeading: string;
  content: Notes[];
}

export interface PlanId {
  [noOfIntruments: string]: string;
}

export interface ToolType {
  className: string;
  price: string;
  planId: PlanId;
}

export interface ToolInfo {
  [type: string]: ToolType | string;
}

export interface ToolsConfig {
  [toolName: string]: ToolInfo;
}

export interface InsightsConfig {
  heading: string;
  src: string;
  descriptions: string[];
}

export enum TradingPlatforms {
  TradingView = "TradingView",
  ThinkOrSwim = "ThinkOrSwim",
  NinjaTraders = "NinjaTraders",
  Sierrachart = "Sierrachart",
}

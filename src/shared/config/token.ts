import data from "./trData.json";

interface Attribute {
  trait_type: string;
  value: string;
}

export interface ITrData {
  description: string;
  image: string;
  name: string;
  attributes: Array<Attribute>;
}

export const trData: ITrData = data;

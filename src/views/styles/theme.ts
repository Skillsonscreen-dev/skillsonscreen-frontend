import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    primaryColor: string;
    secondaryColor: string;
  }
}

export const lightTheme: DefaultTheme = {
	primaryColor: "#3186C6",
	secondaryColor: "#F16108",
};

export const darkTheme: DefaultTheme = {
	primaryColor: "#3186C6",
	secondaryColor: "#F16108",
};
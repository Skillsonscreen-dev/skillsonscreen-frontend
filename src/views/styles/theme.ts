import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    primaryColor: string;
    secondaryColor: string;
    lightPrimaryColor: string;
  }
}

export const lightTheme: DefaultTheme = {
	primaryColor: "#3186C6",
	secondaryColor: "#F16108",
  lightPrimaryColor: "#CDF2FD",
};

export const darkTheme: DefaultTheme = {
	primaryColor: "#3186C6",
	secondaryColor: "#F16108",
  lightPrimaryColor: "#CDF2FD",
};
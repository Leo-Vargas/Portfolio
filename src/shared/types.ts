export enum SelectedPage{
  Home = "home",
  AboutMe = "aboutme",
  MyWork = "mywork",
  ContactMe = "contactme",
}

export interface WorkCardType {
  name: string;
  image: string;
  link: string;
  tags: Array<string>;
}
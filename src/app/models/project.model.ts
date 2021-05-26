import { Img } from './img.model';

export interface Project {
  name: string;
  description: string;
  routerLink: string[];
  img: Img;
}

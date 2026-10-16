// Entity.ts
import type Link from "@/models/link";

export default interface Entity {
  id: string;
  icon?: string;
  title: string;
  authors?: string;
  date?: string;
  institution?: string;
  description?: string;
  header_link?: string;
  links?: Link[];
}

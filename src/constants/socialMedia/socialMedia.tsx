import { GitHUb, LinkedIn, Mail } from "../../components/Icons/SocialMediaIcons";
import { createSocialMedia } from "./socialMediaFactory";
import type { SMType } from "./socialMediaFactory";

export const socialMedia: Array<SMType> = [
  createSocialMedia({name: "GitHub", url: "https://github.com/YanaG4", Icon: <GitHUb />}),
  createSocialMedia({name: "LinkedIn", url: "https://www.linkedin.com/in/yana-glushychkina-5a5592263", Icon: <LinkedIn />}),
  createSocialMedia({name: "Mail", Icon: <Mail />, text: "sinxenon.biz@gmail.com"}),
];

import * as T from "./Texts.styles"

interface TextProps {
  title?: string;
  subtitle?: string;
  intertitle?: string;
  paragraph?: string;
}

export const HeadingTitle: React.FC<TextProps> = ({ title }) => {
  return <T.HeadingTitle>{title}</T.HeadingTitle>;
};

export const HeadingSubtitle: React.FC<TextProps> = ({ subtitle }) => {
  return <T.HeadingSubtitle>{subtitle}</T.HeadingSubtitle>;
};

export const HeadingInterTitle: React.FC<TextProps> = ({ intertitle }) => {
  return <T.HeadingInterTitle>{intertitle}</T.HeadingInterTitle>;
};

export const Paragraph: React.FC<TextProps> = ({ paragraph }) => {
  return <T.Paragraph>{paragraph}</T.Paragraph>;
};

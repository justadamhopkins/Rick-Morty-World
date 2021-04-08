import { FC } from "react";
import { HomeTemplate } from "_templates/HomeTemplate/HomeTemplate";

const templates = {
  home: HomeTemplate,
};

interface Props {
  templateName: keyof typeof templates;
  templateProps?: any;
}

export const TemplateRenderer: FC<Props> = ({
  templateName,
  templateProps,
}) => {
  const Template = templates[templateName];
  return <Template {...templateProps} />;
};

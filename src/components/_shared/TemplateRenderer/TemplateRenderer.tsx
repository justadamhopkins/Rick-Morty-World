import { FC } from "react";
import { HomeTemplate } from "_templates/HomeTemplate/HomeTemplate";
import { CharacterTemplate } from "_templates/CharacterTemplate/CharacterTemplate";
import { Meta } from "_shared/Meta/Meta";

const templates = {
  home: HomeTemplate,
  character: CharacterTemplate,
};

interface Props {
  templateName: keyof typeof templates;
  templateProps?: any;
  metaTitle: string;
}

export const TemplateRenderer: FC<Props> = ({
  templateName,
  templateProps,
  metaTitle,
}) => {
  const Template = templates[templateName];
  return (
    <>
      <Meta title={metaTitle} />
      <Template {...templateProps} />
    </>
  );
};

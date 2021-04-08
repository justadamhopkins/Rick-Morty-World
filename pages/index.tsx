import { NextPage } from "next";
import { TemplateRenderer } from "_shared/TemplateRenderer/TemplateRenderer";

const HomePage: NextPage = () => {
  return (
    <TemplateRenderer
      templateName="home"
      templateProps={{ title: "Rick and Morty FE Tech Test" }}
    />
  );
};

export default HomePage;

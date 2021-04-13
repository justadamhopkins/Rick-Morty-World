import { render, screen } from "@testing-library/react";
import { getMockCharactersData } from "_templates/HomeTemplate/__test__/mockCharactersData";
import { TemplateRenderer } from "../TemplateRenderer";

describe("TemplateRenderer", () => {
  const renderTemplateRenderer = () => {
    return render(
      <TemplateRenderer
        templateName="home"
        metaTitle="mockMetaTitle"
        templateProps={{ data: getMockCharactersData() }}
      />
    );
  };
  test("should render a template", () => {
    renderTemplateRenderer();

    expect(screen.getByText("Rick and Morty")).toBeTruthy();
    expect(screen.getByText("Secret Service Rick")).toBeTruthy();
    expect(screen.getByText("Steve Jobs Rick")).toBeTruthy();
  });
});

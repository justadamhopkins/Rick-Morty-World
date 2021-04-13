import { render, screen } from "@testing-library/react";
import { HomeTemplate } from "../HomeTemplate";
import { getMockCharactersData } from "./mockCharactersData";

describe("HomeTemplate", () => {
  const renderHomeTemplate = () => {
    return render(<HomeTemplate data={getMockCharactersData()} />);
  };
  test("should render the HomeTemplate template", () => {
    renderHomeTemplate();

    expect(screen.getByText("Rick and Morty")).toBeTruthy();
    expect(screen.getByText("Secret Service Rick")).toBeTruthy();
    expect(screen.getByText("Steve Jobs Rick")).toBeTruthy();
  });
});

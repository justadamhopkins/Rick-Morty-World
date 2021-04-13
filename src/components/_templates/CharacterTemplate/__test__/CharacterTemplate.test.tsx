import { render, screen } from "@testing-library/react";
import { CharacterTemplate } from "../CharacterTemplate";
import { getMockCharacterData } from "./mockCharacterData";

describe("CharacterTemplate", () => {
  const renderCharacterTemplate = () => {
    return render(<CharacterTemplate data={getMockCharacterData()} />);
  };
  test("should render the CharacterTemplate template", () => {
    renderCharacterTemplate();

    expect(screen.getByText("Back to character listing")).toBeTruthy();
    expect(screen.getByText("Rick Sanchez")).toBeTruthy();
  });
});

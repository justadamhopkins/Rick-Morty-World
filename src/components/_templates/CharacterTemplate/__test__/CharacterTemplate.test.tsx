import { render, screen } from "@testing-library/react";
import { CharacterTemplate } from "../CharacterTemplate";
import { getMockCharacterData } from "./mockCharacterData";

describe("CharacterTemplate", () => {
  const renderCharacterTemplate = (data = getMockCharacterData()) => {
    return render(<CharacterTemplate data={data} />);
  };
  test("should render the CharacterTemplate template", () => {
    renderCharacterTemplate();

    expect(screen.getByText("Back to character listing")).toBeTruthy();
    expect(screen.getByText("Rick Sanchez")).toBeTruthy();
  });

  test("should handle origin being falsy", () => {
    renderCharacterTemplate({ ...getMockCharacterData(), origin: null });

    expect(screen.getByText("Origin: Unknown")).toBeTruthy();
  });
  test("should handle location being falsy", () => {
    renderCharacterTemplate({ ...getMockCharacterData(), location: null });

    expect(screen.getByText("Location Unknown")).toBeTruthy();
  });
});

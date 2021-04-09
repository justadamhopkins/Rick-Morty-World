import { render } from "@testing-library/react";
import { Card } from "../Card";

describe("Card", () => {
  const renderCard = () => {
    return render(
      <Card
        name="mockName"
        gender="mockGender"
        species="mockSpecies"
        characterId={111}
        image="mockImagePath"
      />
    );
  };
  test("should render a single card component", () => {
    const { asFragment } = renderCard();

    expect(asFragment()).toMatchSnapshot();
  });
});

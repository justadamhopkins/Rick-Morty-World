import { render } from "@testing-library/react";
import { Arrow } from "../Arrow";

describe("Arrow", () => {
  const renderArrow = () => {
    return render(<Arrow direction="left" />);
  };
  test("should render an Arrow", () => {
    const { asFragment } = renderArrow();

    expect(asFragment()).toMatchSnapshot();
  });
});

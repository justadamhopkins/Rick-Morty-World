import { render } from "@testing-library/react";
import { Title } from "../Title";

describe("Title", () => {
  const renderTitle = () => {
    return render(<Title copy="mockCopy" />);
  };
  test("should render a title with chosen copy", () => {
    const { asFragment } = renderTitle();

    expect(asFragment()).toMatchSnapshot();
  });
});

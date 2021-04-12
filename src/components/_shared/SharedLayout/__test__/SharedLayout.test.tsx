import { render, screen } from "@testing-library/react";
import { SharedLayout } from "../SharedLayout";

describe("SharedLayout", () => {
  const renderSharedLayout = () => {
    return render(
      <SharedLayout>
        <div>
          <p>MockDiv</p>
        </div>
      </SharedLayout>
    );
  };
  test("should render the shared layout", () => {
    renderSharedLayout();

    expect(screen.getByText("MockDiv")).toBeTruthy();
  });
});

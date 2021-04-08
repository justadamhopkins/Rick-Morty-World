import { render, screen } from "@testing-library/react";
import { Hero } from "../Hero";

const renderHero = () => {
  return render(
    <Hero>
      <div>mockChildren</div>
    </Hero>
  );
};
describe("Hero", () => {
  test("should render the hero component", () => {
    renderHero();

    expect(screen.getByText("mockChildren"));
  });
});

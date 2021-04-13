import { render } from "@testing-library/react";
import { ProfileImage } from "../ProfileImage";

describe("ProfileImage", () => {
  const renderProfileImage = () => {
    return render(<ProfileImage image="mockImage" alt="mockImageName" />);
  };
  test("should render a ProfileImage", () => {
    const { asFragment } = renderProfileImage();

    expect(asFragment()).toMatchSnapshot();
  });
});

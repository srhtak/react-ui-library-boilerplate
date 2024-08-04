import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Page from "./index";

describe("Page", () => {
  it("should render title and children", () => {
    const title = "Test Title";
    const children = "Test Children";
    const { getByText } = render(<Page title={title}>{children}</Page>);

    const titleElement = getByText(title);
    const childrenElement = getByText(children);

    expect(titleElement).toBeInTheDocument();
    expect(childrenElement).toBeInTheDocument();
  });
});

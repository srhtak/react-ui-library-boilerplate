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

  it("should render correct styling", () => {
    const title = "Test Title";
    const children = "Test Children";
    const { getByTestId } = render(<Page title={title}>{children}</Page>);

    const container = getByTestId("page-container");

    expect(container).toHaveStyle(`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    `);
  });
});

import { render, screen } from "@testing-library/react";
import PageSize from "../../../Tags/components/PageSize";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

const setPage = jest.fn();
const setPageSize = jest.fn();

describe("PageSize", () => {
  it("should render with proper default value", () => {
    render(<PageSize defaultValue={20} setPage={setPage} setPageSize={setPageSize} />, {});
    const textbox = screen.getByRole("textbox");

    expect(textbox).toHaveValue("20");
  });

  it("should have correct value when user types something", () => {
    render(<PageSize defaultValue={20} setPage={setPage} setPageSize={setPageSize} />, {});
    const textbox = screen.getByRole("textbox");

    userEvent.clear(textbox);
    userEvent.type(textbox, "40");

    expect(textbox).toHaveValue("40");
  });

  it("should display error when incorrect value is entered", () => {
    render(<PageSize defaultValue={20} setPage={setPage} setPageSize={setPageSize} />, {});
    const textbox = screen.getByRole("textbox");

    userEvent.clear(textbox);
    userEvent.type(textbox, "3");

    const errorText = screen.getByText(/5-100/i)

    expect(errorText).toBeInTheDocument();
  });
});

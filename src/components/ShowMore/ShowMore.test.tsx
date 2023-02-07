import ShowMore from "./ShowMore";
import { screen, render } from "@testing-library/react";

describe("ShowMore", () => {
    it("should render", () => {
        render(<ShowMore title='Show More' />)
        expect(screen.getByText("Show More")).toBeInTheDocument();
    });
    it("should render children container", ()=> {
        render(<ShowMore title='Show More'><h1>Hello</h1></ShowMore>)
        expect(screen.getByText("Hello")).toBeInTheDocument();
    })
}
);
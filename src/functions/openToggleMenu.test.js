import '@testing-library/jest-dom'
import { render, fireEvent } from "@testing-library/react";
import DummmyTesting from "../dummy-pages/dummy-testing"
import openToggleMenu from './openToggleMenu';

test("should give the toggle menu the toggle-show class and the carousel the show class", () => {
    const result = render(<DummmyTesting />)
    const toggle = result.container.querySelector(".pages-toggle")
    const caroussel = result.container.querySelector(".pages-caroussel")
    const clickArea = result.container.querySelector("#click-area")

    fireEvent.click(clickArea)

    expect(toggle).toHaveClass("toggle-show")
    expect(caroussel).toHaveClass("show")
})

test("should close the toggle after clicking it twice", () => {
    const result = render(<DummmyTesting />)

    const toggle = result.container.querySelector(".pages-toggle")
    const clickArea = result.container.querySelector("#click-area")

    fireEvent.click(clickArea)
    fireEvent.click(clickArea)

    expect(toggle).not.toHaveClass("toggle-show")
    
})
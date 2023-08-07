import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import DummmyTesting from "../dummy-pages/dummy-testing"
import userEvent from '@testing-library/user-event';

test("should make sure that the animation classes added on by swapToInternal and swapBack are removed after execution", async() => {
    const result = render(<DummmyTesting />)
    const clickArea = result.container.querySelector("#click-area")
    const buttonInternal = result.container.querySelectorAll(".link-btn")[1]
    const textBox = result.container.querySelector("#text-box")
    const toggle = result.container.querySelector("#rentals-toggle")
    const buttonSwap = screen.getByText("Back to Rentals page")

    // Can only select which internal to select from the open toggle menu so we open that up first
    userEvent.click(clickArea)
    // Runs the swapToInternal function that moves toggle and text out of the way so that the internal text can slide in and be tested, takes 2 seconds
    userEvent.click(buttonInternal)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    userEvent.click(buttonSwap)
    expect(textBox).toHaveClass("text-going text-coming")
    await new Promise((resolve) => setTimeout(resolve, 1500))

    expect(textBox).not.toHaveClass("text-going text-coming")
    expect(toggle).not.toHaveClass("text-going text-coming")
})
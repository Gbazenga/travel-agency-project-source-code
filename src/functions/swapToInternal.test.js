import '@testing-library/jest-dom'
import { render, fireEvent, screen } from "@testing-library/react";
import DummyTesting from '../dummy-pages/dummy-testing'; 
import openToggleMenu from './openToggleMenu';
 
it("should check if each animation class goes to it's respective sliding element on button click", async () => {

    const result = render(<DummyTesting/>);
    const button = result.container.querySelector(".link-btn")
    const toggle = result.container.querySelector("#rentals-toggle")
    const textBox = result.container.querySelector("#text-box")
    const internal = result.container.querySelector(".internal-area")
    const clickArea = result.container.querySelector("#click-area")

    fireEvent.click(clickArea)
    fireEvent.click(button)
    await new Promise((resolve) => setTimeout(resolve, 2000))
  
    expect(toggle).toHaveClass("toggle-going")
    expect(textBox).toHaveClass("text-going")
    expect(internal).toHaveClass("internal-coming")
});

it("should check the title shown in the internal content changes on button click", async() => {

    const result = render(<DummyTesting/>);
    // Selects the button in the second carousel-item with the title of "4634 Eagle Drive"
    const button = result.container.querySelectorAll(".link-btn")[1]
    // By default the first item in the DUMMY_DATA array is selected to be pre-loaded in the internal page with "4244 Sugarfoot Lane" as its title
    const defaultTitle = "4244 Sugarfoot Lane"
    const internalTitle = result.container.querySelector("#internals-title")
    const clickArea = result.container.querySelector("#click-area")

    fireEvent.click(clickArea)
    fireEvent.click(button)
    await new Promise((resolve) => setTimeout(resolve, 2000))

    expect(internalTitle.textContent).not.toBe(defaultTitle)

})
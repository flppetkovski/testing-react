/* eslint-disable no-unused-vars */
import {render, screen, fireEvent} from "@testing-library/react"
import Counter from "../Counter"

let getByTestId;

beforeEach(()=>{
    const component = render(<Counter />)
    getByTestId  = component.getByTestId  
})


it ("counter starts at 0", ()=>{
    const counter = getByTestId("counter")
    expect(counter.textContent).toBe("0")
})

it ("input contains initial value of 1", ()=>{
    const input = getByTestId("input")
    expect(input.value).toBe("1")
})

test("change value of input works correctly", ()=>{
    const input = getByTestId("input")
    fireEvent.change(input, {target: {value: "1"}})
    expect (input.value).toBe("1")
})

test("clicking on + button adds 1 to counter", ()=>{
    const button = getByTestId("plus")
    const counter = getByTestId("counter")
    fireEvent.click(button)

    expect(counter.textContent).toBe("1")
})

test("clicking on - button subtracts 1 to counter", ()=>{
    const button = getByTestId("minus")
    const counter = getByTestId("counter")
    fireEvent.click(button)

    expect(counter.textContent).toBe("-1")
})

test("change input value then clicking + button works correctly", ()=>{
    const button = getByTestId("plus")
    const counter = getByTestId("counter")
    const input = getByTestId("input")

    fireEvent.change(input, {target:{value: "5"}})
    fireEvent.click(button)
expect(counter.textContent).toBe("5")
})



test("Adding and subtracting leads to the correct counter number", ()=>{
    const addButton = getByTestId("plus")
    const minusButton = getByTestId("minus")
    const counter = getByTestId("counter")
    const input = getByTestId("input")

    fireEvent.change(input, {target: {value: 10}})

fireEvent.click(addButton)
fireEvent.click(addButton)
fireEvent.click(addButton)
fireEvent.click(addButton)
fireEvent.click(minusButton)
fireEvent.click(minusButton)
fireEvent.click(minusButton)
expect(counter.textContent).toBe("10")
})


it ("counter contains corect class name", async()=>{
    const addButton = getByTestId("plus")
    const minusButton = getByTestId("minus")
    const counter = getByTestId("counter")
    const input = getByTestId("input")  

    expect(counter.className).toBe("")

    fireEvent.change(input, {target:{value: 50}})
    fireEvent.click(addButton)
    fireEvent.click(addButton)
    expect(counter.className).toBe("green")
    fireEvent.click(addButton)
    fireEvent.change(input, {target:{value: 50}})
    expect(counter.className).toBe("green")

    fireEvent.click(minusButton)
    fireEvent.click(minusButton)
    fireEvent.click(minusButton)
    fireEvent.click(minusButton)
    fireEvent.click(minusButton)
    fireEvent.click(minusButton)
    fireEvent.click(minusButton)
expect(counter.className).toBe("red")


})
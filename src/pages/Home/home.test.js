import {render, fireEvent, screen} from "@testing-library/react"

import  Home from './Home';

it ("checkHomeRenderer", ()=>{
    render(<Home/>);
    const bgrd = screen.queryByTitle("home_page_background");
    const header = screen.queryByTitle("header");
    const content = screen.queryByTitle("content");
    const login = screen.queryByTitle("login");
    const label1 = screen.queryByTitle("label1");
    const inputBox1 = screen.queryByTitle("input-box1");
    const inputBox2 = screen.queryByTitle("input-box2");
    const label2 = screen.queryByTitle("label2");
    const submit = screen.queryByTitle("submit");
    expect(bgrd).toBeTruthy();
    expect(header).toBeTruthy();
    expect(content).toBeTruthy();
    expect(login).toBeTruthy();
    expect(label1).toBeTruthy();
    expect(inputBox1).toBeTruthy();
    expect(inputBox2).toBeTruthy();
    expect(label2).toBeTruthy();
    expect(submit).toBeTruthy();
})

describe('CheckLoginButon', () => { 
    render(<Home/>);  
    const handleSubmit = jest.fn();
    const submit = screen.getByText("LOGIN");
    fireEvent.click(submit);
    
    expect(handleSubmit).toHaveBeenCalledTimes(1)
 })
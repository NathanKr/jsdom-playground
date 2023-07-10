import {addListeners, mainUI} from "../src/main-ui";

beforeEach(() => {
  document.body.innerHTML = `<div id="app"></div>`;
  mainUI();
  addListeners();
  localStorage.clear();
});

test("two buttons in dom", () => {
  expect(document.querySelectorAll("button").length).toBe(2);
});

test("one h1 in dom", () => {
  expect(document.querySelectorAll("h1").length).toBe(1);
});

test("button 'Click Me' click -> console.log called once",()=>{
    const elemButton = document.querySelector('button')!;
    const spy = vi.spyOn(console,'log');
    elemButton.click()
    expect(spy).toBeCalledTimes(1);
    expect(spy).toBeCalledWith("button clicked");
})

test("button 'Click Me' click -> localStorage.setItem called once",()=>{
    const elemButton = document.querySelectorAll('button')[0];
    /* --- 
    
     spy on localStorage is not working due to jsdom bug
     (check https://runthatline.com/vitest-mock-localstorage/)
     const spy = vi.spyOn(localStorage,'setItem');
     
     use Storage.prototype instead
     */

    const spy = vi.spyOn(Storage.prototype,'setItem');
    elemButton.click();
    expect(spy).toBeCalledTimes(1);
    expect(spy).toBeCalledWith('key1','val1');
    expect(localStorage.getItem('key1')).toBe('val1');
})

test("button 'add(1,2)' click -> output is 3",()=>{
    const elemButton = document.querySelectorAll('button')[1];
    elemButton.click();
    const res = document.querySelector('output')!.textContent
    expect(res).toBe('3');
})
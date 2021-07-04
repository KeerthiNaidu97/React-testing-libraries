import React from 'react';
import {shallow} from "enzyme"

it("Should render counter and footer components", () => {
    const wrapper = shallow(<App />)
    const footer = wrapper.find(Footer);
    const counter = wrapper.find(Counter);

    expect(footer.exists()).toBe(true);
    expect(counter.exists()).toBe(true);
});
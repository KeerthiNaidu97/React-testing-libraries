import React from 'react'
import {shallow} from "enzyme"
import Footer from "./Footer"

it("should render customer service phone number properly", () => {
    const wrapper = shallow(<Footer />);
    const span = wrapper.find('span');
    const result = span.text()

    expect(result).toBe("Customer Service: 1-800-556-444");
});

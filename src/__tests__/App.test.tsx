import React from "react";
import renderer from 'react-test-renderer';
import App from "../App";


const renderApp = () => {
    return <App/>;
};

describe("<App />", () => {
    it("should render component", async () => {
        const findByTestId = renderApp(),
            ExpressionsSumComponent = renderer.create(findByTestId).toJSON();

        expect(ExpressionsSumComponent).toMatchSnapshot();
    });

    it("should render proper result (5x2 + 2", async () => {
        const findByTestId = renderApp(),
            ExpressionsSumComponent = renderer.create(findByTestId).toJSON();

        expect(ExpressionsSumComponent).toMatchSnapshot();
    });
});

import React from "react";
import renderer from 'react-test-renderer';
import {ExpressionsSum, ExpressionsSumProps} from "../component/Expression/ExpressionsSum";


const renderExpressionSum = (props: Partial<ExpressionsSumProps> = {}) => {
    const defaultProps: ExpressionsSumProps = {
        sumOfExpressions: {1: 1},
    };

    return <ExpressionsSum {...defaultProps} {...props} />;
};

describe("<ExpressionsSum />", () => {
    it("should render component", () => {
        const findByTestId = renderExpressionSum(),
            ExpressionsSumComponent = renderer.create(findByTestId).toJSON();

        expect(ExpressionsSumComponent).toMatchSnapshot();
    });
});

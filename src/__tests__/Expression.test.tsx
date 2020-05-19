import React from "react";
import {Expression, ExpressionProps} from "../component/Expression/Expression";
import renderer from 'react-test-renderer';
import {mount} from "enzyme";


const renderExpression = (props: Partial<ExpressionProps> = {}) => {
    const defaultProps: ExpressionProps = {
        expression: [{factor: 1, power: 1}],
        setExpression: () => {}
    };

    return <Expression {...defaultProps} {...props} />;
};

describe("<Expression />", () => {
    it("should render component", async () => {
        const findByTestId = renderExpression(),
            ExpressionComponent = renderer.create(findByTestId).toJSON();

        expect(ExpressionComponent).toMatchSnapshot();
    });

    it('should set the factor value on change event', () => {
        const setExpression = jest.fn(),
            findByTestId = renderExpression({setExpression}),
            FactorInputComponent = mount(findByTestId).find('#factor-0');

        FactorInputComponent.simulate('change', {target: {value: '3'}});

        expect(setExpression).toHaveBeenCalledWith([{"factor": 3, "power": 1}]);
    });

    it('should set the power value on change event', () => {
        const setExpression = jest.fn(),
            findByTestId = renderExpression({setExpression}),
            PowerInputComponent = mount(findByTestId).find('#power-0');

        PowerInputComponent.simulate('change', {target: {value: '3'}});

        expect(setExpression).toHaveBeenCalledWith([{"factor": 1, "power": 3}]);
    });

    it('should add expression on click event', () => {
        const setExpression = jest.fn(),
            findByTestId = renderExpression({setExpression}),
            AddExpressionButton = mount(findByTestId).find('#add-expression');

        AddExpressionButton.simulate('click');

        expect(setExpression).toHaveBeenCalledTimes(1);
    });

    it('should remove expression on click event', () => {
        const setExpression = jest.fn(),
            findByTestId = renderExpression({setExpression}),
            RemoveExpressionButton = mount(findByTestId).find('#remove-expression-0');

        RemoveExpressionButton.simulate('click');

        expect(setExpression).toHaveBeenCalledTimes(1);
    });
});

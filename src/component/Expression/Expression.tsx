import React from 'react';
import {IExpression} from "../../util/algebra";

export interface ExpressionProps {
    expression: IExpression[];
    setExpression: (arg: IExpression[]) => void;
}

export const Expression = ({expression, setExpression}: ExpressionProps) => {

    const addExpressionPart = () => {
        const item = {factor: 0, power: 0};
        let newFirstExpression = [...expression];
        newFirstExpression.push(item);

        setExpression(newFirstExpression);
    };

    const removeExpressionPart = (key: number) => {
        let newFirstExpression = [...expression];
        newFirstExpression.splice(key, 1);

        setExpression(newFirstExpression);
    };

    const changeExpressionFactor = (factor: number, power: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const newFirstExpression = expression.map((obj: IExpression) =>
            obj.power === power ? { ...obj, factor: parseInt(e.target.value) } : obj
        );

        setExpression(newFirstExpression);
    };

    const changeExpressionPower = (factor: number, power: number, key: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
        let newFirstExpression = [...expression];

        newFirstExpression[key].power = parseInt(e.target.value);

        setExpression(newFirstExpression);
    };

    return (
        <div>
            <button id={'add-expression'} onClick={addExpressionPart}>
                +
            </button>
            <br/>
            <div className={'expression'}>
            {expression.map(({factor, power}: {factor: number, power: number}, key: number) => {
                return(
                    <div key={key}>
                        <input id={`factor-${key}`} type={'number'} value={factor} onChange={changeExpressionFactor(factor, power)}/>
                        x
                        <input id={`power-${key}`} type={'number'} value={power} onChange={changeExpressionPower(factor, power, key)}/>
                        <button id={`remove-expression-${key}`} onClick={() => removeExpressionPart(key)}>
                            x
                        </button>
                        <br/>
                    </div>
                )
            })}
            </div>
        </div>
    );
};

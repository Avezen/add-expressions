import React from 'react';

export interface ExpressionProps {
    expression: any;
    setExpression: any;
}

export const Expression = ({expression, setExpression}: ExpressionProps) => {

    const addExpressionPart = () => {
        const item = {factor: 0, power: 0};
        let newFirstExpression = [...expression];
        newFirstExpression.push(item);

        setExpression(newFirstExpression);
    };

    const removeExpressionPart = (key: any) => {
        let newFirstExpression = [...expression];
        newFirstExpression.splice(key, 1);

        setExpression(newFirstExpression);
    };

    const changeExpressionFactor = (factor: any, power: any) => (e: any) => {
        const newFirstExpression = expression.map((obj: any) =>
            obj.power === power ? { ...obj, factor: parseInt(e.target.value) } : obj
        );

        setExpression(newFirstExpression);
    };

    const changeExpressionPower = (factor: any, power: any, key: number) => (e: any) => {
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
            {expression.map(({factor, power}: {factor: any, power: any}, key: any) => {
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

import React from 'react';

export interface ExpressionsSumProps {
    sumOfExpressions: any;
}

export const ExpressionsSum = ({sumOfExpressions}: ExpressionsSumProps) => (
    <div className={'expression'} style={{display: 'flex', justifyContent: 'center'}}>
        {Object.entries(sumOfExpressions).reverse().map(
            ([power, factor]) => {
                if (power === '0') {
                    return (
                        <>
                            <span>{factor as number > 0 && '+'}</span>{factor as string}
                        </>
                    )
                }

                if (power === '1') {
                    return (
                        <>
                            <span>{factor as number > 0 && '+'}</span>{factor}x
                        </>
                    )
                }

                return (
                    <>
                        <span>{factor as number > 0 && '+'}</span>{factor}x
                        <sup>
                            <small>
                                {power}
                            </small>
                        </sup>
                    </>
                )
            }
        )}
    </div>
);
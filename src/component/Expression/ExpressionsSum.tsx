import React from 'react';
import {IExpressionOutput} from "../../util/algebra";

export interface ExpressionsSumProps {
    sumOfExpressions: IExpressionOutput;
}

export const ExpressionsSum = ({sumOfExpressions}: ExpressionsSumProps) => (
    <div className={'expression'}>
        {Object.entries(sumOfExpressions).reverse().map(
            ([power, factor]) => {
                if (power === '0') {
                    return (
                        <>
                            <span>{factor > 0 && '+'}</span>{factor}
                        </>
                    )
                }

                if (power === '1') {
                    return (
                        <>
                            <span>{factor > 0 && '+'}</span>{factor}x
                        </>
                    )
                }

                return (
                    <>
                        <span>{factor > 0 && '+'}</span>{factor}x
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
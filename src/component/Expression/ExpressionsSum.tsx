import React from 'react';
import {IExpressionOutput} from "../../util/algebra";

export interface ExpressionsSumProps {
    sumOfExpressions: IExpressionOutput;
}

export const ExpressionsSum = ({sumOfExpressions}: ExpressionsSumProps) => (
    <div className={'expression'}>
        {Object.entries(sumOfExpressions).reverse().map(
            ([power, factor], key) => {
                if (power === '0') {
                    return (
                        <React.Fragment key={key}>
                            <span>{factor > 0 && '+'}</span>{factor}
                        </React.Fragment>
                    )
                }

                if (power === '1') {
                    return (
                        <React.Fragment key={key}>
                            <span>{factor > 0 && '+'}</span>{factor}x
                        </React.Fragment>
                    )
                }

                return (
                    <React.Fragment key={key}>
                        <span>{factor > 0 && '+'}</span>{factor}x
                        <sup>
                            <small>
                                {power}
                            </small>
                        </sup>
                    </React.Fragment>
                )
            }
        )}
    </div>
);
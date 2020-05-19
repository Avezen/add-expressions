export interface IExpression {
    factor: number;
    power: number
}

export type IExpressionOutput = Record<string, number>;

export const algebra = {
    sumExpressions(input1: IExpression[], input2: IExpression[]) {
        let output: IExpressionOutput = {};

        input1.forEach((expression) => {
            if (expression.factor !== 0) {
                const item = {[expression.power]: expression.factor};
                output = Object.assign(item, output)
            }
        });

        input2.forEach((expression) => {
            if (expression.factor !== 0) {
                if ((output as IExpressionOutput)[expression.power]) {
                    (output as IExpressionOutput)[expression.power] += expression.factor;
                } else {
                    const item = {[expression.power]: expression.factor};
                    output = Object.assign(item, output)
                }
            }
        });

        // For given expressions, not modifable by state like i did in this app I would go this way:
        //
        // for (const key in input2) {
        //     if (input2.hasOwnProperty(key)) {
        //         if ((output as Expression)[key]) {
        //             (output as Expression)[key] += input2[key];
        //         } else {
        //             const item = {};
        //             (item as Expression)[key] = input2[key];
        //             output = Object.assign(item, output);
        //         }
        //     }
        // }
        //
        // Slower but nicer version
        //
        // for (let [key, value] of Object.entries(input2)) {
        //     if ((output as Expression)[key]) {
        //         (output as Expression)[key] += value;
        //     } else {
        //         const item = {};
        //         (item as Expression)[key] = value;
        //         output = Object.assign(item, output);
        //     }
        // }

        return output;
    }
};
import React, {useEffect, useState} from 'react';
import './App.css';
import {algebra} from "./util/algebra";
import {Expression} from "./component/Expression/Expression";
import {ExpressionsSum} from "./component/Expression/ExpressionsSum";

const App = () => {
    const [firstExpression, setFirstExpression] = useState([{factor: 5, power: 2}]);
    const [secondExpression, setSecondExpression] = useState([{factor: 2, power: 0}]);
    const [sumOfExpressions, setSumOfExpressions] = useState({});

    useEffect(() => {
        setSumOfExpressions(algebra.sumExpressions(firstExpression, secondExpression));
    }, [firstExpression, secondExpression]);

    return (
        <div className="App">
            <br/>
            First expression:
            <Expression
                expression={firstExpression}
                setExpression={setFirstExpression}
            />
            <br/>
            Second expression:
            <Expression
                expression={secondExpression}
                setExpression={setSecondExpression}
            />
            <br/>
            Result:
            <ExpressionsSum
                sumOfExpressions={sumOfExpressions}
            />
        </div>
    );
};

export default App;

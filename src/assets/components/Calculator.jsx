import { useState } from "react";

const Calculator = () => {

    const [balance,changeBalance] = useState(0)
    const [value,changeValue] = useState(0)

    return ( 
        <section>
            <h2>Balance</h2>
            <div>
                <p>{balance}</p>
            </div>
            <input onChange={(e) => {changeValue(e.target.value)}} className="border-2 border-black mb-4" type="text" name="" id="" />
            <div className="flex w-44 justify-between">
                <button onClick={() => {changeBalance(balance + value)}} className="border-2 border-black">Deposit</button>
                <button onClick={() => {changeBalance(balance - value)}} className="border-2 border-black">Withdrawal</button>
            </div>
            <p>{value}</p>
        </section>
    );
}

export default Calculator;
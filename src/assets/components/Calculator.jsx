import { useState } from "react";

const Calculator = () => {

    const [balance,changeBalance] = useState(0)
    const [value,changeValue] = useState(0)


    return ( 
        <section className=" w-60 p-4 mx-auto border-2 border-black">
            <h2>Balance</h2>
            <div>
                <p>{balance}€</p>
            </div>
            <input onChange={(e) => {changeValue(e.target.value)}} className="border-2 border-black mb-4" type="text" name="" id="" />
            <div className="flex w-44 justify-between">
                <button onClick={() => {changeBalance(Number(balance) + Number(value))}} className="p-1 border-2 border-black">Deposit</button>
                <button onClick={() => {changeBalance(Number(balance) - Number(value))}} className="p-1 border-2 border-black">Withdrawal</button>
            </div>
        </section>
    );
}

export default Calculator;
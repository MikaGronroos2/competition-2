import React from 'react'

const Dice = () => {

    const dicePath = "../images/dice";
    const diceExtension = ".png";
    const emptyDice = "../images/dice-empty.png";
    const [dice, setDice] = React.useState(emptyDice);

    function getRandomInt(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloor = Math.floor(max);
        return Math.floor(Math.random() * maxFloor + minCeiled);
    };

    const handleDice = () => {
        setDice(emptyDice)
        setTimeout(() => {
            setDice(dicePath + getRandomInt(1,6) + diceExtension)
        }, 1000)
    }

  return (
    <div className='dice'>
        <img src={dice} onClick={handleDice} className="dice-img"></img>
    </div>
  )
}

export default Dice

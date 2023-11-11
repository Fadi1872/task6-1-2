import { useState } from 'react';
import './NavigationDots.css'
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi'

const NavigationDots = ({ number, goToFunction, handlePrev, handleNext }) => {
    const [changeActiveDot, setChangeActiveDot] = useState(0);
    console.log(changeActiveDot);
    const handleAllPrev = () => {
        handlePrev();
        (changeActiveDot == 0) ? setChangeActiveDot(number) : setChangeActiveDot(changeActiveDot - 1)
    }
    const handleAllNext = () => {
        handleNext();
        (changeActiveDot == number) ? setChangeActiveDot(0) : setChangeActiveDot(changeActiveDot + 1)
    }

    return (
        <>
            <div className="position-absolute bottom-0 start-50 translate-middle d-flex gap-3">
                {(() => {
                    let dots = [];
                    for (let index = 0; index <= number; index++) {
                        (changeActiveDot == index)
                            ? dots.push(<div key={index} className="navigator bg-dark rounded-pill transition-5"
                                onClick={() => { goToFunction(index); setChangeActiveDot(index); }}></div>)
                            : dots.push(<div key={index} className="navigator bg-secondary rounded-pill transition-5"
                                onClick={() => { goToFunction(index); setChangeActiveDot(index); }}></div>)
                    }
                    return dots;
                }
                )()}
            </div>
            <button className='position-absolute border-0 start-0 top-50 translate-middle fs-1 bg-secondary icon rounded-pill text-white d-flex justify-content-center align-items-center' onClick={handleAllPrev}>
                <BiLeftArrow />
            </button>
            <button className='position-absolute border-0 start-100 top-50 translate-middle fs-1 bg-secondary icon rounded-pill text-white d-flex justify-content-center align-items-center' onClick={handleAllNext}>
                <BiRightArrow />
            </button>
        </>
    )
}

export default NavigationDots
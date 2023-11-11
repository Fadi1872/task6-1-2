import './Slider.css'
import Slide from '../Slide/Slide'
import { useRef } from 'react'
import NavigationDots from '../NavigationDots/NavigationDots'

const Slider = () => {
    const slides = [
        {
            id: 0,
            background: 'bg-primary'
        },
        {
            id: 1,
            background: 'bg-danger'
        },
        {
            id: 2,
            background: 'bg-warning'
        },
        {
            id: 3,
            background: 'bg-success'
        },
        {
            id: 4,
            background: 'bg-info'
        }
    ]

    const slider = useRef(null);
    let currentSlide = 0;

    const goToSlide = () => {
        slider.current.style.transform = `translate(calc(${currentSlide} * (-100%)))`;
    }
    const naavigationTrack = (setState) => {
        setState(currentSlide);
    }
    const handleNext = () => {
        (currentSlide === slides.length -1) ? currentSlide = 0 : currentSlide++;
        goToSlide();
    }
    const handlePrev = () => {
        (currentSlide === 0) ? currentSlide = slides.length -1 : currentSlide--;
        goToSlide();
    }
    const handleNavigationDots = (index) => {
        currentSlide = index;
        goToSlide();
    }

    return (
        <div className='vh-100 w-100 position-relative'>
            <div className='h-100 w-100 overflow-hidden'>
                <div className='h-100 w-100 position-relative transition-5' ref={slider}>
                    {
                        slides.map(slide => (
                            <Slide key={slide.id} slideId={slide.id} backgroundColor={slide.background} />
                        ))
                    }
                </div>
            </div>
            <NavigationDots handleNext={handleNext} handlePrev={handlePrev} goToFunction={handleNavigationDots} number={slides.length -1} />
            
        </div>
    )
}

export default Slider
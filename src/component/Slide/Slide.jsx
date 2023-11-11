import './Slide.css'

const Slide = ({slideId, backgroundColor}) => {
    return (
        <div className={`slide w-100 h-100 ${backgroundColor} d-flex justify-content-center align-items-center position-absolute`} style={{'--slide-id' : slideId}}>
            <h1 className="fs-1 text-white opacity-50">Slide {slideId + 1}</h1>
        </div>
    )
}

export default Slide
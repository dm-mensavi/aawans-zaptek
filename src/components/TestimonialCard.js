import quoteMark from '../public/quote.svg'

const TestimonialCard = (props) => {
    return (
        <div className='card p-10 lg:p-16 shadow-custom bg-white max-w-[460px]'>
            <div className='card-content font-serif'>
                <figure className='flex justify-center items-center'>
                    <img src={quoteMark} alt='quotation mark' />
                </figure>

                <p className='text-lg text-secondaryLight text-center mt-8'>
                {props.testimony.testimony}
                </p>

                <div className='flex gap-6 justify-center items-center mt-8'>
                <figure>
                    {props.testimony.image}
                </figure>
                <div>
                    <h3 className='text-lg font-bold'>
                    {props.testimony.authur}
                    </h3>

                    <h4 className='text-primary text-base font-sans'>
                    {props.testimony.jobTitle}
                    </h4>
                </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard

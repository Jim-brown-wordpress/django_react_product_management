import React from 'react';


const carousels = [
    {header: 'Welcome to our site for interview' , content: 'We will guide you to be success in job interview' , target: '#about' },
    {header: 'Perfect and Full Answers' , content: 'You can see full answers about all questions so that you can learn by yourself from scratch.' , target: '#about' },
    {header: 'Strong support adn low price' , content: 'Most of answers will be provided in free , You can get most of important information with low price' , target: '#about' },
]

const Carousel = ({

}) => {
    return (
        <section id="hero" className="d-flex flex-column justify-content-end align-items-center">
            <div id="heroCarousel" data-bs-interval="5000" className="container carousel carousel-fade" data-bs-ride="carousel">
                {
                    carousels.map((item , index) => (
                        <div className={`carousel-item ${index == 0 ? 'active':''}`} key={index}>
                            <div className="carousel-container">
                                <h2 className="animate__animated animate__fadeInDown">{item.header}</h2>
                                <p className="animate__animated fanimate__adeInUp">{item.content}</p>
                                <a href={item.target} className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
                            </div>
                        </div>
                    ))
                }

                <a className="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon bx bx-chevron-left" aria-hidden="true"></span>
                </a>

                <a className="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon bx bx-chevron-right" aria-hidden="true"></span>
                </a>
            </div>
        </section>
    )
}


export {Carousel}

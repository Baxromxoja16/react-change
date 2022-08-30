import React from 'react'
import "./CoursFor.sass"

const CoursFor = () => {
    return (
        <section className='CoursFor'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="course_left_info">
                        <h2>Кому подойдет курс?</h2>
                        <div className="course_info">
                            <h4>0.1 Новичкам в программировании</h4>
                            <p className='course_info_text'>Даже если вы никогда не работали в IT, вы получите востребованную и высокооплачиваемую специальность</p>
                        </div>
                        <div className="course_info">
                            <h4>0.2 Начинающим веб-разработчикам</h4>
                            <p className='course_info_text'>У вас будет всё для ускоренного карьерного роста: комплексные знания и опыт работы с продвинутыми инструментами, методологиями и стандартами</p>
                        </div>
                        <div className="course_info">
                            <h4>Кому подойдет курс?</h4>
                            <p className='course_info_text'>Подскажем, как перейти в востребованное направление и зарабатывать больше</p>
                        </div>
                    </div>
                    <div className="course_right_date">
                        <h3>9 месяцев</h3>
                        <p className='right_date'>Срок обучения</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CoursFor
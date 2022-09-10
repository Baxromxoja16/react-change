import React from 'react'
import './Course.sass'
import img1 from "../../../images/course.png"
import img2 from "../../../images/course.png"

const Course = () => {

    const info = [
        {
            title: "Java Development",
            text: "Курсы программирования Java — современная комплексная программа обучения языку Java. Java – популярный язык программирования, на котором кодят игровые и мобильные приложения, десктоп-программы и огромное количество soft-продуктов для предприятий.",
            img: img1
        },
        {
            title: "PHP Development",
            text: "Курсы PHP — это комплексная двухуровневая программа обучения PHP,  после изучения которой вы сможете претендовать на вакансию Junior-специалиста и зарплату от 300 $/мес.",
            img: img2
        },
        {
            title: "Java Development",
            text: "Курсы программирования Java — современная комплексная программа обучения языку Java. Java – популярный язык программирования, на котором кодят игровые и мобильные приложения, десктоп-программы и огромное количество soft-продуктов для предприятий.",
            img: img1
        },
        {
            title: "PHP Development",
            text: "Курсы PHP — это комплексная двухуровневая программа обучения PHP,  после изучения которой вы сможете претендовать на вакансию Junior-специалиста и зарплату от 300 $/мес.",
            img: img2
        }
    ]

    let answw = info.map((x, i) => {
        let answ =
            <div div className={i % 2 !== 0 ? "row flex-direction-reverse" : "row"} key={i}>
                <div className="course_left_info">
                    <h2>{x.title}</h2>
                    <p className='course_text'>{x.text}</p>
                    <div className="course_buttons">
                        <a href='/aboutcourse' className='about_course'>о курсе</a>
                        <div className='line'></div>
                        <span>Количество мест: 14</span>
                    </div>
                </div>
                <div className="course_right_img">
                    <img src={x.img} alt={x.img} />
                </div>
            </div >
        return answ
    })

    return (
        <section className='course'>
            <div className="container">
                {answw}
            </div>
        </section>
    )
}

export default Course
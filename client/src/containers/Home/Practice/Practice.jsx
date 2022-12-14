import React from 'react'
import "./Practice.sass"
import top_img from "../../../images/top_bg.png"
import bottom_bg from "../../../images/bottom_bg.png"

const Practice = () => {
    return (
        <section className='practice'>
            <div className="container">
                <div className="row ">
                    <div className="practice_left_info">
                        <h3>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_3_307)">
                                    <path d="M12.0117 0.751953C5.79853 0.751953 0.761719 5.78872 0.761719 12.002C0.761719 18.2152 5.79853 23.252 12.0117 23.252C18.2249 23.252 23.2617 18.2151 23.2617 12.002C23.2617 5.78876 18.225 0.751953 12.0117 0.751953ZM18.906 18.8962C17.1964 20.6006 14.9136 21.6075 12.5022 21.7206C10.0908 21.8337 7.72372 21.045 5.8621 19.5082C4.00048 17.9714 2.7777 15.7965 2.43204 13.4074C2.08638 11.0182 2.64259 8.58596 3.99229 6.58452C5.34199 4.58307 7.3885 3.15582 9.73305 2.58086C12.0776 2.00591 14.5522 2.32443 16.6748 3.47437C18.7973 4.62432 20.4156 6.5233 21.2145 8.8013C22.0134 11.0793 21.9355 13.5731 20.9961 15.7969C20.5065 16.9555 19.7967 18.0081 18.906 18.8962Z" fill="#242424" />
                                    <path d="M11.233 7.73374L14.7511 11.2519H6.00641V12.7519H14.7511L11.233 16.27L12.2936 17.3307L17.6224 12.0019L12.2936 6.6731L11.233 7.73374Z" fill="#242424" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_3_307">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            Ориентированность на практику</h3>
                        <p className='left_info_text'>
                            Мы учим на практике и разрабатываем программы совместно со специалистами из компаний-лидеров рынка. Вы создадите несколько проетов  как самостоятельно, так и в команде
                        </p>
                    </div>
                    <div className="practice_right_img">
                        <img src={top_img} alt="" />
                        <span>03</span>
                    </div>
                </div>
                <div className="row">
                    <div className="practice_right_img">
                        <span>04</span>
                        <img src={bottom_bg} alt="" />
                    </div>
                    <div className="practice_left_info">
                        <h3>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_3_307)">
                                    <path d="M12.0117 0.751953C5.79853 0.751953 0.761719 5.78872 0.761719 12.002C0.761719 18.2152 5.79853 23.252 12.0117 23.252C18.2249 23.252 23.2617 18.2151 23.2617 12.002C23.2617 5.78876 18.225 0.751953 12.0117 0.751953ZM18.906 18.8962C17.1964 20.6006 14.9136 21.6075 12.5022 21.7206C10.0908 21.8337 7.72372 21.045 5.8621 19.5082C4.00048 17.9714 2.7777 15.7965 2.43204 13.4074C2.08638 11.0182 2.64259 8.58596 3.99229 6.58452C5.34199 4.58307 7.3885 3.15582 9.73305 2.58086C12.0776 2.00591 14.5522 2.32443 16.6748 3.47437C18.7973 4.62432 20.4156 6.5233 21.2145 8.8013C22.0134 11.0793 21.9355 13.5731 20.9961 15.7969C20.5065 16.9555 19.7967 18.0081 18.906 18.8962Z" fill="#242424" />
                                    <path d="M11.233 7.73374L14.7511 11.2519H6.00641V12.7519H14.7511L11.233 16.27L12.2936 17.3307L17.6224 12.0019L12.2936 6.6731L11.233 7.73374Z" fill="#242424" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_3_307">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            Наставник</h3>
                        <p className='left_info_text'>
                            В течение всего обучения у вас будет личный помощник-куратор. С ним вы сможете быстро разобраться со всеми проблемами, на которые в ином случае ушли бы недели. Работа с наставником удваивает скорость и качество обучения
                        </p>
                        <p className='left_info_text'>За плечами наших преподавателей более 500 проектов</p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Practice
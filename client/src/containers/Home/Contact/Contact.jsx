import React from 'react'
import Social from '../../../components/Social/Social'
import Tel from '../../../components/icons/Tel'
import "./Contact.sass"

const Contact = () => {
    return (
        <section className='contacts'>
            <div className="container-fluid">
                <div className="row">
                    <div className="contact_left_info">
                        <h2>Освойте профессию будущего вместе с Change IT Academy</h2>
                        <p className='contact_info_text'>Наши менеджеры всегда готовы дать вам полную консультацию, касающуюся всех подробностей обучения у нас. </p>
                        <a href='tel:+998935613300' className='contact_info_number'> <Tel />
                            +998 93 561 33 00</a>
                        <Social />
                    </div>
                    <form action="" className='contact_right_form'>
                        <h2>Оставьте заявку</h2>
                        <p className='contact_form_text'>Заполните поля ниже и мы перезвоним вам в ближайшее время</p>
                        <input type="text" placeholder='Имя' />
                        <input type="text" placeholder='Номер телефона' />
                        <button className='btn_send'>Отправить</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
import React from 'react'
import './Coworking.sass'
import Icon from '../../../components/icons/Icon'
import TimeIcon from '../../../components/icons/TimeIcon'

const Coworking = () => {


    return (
        <section className='coworking'>
            <div className="container-big">
                <div className="row ">
                    <div className="coworking_left">
                        <h3>Нет возможности практиковаться дома?</h3>
                        <p className='coworking_left_text'>Мы рады представить вашему вниманию наш современный коворкинг, в котором вы можете практиковать полученные знания.</p>
                        <p className='coworking_left_date'> {<TimeIcon />}
                            9:00 - 21:00 </p>
                    </div>
                    <div className="coworking_right">
                        <h3>Преимущества нашего коворкинга:</h3>
                        <ul className='coworking_right_item'>
                            <li>{<Icon />} Доступ к интернету круглосуточно</li>
                            <li>{<Icon />} Посещение коворкинга входит в стоимость обучения</li>
                            <li>{<Icon />} Атмосфера помогает развитию коллективных навыков работы</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Coworking
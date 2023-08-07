import React from 'react';

const WhyService = () => {
    const servicesList = [
        {
            id:1,
            title: "Выразите свои желания",
            descr :"Наш сервис дает вам уникальную возможность просто и наглядно выразить все свои желания.  Не нужно больше стесняться или мечтать в тишине. Вместе мы поможем вашим желаниям стать реальностью.",
        },
        {
            id:2,
            title: "Поделитесь своими мечтами",
            descr :"Наш сервис позволяет вам поделиться своим списком желаний с друзьями, семьей и близкими людьми. Это не только помогает им выбрать идеальный подарок для вас, но и способствует более глубокому пониманию ваших интересов и страстей.",
        },
        {
            id:3,
            title: "Удобство и простота",
            descr :"Наш сервис позволяет вам поделиться своим списком желаний с друзьями, семьей и близкими людьми. Это не только помогает им выбрать идеальный подарок для вас, но и способствует более глубокому пониманию ваших интересов и страстей.",
        },
        {
            id:4,
            title: "Больше, чем просто сервис",
            descr: "Мы - не просто платформа для создания списков желаний. Мы - сообщество людей, которые ценят свои желания и готовы помочь другим осуществить свои мечты. Не упустите возможность воплотить свои м",
        },
    ]
    return (
        <div className="container">
            <section className='services'>
                <div className="services-title">Почему стоит попробовать наш продукт?</div>
                <div className="services-block">
                    {
                        servicesList.map(item => (
                            <div className="services-block__item" key={item.id}>
                                <h2 className="services-item__title">{item.title}</h2>
                                <p className="services-item__descr">{item.descr}</p>
                            </div>
                        ))
                    }
                </div>
            </section>
        </div>
    );
};

export default WhyService;
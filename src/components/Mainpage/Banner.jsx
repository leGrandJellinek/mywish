import React from 'react';

const Banner = (props) => {
    let bannerAlign = 'banner';
    if (props.rowRev) {
        bannerAlign += ' row-reverse';
    }
    return (
        <div className="bg">
            <div className="container">
                <section  className={bannerAlign}>
                    <div className="banner-left">
                        <h2 className="banner-title">{props.text}</h2>
                        <a href="/" className="banner-btn">{props.buttonText}</a>
                    </div>
                    <div className="banner-right">
                        <div className="banner-img"></div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Banner;
import React from 'react';
import about from '../../images/about.jpg'

const About = () => {
    return (
        <div>
            <div className="container">
                <img className="w-75 h-75 " src={about} alt="" />
            </div>
            <div className="container mt-2">
                <h2 className="text-center"> About the Centre for Coaching and associated Centres</h2>
                <p>  The Centre for Coaching is an international training centre and consultancy established in 2001. It is a leading training provider of coaching, psychological coaching and coaching psychology courses. As a coach training provider since 2001 it has trained over 1500 national and international students/delegates.</p>

                <p > The Centre for Coaching has provided training for coaches, managers, trainers, psychologists, health and HR professionals from Europe to New Zealand. Its sister organisation, Centre for Stress Management, was established in 1987. The Centres form part of the International Academy for Professional Development Ltd (IAPD), Centres of Expertise group. </p>



                <h3 className="text-center">OUR APPROACH</h3>

                <p>   The Centre has pioneered the development of evidence based coaching since its inception. The main approach underpinned by research is Cognitive Behavioural and Solution Focused Coaching. We also offer rational and multimodal coaching. Our courses are modular and involve blended learning. Our Course Directors and trainers have published books and articles on coaching, coaching psychology and other relevant topics.</p>
            </div>
        </div>
    );
};

export default About;
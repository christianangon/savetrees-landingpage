import React from 'react'
import { ServicesContainer, ServicesH1, ServicesH2, ServicesWrapper,ServicesCard, ServicesIcon, ServicesP } from './ServicesElements'
import Icon1 from '../../images/svg-4.svg';
import Icon2 from '../../images/svg-7.svg';
import Icon3 from '../../images/svg-6.svg';


const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1> Our Services  </ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={Icon1}/>
                        <ServicesH2>Planting more trees</ServicesH2>
                        <ServicesP>We help reduce your fees and increase overall revenue.</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon2}/>
                        <ServicesH2>Save birds</ServicesH2>
                        <ServicesP>We help reduce your fees and increase overall revenue.</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon3}/>
                        <ServicesH2>Save our Planet</ServicesH2>
                        <ServicesP>We help reduce your fees and increase overall revenue.</ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
           
        </ServicesContainer>
    )
}

export default Services

/*
 * @Description: 
 * @Author: Ian
 * @Date: 2024-02-05 10:51:29
 * @LastEditTime: 2024-02-05 12:11:31
 * @LastEditors: Ian
 */
import React, { useState } from 'react';
import Video from '../../video/video.mp4';
import { Button } from '../ButtonElements';
import { HeroContainer,HeroBg, VideoBg,HeroContent, HeroH1,HeroH1User, HeroP, HeroBtnWrapper, ArrowForward,ArrowRight } from './HeroElements';


const HeroSection = ({isLoggedIn, email}) => {
    const [hover, setHover] = useState (false);

    const onHover = () => {
        setHover(!hover);
    };
    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Save the Trees,</HeroH1>
                <HeroH1User>{isLoggedIn ? email : ""}</HeroH1User>
                <HeroP>
                Plant a tree, so that the next generation can get air for free.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}
                    // primary='true'
                    // dark='true'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80} 
                    >
                        Get Started {hover ? <ArrowForward /> : <ArrowRight /> }
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection

import React from 'react'
import styled from 'styled-components';

// Components
import HeroSlider, {
    Slide,
    ButtonsNav,
    OverlayContainer,
} from 'hero-slider';

const StyledOverlayContainer = styled(OverlayContainer)`
  &&& {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background-color: rgba(0, 0, 0, 0.33);
    text-align: center;
    H2, H3 {
      margin: 0 36px;
    }
  }
`;

export default function BlendModeSlider() {
    return (
        <HeroSlider
            slidingAnimation="fade"
            orientation="horizontal"
            initialSlide={1}
            style={{
                backgroundColor: '#000',
                color: '#FFF'
            }}
            settings={{
                slidingDuration: 400,
                slidingDelay: 100,
                shouldAutoplay: true,
                shouldDisplayButtons: true,
                autoplayDuration: 8000,
                height: '90vmin'
            }}
        >
            <StyledOverlayContainer>
                <h2>
                    Blend Mode Slider
                </h2>
                <h3>
                    Slides&apos; and masks&apos; background blend mode set to luminosity
                </h3>
                <h3>
                    Slides&apos; shouldRenderMask prop set to true
                </h3>
            </StyledOverlayContainer>

            <Slide
                shouldRenderMask
                navDescription="Budgets"
                background={{
                    backgroundColor: '#2D7791',
                    backgroundBlendMode: 'luminosity',
                    maskBackgroundBlendMode: 'luminosity',
                    backgroundImage: `url("/img/img1.jpg")`,
                }}
            />

            <Slide
                shouldRenderMask
                navDescription="Palau - Pacific Ocean"
                background={{
                    backgroundColor: '#8A8A8A',
                    backgroundBlendMode: 'luminosity',
                    maskBackgroundBlendMode: 'luminosity',
                    backgroundImage: `url(/img/img2.jpg)`,
                }}
            />

            <Slide
                shouldRenderMask
                navDescription="Quepos - Costa Rica"
                background={{
                    backgroundColor: '#EA2329',
                    backgroundBlendMode: 'luminosity',
                    maskBackgroundBlendMode: 'luminosity',
                    backgroundImage: `url(/img/img3.jpg)`
                }}
            />
            <ButtonsNav />
        </HeroSlider>
    );
}


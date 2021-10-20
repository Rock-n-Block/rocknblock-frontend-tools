import {FunctionalComponent, h} from 'preact';
import {useCallback, useEffect, useState} from 'preact/hooks';

import {
    ContactUs,
    UpButton,
    TelegramWidget, WhatAreTheTools, ToolsInterface, ToolsOptions, About, WhyDoYouNeed
} from "../../components";

const HomePage: FunctionalComponent = () => {
    const [isActive, setIsActive] = useState(false);

    const logIt = useCallback(() => {
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }, [])

    useEffect(() => {

        window.addEventListener("scroll", logIt);

        return (): void => {
            window.removeEventListener("scroll", logIt);
        };
    }, [logIt]);

    return (
        <div>
            <TelegramWidget />
            {isActive ? <UpButton /> : null}
            <About />
            <WhatAreTheTools />
            <ToolsInterface />
            <ToolsOptions />
            <WhyDoYouNeed />
            <ContactUs title={'Get Live Technical Demo'} />
        </div>
    )
}

export default HomePage;

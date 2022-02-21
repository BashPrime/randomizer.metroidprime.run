import { Footer as FooterElem, BrandText } from './styles';

export const Footer = () => {
    const currentYear = (new Date()).getFullYear();

    return (
        <FooterElem className="footer">
            <div className="content has-text-centered">
                <BrandText>Metroid Prime Randomizer</BrandText>
                <p>
                    The Metroid Prime series, in-game imagery, and system logos Copyright © 2002-{currentYear} Nintendo Co., Ltd.
                </p>
                <p><a href="https://metroidprime.run" target="_blank">metroidprime.run</a> does <strong>not</strong> distribute copyrighted material.</p>
            </div>
        </FooterElem>
    );
};

export default Footer;
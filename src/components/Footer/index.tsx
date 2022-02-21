export const Footer = () => {
    const currentYear = (new Date()).getFullYear();

    return (
        <footer className="footer">
            <div className="content has-text-centered">
                <p>
                    The Metroid Prime series, in-game imagery, and system logos Copyright © 2002-{currentYear} Nintendo Co., Ltd.
                </p>
                <p><a href="https://metroidprime.run" target="_blank">metroidprime.run</a> does <strong>not</strong> distribute copyrighted material.</p>
            </div>
        </footer>
    );
};

export default Footer;
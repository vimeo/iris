import { core } from '@vimeo/iris/tokens';

function Footer() {
    return (
        <footer
            css={`
                border-top: 1px solid ${(p) => core.color.stroke};
            `}
        >
            <div
                css={`
                    align-items: center;
                    color: ${(p) => core.color.text.primary};
                    display: flex;
                    height: 100%;
                    justify-content: space-between;
                    padding: var(--space-200);
                `}
            >
                Footer
            </div>
        </footer>
    );
}

export default Footer

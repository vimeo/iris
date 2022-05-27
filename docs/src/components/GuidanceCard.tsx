import { core } from '@vimeo/iris/tokens';
import { Trash } from '@vimeo/iris/icons';

export function GuidanceCard({ children, label, type, ...props }) {
  return (
    <div
        css={`
            border: 1px solid ${core.color.stroke};
            border-radius: 4px;
            display: flex;
            flex-direction: column;
            flex: 1;
            margin-bottom: var(--space-400);
            overflow: hidden;            
        `}
        {...props}
    >
        <div 
            css={`
                align-items: center;
                color: white;
                display: flex
                font-size: 1rem;
                font-weight: 600;
                line-height: 1.5rem;
                padding: var(--space-150) var(--space-200);
                width: 100%;
                ${{ backgroundColor: type === 'negative' ? 'rgb(226, 43, 18)' : `rgb(40, 168, 120)` }}
            `}
        >
            {type === 'negative' ? 
                (
                    <>
                        {/* TODO: icon should go here */}
                        <span>{label || 'Do Not'}</span>
                    </>
                ) 
                : 
                (
                    <>
                        {/* TODO: icon should go here */}
                        <span>{label || 'Do'}</span>
                    </>
                )
            }
        </div>
        <div 
            css={`
                font-size: 1rem;
                line-height: 1.5rem;
                padding: var(--space-200);
                width: 100%;
            `}
        >
            {children}
        </div>
    </div>
    );
}
import { CSSProperties, PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren<{
    type?: 'submit' | 'reset' | 'button'
    disabled?: boolean;
    onClick?: () => void;
    variant: 'primary' | 'secondary' | 'tertiary';
    size: 'sm' | 'md';
}>;

export const Button = ({type,children , onClick, variant, size,disabled } : ButtonProps) =>{
    const variantStyles: Record<ButtonProps['variant'], CSSProperties>={
        primary:{
            backgroundColor: '#E72254',
            color: 'white'
        },
        secondary:{
            backgroundColor: 'white',
            color: 'black'
        },
        tertiary:{
            backgroundColor: '#E72254',
            color: 'white'
        }
    }
    const sizeStyles: Record<ButtonProps['size'], CSSProperties>={
        sm:{
            padding: '0.3em 0.6em',
        },
        md:{
            padding: '10px 12px',
        }
    }

    return(
        <button
            type={type}
            disabled={disabled}
            className="
                transition ease-in-out

                hover:scale-105
                hover:border-white/25
                hover:cursor-pointer

                rounded-full
                active:scale-95
            "
            style={{
                ...variantStyles[variant],
                ...sizeStyles[size],
                fontSize: '14px',
                fontWeight: '700',
            }}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

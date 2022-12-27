import styled from "@emotion/styled";


export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement>{
    color?: "primary" | "secondary";
    block?:boolean;
}

export const Button = styled.button<ButtonProps>`
    background-color: ${({color, theme}) => theme.colors[color|| "primary"]};
    border-radius: ${({theme}) => theme.spacing.s4};
    padding: 14px 16px;
    color: white;
    border: none;
    display: ${({block}) => block ? "block" : "inline-block"};
    width: ${({block}) => block ? "100%" : "auto"};
`

Button.defaultProps={
    color: "primary"
}


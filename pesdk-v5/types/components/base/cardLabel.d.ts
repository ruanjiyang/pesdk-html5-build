/// <reference types="react" />
export interface CustomCardLabelProps {
    className?: string;
    caret?: boolean;
    isActive?: boolean;
    withBackground?: boolean;
    children: React.ReactNode;
    style?: {
        [key: string]: string;
    };
    hidden?: boolean;
}

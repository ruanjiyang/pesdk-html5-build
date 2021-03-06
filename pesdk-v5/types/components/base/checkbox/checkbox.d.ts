/// <reference types="react" />
export interface CustomCheckboxProps {
    label: string;
    value: boolean;
    isDisabled?: boolean;
    onClick: (e?: React.SyntheticEvent) => void;
    checkMarkPosition?: 'left' | 'right';
    className?: string;
    style?: {
        [key: string]: string;
    };
    children?: React.ReactNode;
}
export declare type CustomCheckbox = React.ComponentType<CustomCheckboxProps>;

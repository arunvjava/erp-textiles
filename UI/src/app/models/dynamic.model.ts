export interface DynamicField {
    name: string;
    label: string;
    type: string;
    placeholder?: string;
    value?: any;
    validators?: {type: string; value?: any}[];
}

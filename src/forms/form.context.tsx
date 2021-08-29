import { createContext, useContext } from 'react';

interface IFormContext<G extends object> {
    values: G;
    errors: Partial<{ [Option in keyof G]: string | null }>;
    isSubmitted: boolean;
    update: (name: keyof G, value: string) => void;
}
export const FormContext = createContext<IFormContext<any> | null>(null);
export function useForm<G extends object>() {
    return useContext(FormContext) as IFormContext<G>;
}

export type IValidationCallback = (val: string) => string | null;
export class Validator {
    private validations: IValidationCallback[] = [];
    public validate(val: string) {
        return this.validations.reduce(
            (error: null | string, validation) => error || validation(val),
            null
        );
    }
    public required() {
        this.validations.push((val) => (val ? null : 'This field is required'));
        return this;
    }
    public min(x: number) {
        this.validations.push((val) =>
            parseInt(val) < x ? `minimum ${x}` : null
        );
        return this;
    }
    public max(x: number) {
        this.validations.push((val) =>
            parseInt(val) > x ? `maximum ${x}` : null
        );
        return this;
    }
    public minLength(x: number) {
        this.validations.push((val) =>
            val.length < x ? `Use minimum ${x} chars` : null
        );
        return this;
    }
    public maxLength(x: number) {
        this.validations.push((val) =>
            val.length > x ? `Use maximum ${x} chars` : null
        );
        return this;
    }
}
const validator = () => new Validator();
export default validator;

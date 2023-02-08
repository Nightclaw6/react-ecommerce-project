import { FormInputLabelStyles, Input, Group } from './form-input.styles';

const FormInput = ({label, ...otherProps}) => {
    return (
        <Group>
            <Input { ...otherProps} />
            {label && (
                <FormInputLabelStyles shrink={otherProps.value.length}>
                    {label}
                </FormInputLabelStyles>
            )}
        </Group>
    )
};

export default FormInput;
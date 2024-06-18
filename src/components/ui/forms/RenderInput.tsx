import React from 'react';
import { InputTextField } from './InputTextField';
import { InputDateField } from './InputDateField';
import { RadioButtonsGroup } from './RadioButtonsGroup';

interface RadioItem {
    value: string;
    selected: boolean;
}
interface RenderInputProps {
    index: number;
    question: {
        type: string;
        id: number;
        name: string;
        label: string;
        helperText: string;
        width: string;
        items?: RadioItem[];
    };
    errors: { [key: string]: boolean };
    handleBlur: (e: React.FocusEvent <any, Element>) => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    touched: { [key: string]: boolean };
    values: { [key: string]: string };
}

export const RenderInput: React.FC<RenderInputProps> = ({
    index,
    question,
    // errors,
    handleBlur,
    handleChange,
    touched,
    values
}) => {
    console.log(question);

    switch (question.type) {
    case 'text_input':
        return <InputTextField
            key={index}
            id={question.id}
            name={question.name}
            label={question.label}
            helperText={question.helperText}
            // error={errors[`${question.name}`]}
            handleBlur={handleBlur}
            handleChange={handleChange}
            touched={touched[`${question.name}`]}
            value={values[`${question.name}`]}
            width={question.width}
            data={{}}
        />;
    case 'date':
        return <InputDateField
            key={index}
            id={question.id}
            name={question.name}
            label={question.label}
            helperText={question.helperText}
            // error={errors[`${question.name}`]}
            handleBlur={handleBlur}
            handleChange={handleChange}
            touched={touched[`${question.name}`]}
            value={values[`${question.name}`]}
            width={question.width}
            data={{}}
        />;
    case 'radio_input':
        return <RadioButtonsGroup
            key={index}
            id={question.id}
            name={question.name}
            label={question.label}
            helperText={question.helperText}
            // error={errors[`${question.name}`]}
            handleBlur={handleBlur}
            handleChange={handleChange}
            touched={touched[`${question.name}`]}
            value={values[`${question.name}`]}
            width={question.width}
            data={{}}
            items={question.items}
        />;
    }
};

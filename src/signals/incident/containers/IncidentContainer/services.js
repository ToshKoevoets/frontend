const fieldTypeMap = {
  checkbox_input: 'CheckboxInput',
  date_time_input: 'DateTimeInput',
  description_with_classification_input: 'DescriptionInputRenderer',
  emphasis_checkbox_input: 'EmphasisCheckboxInput',
  file_input: 'FileInputRenderer',
  handling_message: 'HandlingMessage',
  header: 'Header',
  hidden_input: 'HiddenInput',
  map_input: 'MapInput',
  map_select: 'MapSelect',
  multi_text_input: 'MultiTextInput',
  plain_text: 'PlainText',
  radio_input: 'RadioInputGroup',
  select_input: 'SelectInput',
  text_input: 'TextInput',
  textarea_input: 'TextareaInput',
};

const validatorMap = {
  email: 'email',
  max: 'max',
  max_length: 'maxLength',
  min: 'min',
  min_length: 'minLength',
  pattern: 'pattern',
  required: 'required',
  required_true: 'requiredTrue',
};

const mapValidatorWithArgs = ([key, ...args]) => [validatorMap[key], ...args];
const mapValidator = key => (Array.isArray(key) ? mapValidatorWithArgs(key) : validatorMap[key]);

export const resolveQuestions = questions =>
  questions.reduce(
    (acc, question) => ({
      ...acc,
      [question.key]: {
        meta: {
          ...question.meta,
          pathMerge: 'extra_properties',
        },
        options: {
          validators: [
            ...new Set([...(question.meta?.validators || []), ...(question.required ? ['required'] : [])]),
          ].map(mapValidator),
        },
        render: fieldTypeMap[question.field_type],
      },
    }),
    {}
  );

export const getIncidentClassification = (state, incidentPart) => {
  const previousClassification = state.incident.classification;
  const classificationPrediction = state.classificationPrediction;
  const canChange =
    classificationPrediction === null ||
    previousClassification === null ||
    previousClassification?.slug === classificationPrediction?.slug;
  return canChange ? incidentPart : {};
};

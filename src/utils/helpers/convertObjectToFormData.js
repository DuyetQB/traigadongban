import _isPlainObject from 'lodash-es/isPlainObject';

export default function convertObjectToFormData(obj, formData = new FormData(), parentKey) {
  Object.entries(obj).forEach(([key, value]) => {
    const propName = parentKey ? `${parentKey}[${key}]` : key;

    if (Array.isArray(value)) {
      if (value.length > 0) convertObjectToFormData(value, formData, propName);
    } else if (_isPlainObject(value) && !(value instanceof File) && !(value instanceof Blob)) {
      convertObjectToFormData(value, formData, propName);
    } else {
      formData.append(propName, value);
    }
  });

  return formData;
}

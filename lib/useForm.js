import { checkboxClasses } from "@material-ui/core";
import { useRef, useState, useCallback, useEffect } from "react";

const useForm = (formOptions) => {
  const formRef = useRef(null);
  const [fields, registerFields] = useState({});
  const [errors, setErrors] = useState({});

  const register = useCallback((refNode) => {
    if (refNode) {
      registerFields((prev) => {
        const { type, name, value, checked, nodeName } = refNode;

        let newVal, fieldName;

        if (nodeName === "IMG") {
          newVal = {
            name: `thumbnail`,
            type: "thumbnail",
            value: refNode.src,
          };
          fieldName = "thumbnail";
        }

        if (nodeName === "INPUT") {
          newVal = {
            name: name,
            type: type,
            value: type === "checkbox" ? checked : value,
          };
          fieldName = name;
        }

        return { ...prev, [fieldName]: newVal.value };
      });
    }
  }, []);

  const handleSubmit = (event, callbackfn) => {
    event.preventDefault();
    const fd = new FormData(event.target);

    if (formOptions?.skipFormData) {
      formOptions.skipFormData.forEach((property) =>
        fd.set(property, fields[property])
      );
    }

    const fdObject = Object.fromEntries(fd);
    const mergeFieldsAndFormData = { ...fields, ...fdObject };
    callbackfn(mergeFieldsAndFormData);
  };

  return {
    handleSubmit,
    formRef,
    register,
    errors,
    registerFields,
  };
};

export default useForm;

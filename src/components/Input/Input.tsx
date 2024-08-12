import { forwardRef, useEffect, useRef } from "react";

import { IInput } from "./types";
import { InputStyled } from "./styles";

export default forwardRef<HTMLInputElement | HTMLTextAreaElement, IInput>((props, _ref) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleFocus = (target: (EventTarget & (HTMLInputElement | HTMLTextAreaElement)) | undefined, isFocus: boolean) => {
    if(isFocus && ref.current) {
      ref.current.classList.add("focus");
      return;
    };

    if(ref.current && target && (target.value || target.innerText).length == 0) {
      ref.current.classList.remove("focus");
      return;
    };
  };

  const handleType = (target: EventTarget & HTMLTextAreaElement) => {
    target.style.height = "0px";
    target.style.height = `${target.scrollHeight}px`;
  };

  useEffect(( ) => {
    if(!ref.current) return;

    const input = (ref.current.querySelector("input") || ref.current.querySelector("textarea"));

    if(!input) return;

    input.value = props.value || "";
  
    if(input.value.length) {
      ref.current.classList.add("focus");
    };
  }, [props]);

  return (
    <InputStyled ref={ref} style={props.style} className={props.className} data-label={props.label}>
      {
        props.type == "textarea"
        ? <textarea
            onClick={props.onClick}

            onFocus={( ) => handleFocus(undefined, true)}
            onBlur={({ currentTarget }) =>  handleFocus(currentTarget, false)}

            onChange={({ currentTarget }) => handleType(currentTarget)}

            rows={1}
            ref={_ref as any}
            name={props.name}
            readOnly={props.readonly}
            defaultValue={props.value}
          ></textarea>
       : <input
          onClick={props.onClick}

          onFocus={( ) => handleFocus(undefined, true)}
          onBlur={({ currentTarget }) =>  handleFocus(currentTarget, false)}

          onChange={({ currentTarget }) => props.onChange ? props.onChange(currentTarget.value) : undefined}

          ref={_ref as any}
          name={props.name}
          type={props.type}
          readOnly={props.readonly}
          defaultValue={props.value}
        />
      }

      {props.icon}
    </InputStyled>
  );
});
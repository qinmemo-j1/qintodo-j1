import React, { forwardRef } from "react";
import clsx from "clsx";
import type { KeyboardEvent } from "react";

import type { Todo } from "@/types/todo";

type InputTodoProps = {
  value: string;
  todo?: Todo;
  radioColor: string;
  onChange: () => void;
  onBlur: (todo?: Todo) => void;
  onEnterKeyPress: (
    event: KeyboardEvent<HTMLTextAreaElement>,
    todo?: Todo
  ) => void;
};

export const InputTodo = forwardRef<HTMLTextAreaElement, InputTodoProps>(
  (props, ref) => {
    const { todo, value, radioColor, onChange, onBlur, onEnterKeyPress } =
      props;
    return (
      <div className="group flex gap-2 items-start mt-4 w-full cursor-pointer">
        <div className="flex-wrap">
          <input
            type="radio"
            className={clsx("w-6 h-6 border-2", radioColor)}
            checked={todo?.done}
            readOnly
          />
        </div>

        <textarea
          ref={ref}
          value={value}
          rows={1}
          onChange={onChange}
          onBlur={() => onBlur(todo)}
          onKeyPress={(e) => onEnterKeyPress(e, todo)}
          className={clsx([
            "p-0 w-full text-base bg-transparent outline-none resize-none",
          ])}
        />
      </div>
    );
  }
);

export default InputTodo;

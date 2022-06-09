import { useState } from "react";

/* 
  【TodoItemコンポーネント】
 ・Todoアイテムを表示する
 ・チェックボックスにチェックが入っているか管理する
 ・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
function TodoItem({ item, clickFn }) {
  let color = item.done === true ? 'gray' : 'black';
  return (
    <label
      className="panel-block"
      style={{ color: color }} >
      <input
        type="checkbox"
        onClick={(e) => clickFn(e, item.key)}
        checked={item.done === true ? "on" : ""}
      />
      {item.text}
    </label>
  );
}

export default TodoItem;
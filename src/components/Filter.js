/* 
  【Filterコンポーネント】
 ・該当するTodoをステータス毎にで分けてリスト表示する
 ・タブで表示する
 ・サポートするステータスは「すべて」「未完了」「完了済み」
*/
function Filter({ changeFilter, filterValue }) {
  return (
    <div className="panel-tabs">
      <a
        href="#"
        onClick={() => changeFilter('ALL')}
        className={filterValue === 'ALL' ? 'isActive' : ''}
      >
        全て
      </a>

      <a
        href="#"
        onClick={() => changeFilter('TODO')}
        className={filterValue === 'TODO' ? 'isActive' : ''}
      >
        未完了
      </a>

      <a
        href="#"
        onClick={() => changeFilter('DONE')}
        className={filterValue === 'DONE' ? 'isActive' : ''}
      >
        完了済
      </a>
    </div>
  );
}

export default Filter
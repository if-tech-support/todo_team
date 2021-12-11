// やることメモ：
// 1.優先度ソート
// 1.ステータスソート
// 2.recoilのデータ書き換えないようソート
// 3.読みやすくメソッド切り離したり整理する
// 4.sortKeyが4回描画されているとこ1回に？console.log(sortKey)のとこ
// 5.↑↓切り替え

import { useState } from "react"
import { todoListState } from "../atoms/atom"
import { useRecoilState } from "recoil"

const SortTaskButton = ( {sortKey} ) => {
  const [todoList, setTodoList] = useRecoilState(todoListState)

  // sortKey
  const [skey, setSkey] = useState("")
  // cloneをsortしないとreadonlyでsortできないため
  const todoListForSort = [...todoList];
  // sortオーダー：↓クリックならasc、↑クリックならdescに
  // 前提：デフォルトでListViewが昇順表示なら初期値をascに
  const [order, setOrder] = useState("desc")

  // ソート項目数描画されているぽい
  console.log(skey)

  const sortTaskToDesc = (sKey) => {
    console.log("click:desc-sortKey:"+sKey)

    todoListForSort.sort( (a, b) => {
      // 作成・更新日時ソート
      if (sKey === "updateAt" || "createAt") {
        console.log("sort-updateorcreate")
        let updateAtA = new Date(a.updateAt)
        let updateAtB = new Date(b.updateAt)
        let createAtA = new Date(a.createAt)
        let createAtB = new Date(b.createAt)
        let createUpdateA = ""
        let createUpdateB = ""

        if (sKey === "updateAt") {
          createUpdateA = updateAtA
          createUpdateB = updateAtB
          console.log("sort-updateAt")
        } else if (sKey === "createAt") {
          createUpdateA = createAtA
          createUpdateB = createAtB
          console.log("sort-createAt")
        }

        if (createUpdateA < createUpdateB) {
          return 1
        } else if (createUpdateA > createUpdateB) {
          return -1
        } else {
          return 0
        }
       
      } else if (sKey === "priority") {
        // 優先度ソート
        console.log("sort-priority")
        const PriorityOderRule = ["高", "中", "低"]
        if (PriorityOderRule.indexOf(a) < PriorityOderRule.indexOf(b)) {
          return 1
        } else if (PriorityOderRule.indexOf(a) > PriorityOderRule.indexOf(b)) {
          return -1
        } else {
          return 0
        }
      } else if (sKey === "status") {
        // ステータスソート
        console.log("sort-status")
      } else if (sKey === "title") {
        // タイトルソート
        console.log("sort-title")
      }

      return "ソート終了"
    } )
    
    console.log("sortdesc後")
    console.log(todoListForSort)

    return todoListForSort
  }

  const sortTaskToAsc = (sKey) => {
    // 降順
    console.log("click:asc-sortKey:"+sKey)

    todoListForSort.sort( (a, b) => {
      // 作成・更新日時ソート
      // なぜかすべてこの処理に入ってたので||使い方注意
      if (sKey === "updateAt" || sKey === "createAt") {
        console.log("sort-updateorcreate")
        let updateAtA = new Date(a.updateAt)
        let updateAtB = new Date(b.updateAt)
        let createAtA = new Date(a.createAt)
        let createAtB = new Date(b.createAt)
        let createUpdateA = ""
        let createUpdateB = ""

        if (sKey === "updateAt") {
          createUpdateA = updateAtA
          createUpdateB = updateAtB
          console.log("sort-updateAt")
        } else if (sKey === "createAt") {
          createUpdateA = createAtA
          createUpdateB = createAtB
          console.log("sort-createAt")
        }

        if (createUpdateA > createUpdateB) {
          return 1
        } else if (createUpdateA < createUpdateB) {
          return -1
        } else {
          return 0
        }
       
      } else if (sKey === "priority") {
        // 優先度ソート
        console.log("sort-priority")
        const PriorityOderRule = ["高", "中", "低"]
        if (PriorityOderRule.indexOf(a) > PriorityOderRule.indexOf(b)) {
          return 1
        } else if (PriorityOderRule.indexOf(a) < PriorityOderRule.indexOf(b)) {
          return -1
        } else {
          return 0
        }
        
      } else if (sKey === "status") {
        // ステータスソート
        console.log("sort-status")
      } else if (sKey === "title") {
        // タイトルソート
        console.log("sort-title")
      }

      return "ソート終了"
    } )

   
    
    console.log("sortasc後")
    console.log(todoListForSort)

    return todoListForSort
  }

  const onClick = () => {
    console.log("onclick"+sortKey)
    setSkey(sortKey)

    if (order === "asc") {
      setOrder("desc")
      const sortedTodoList = sortTaskToDesc(sortKey)
     setTodoList(sortedTodoList)
    } else if (order === "desc") {
      setOrder("asc")
      const sortedTodoList = sortTaskToAsc(sortKey)
     setTodoList(sortedTodoList)
    }
  }

  return (
    <>
      <button
        className={order}
        onClick={onClick}
      >
        {/* ↑↓切り替える */}
      ↑
      </button>
    </>
  );
};

export default SortTaskButton;

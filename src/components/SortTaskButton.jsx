// やることメモ：
// 済1.優先度ソート
// 済1.ステータスソート
// 2.recoilのデータ書き換えないようソート
// 3.読みやすくメソッド切り離したり整理する
// 4.sortKeyが4回描画されているとこ1回に？console.log(sortKey)のとこ
// 5.↑↓切り替え

// わからないこと・試したことメモ
// デフォルトの表示はどうなってるか
// console.log("todoデータ数:"+todoList.length)が遷移時5回呼び出されてる
// console.log("updatecreate処理")が1クリックで10回呼び出されてる
// useEffectの中にsortTaskDesc等を定義すると呼び出すときに未定義エラーになるので
// onclickの中にuseEffectを書いてその中でsosrtTaskDescを呼び出すようにしたがonclickの中では呼び出しできないのエラー
// useEffectは呼び出し位置に注意。ネストされた関数内で呼び出しできない。関数コンポーネントかカスタムフック内からしか呼び出しできない
// useEffectの中で定義した関数は呼び出しできない
// onclick処理でsortKeyが変更されたときだけsort処理を呼び出すようにしたが、トップのconsole.logとupdatecreate処理が呼び出される回数は変わらない

import { useState, useEffect } from "react"
import { todoListState } from "../atoms/atom"
import { useRecoilState } from "recoil"

const SortTaskButton = ( {sortKey} ) => {
  // todo
  const [todoList, setTodoList] = useRecoilState(todoListState)
  console.log("todoデータ数:"+todoList.length)
  // 前提：デフォルトでListViewが昇順表示なら初期値をascに
  const [order, setOrder] = useState("desc")
  // sortKey
  // 使用されていないwarning
  const [sKey, setSkey] = useState("")

    // cloneをsortしないとreadonlyでsortできないため
    const todoListForSort = [...todoList];
    // sortオーダー：↓クリックならasc、↑クリックならdescに

    useEffect(() => {
      if (order === "asc") {
        console.log("useEffect-desc処理")
        setOrder("desc")
        const sortedTodoList = sortTaskToDesc(sortKey)
        setTodoList(sortedTodoList)
      } else if (order === "desc") {
        console.log("useEffect-asc処理")
        setOrder("asc")
        const sortedTodoList = sortTaskToAsc(sortKey)
        setTodoList(sortedTodoList)
      }
    }, [sKey]) 

    const sortTaskToDesc = (sKey) => {
      console.log("sortTaskToDesc呼び出し")

      todoListForSort.sort( (a, b) => {
        if (sKey === "createAt") {
          // 作成日時ソート処理
          console.log("create処理(desc)")
          
          let updateAtA = new Date(a.updateAt)
          let updateAtB = new Date(b.updateAt)
          if (updateAtA < updateAtB) {
            return 1
          } else if (updateAtA > updateAtB) {
            return -1
          } else {
            return 0
          }
        } else if (sKey === "updateAt") {
          // 更新日時ソート処理
          console.log("update処理(desc)")

          let createAtA = new Date(a.createAt)
          let createAtB = new Date(b.createAt)
          if (createAtA < createAtB) {
            return 1
          } else if (createAtA > createAtB) {
            return -1
          } else {
            return 0
          }
        } else if (sKey === "priority") {
          // 優先度ソート
          console.log("priority処理(desc)")
          const PriorityOderRuleDesc = ["高", "中", "低"]

          if (PriorityOderRuleDesc.indexOf(a.priority) < PriorityOderRuleDesc.indexOf(b.priority)) {
            return 1
          } else if (PriorityOderRuleDesc.indexOf(a.priority) > PriorityOderRuleDesc.indexOf(b.priority)) {
            return -1
          } else {
            return 0
          }
        } else if (sKey === "status") {
           // ステータスソート
           console.log("status処理(desc)")
           const StatusOderRuleDesc = ["完了", "作業中", "未着手"]
           if (StatusOderRuleDesc.indexOf(a.status) < StatusOderRuleDesc.indexOf(b.status)) {
             return 1
           } else if (StatusOderRuleDesc.indexOf(a.status) > StatusOderRuleDesc.indexOf(b.status)) {
             return -1
           } else {
             return 0
           }
        } else if (sKey === "title") {
          // タイトルソート
          console.log("title処理(desc)")
          if (a.title < b.title) {
            return 1
          } else if (a.title > b.title) {
            return -1
          } else {
            return 0
          }
        }

        return "ソート終了"
      } )
      
      return todoListForSort
    }

    const sortTaskToAsc = (sKey) => {
      console.log("sortTaskToAsc呼び出し")

      todoListForSort.sort( (a, b) => {
        // 作成・更新日時ソート
        // なぜかすべてこの処理に入ってたので||使い方注意
        if (sKey === "updateAt" || sKey === "createAt") {
          console.log("updatecreate処理")
          let updateAtA = new Date(a.updateAt)
          let updateAtB = new Date(b.updateAt)
          let createAtA = new Date(a.createAt)
          let createAtB = new Date(b.createAt)
          let createUpdateA = ""
          let createUpdateB = ""

          if (sKey === "updateAt") {
            createUpdateA = updateAtA
            createUpdateB = updateAtB
          } else if (sKey === "createAt") {
            createUpdateA = createAtA
            createUpdateB = createAtB
          }

          if (createUpdateA > createUpdateB) {
            return 1
          } else if (createUpdateA < createUpdateB) {
            return -1
          } else {
            return 0
          }
          
        } else if (sKey === "priority") {
          console.log("priority処理")
          // 優先度ソート
          const PriorityOderRuleAsc = ["低", "中", "高"]
          if (PriorityOderRuleAsc.indexOf(a.priority) < PriorityOderRuleAsc.indexOf(b.priority)) {
            return 1
          } else if (PriorityOderRuleAsc.indexOf(a.priority) > PriorityOderRuleAsc.indexOf(b.priority)) {
            return -1
          } else {
            return 0
          }
          
        } else if (sKey === "status") {
          console.log("status処理")
          // ステータスソート
          const StatusOderRuleAsc = ["未着手", "作業中", "完了"]
          if (StatusOderRuleAsc.indexOf(a.status) < StatusOderRuleAsc.indexOf(b.status)) {
            return 1
          } else if (StatusOderRuleAsc.indexOf(a.status) > StatusOderRuleAsc.indexOf(b.status)) {
            return -1
          } else {
            return 0
          }
        } else if (sKey === "title") {
          console.log("title処理")
          // タイトルソート
          if (a.title > b.title) {
            return 1
          } else if (a.title < b.title) {
            return -1
          } else {
            return 0
          }
        }

        return "ソート終了"
      } )

      
      
      return todoListForSort
    }
  

  const onClick = () => {
    console.log("onclick呼び出し")
    setSkey(sortKey)

    if (order === "asc") {
      // setOrder("desc")
      // const sortedTodoList = sortTaskToDesc(sortKey)
      //  setTodoList(sortedTodoList)
    } else if (order === "desc") {
      // setOrder("asc")
      // const sortedTodoList = sortTaskToAsc(sortKey)
      //  setTodoList(sortedTodoList)
    }
    
  }

  return (
    <>
      <button
        className={order}
        onClick={onClick}
      >
        {/* ↑↓切り替える */}
        <div className="sort-arrow"></div>
      </button>
    </>
  );
};

export default SortTaskButton;

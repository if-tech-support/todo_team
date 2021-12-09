// 既存のtodoの最大id+1の値を取得
// todoList:既存のtodo配列データ
export const getInputId = (todoList) => {
  const idArray = todoList.map((todo) => {
    return todo.id
  })

  // todoデータが空の場合のため初期値：0を設定
  const inputtedMaxId = idArray.reduce( (a, b) => {
    return Math.max(a, b)
  }, 0)

  return inputtedMaxId+1
}
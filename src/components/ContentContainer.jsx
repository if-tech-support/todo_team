export const ContentContainer = ({todo}) => {
    const { title,detail,status,priority } = todo;
    const detailArray = [
        {name:"タスク名",description:title},
        {name:"内容",description:detail},
        {name:"ステータス",description:status},
        {name:"優先度",description:priority}]
    return (
        detailArray.map(({name,description})=>{
            return(
                <div className="content-container">
                    <p className="field-name">{name}</p>
                    <p className="field-description">{description}</p>
                </div>
            )
        })
    )
}
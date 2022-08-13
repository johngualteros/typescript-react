import { Sub } from "../type";

interface Props {
    subs : Sub[];
}
function List({subs}:Props) {
  return (
    <div>
    {
        subs.map((sub,index)=>(
            <div key={index} className="card">
            <img src={sub.avatar} alt={sub.nick} />
            <p>{sub.nick} (<small>Months : {sub.subMonths}</small>)</p>
            <p>{sub.description?.substring(0,100)}</p>
          </div>
        ))
    }
    </div>
  )
}

export default List
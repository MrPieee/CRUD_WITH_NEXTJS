import Link from "next/link";
import style from './single.module.css';
import Delete from "@/components/DeleteItem/Delete";
const SingleTodo = async ({params}) => {
    const {tId}=params;
    const res= await fetch(`http://localhost:1618/api/crudapi/${tId}`,{
        cache:'no-store'
    });
    const data = await res.json();

    const {_id,title,body}= data;
    // console.log(data);
    return (
        <div>
            <section className={style.todo}>
                 <article>
                    <Link href={'/crudapp'} style={{textAlign:'left',width:'100%'}}><button style={{cursor:'pointer'}}>{'< BACK'}</button></Link>
                    <div className={style.todoBody}>
                        <h2>{title} </h2>
                        <p>{body}</p>
                    </div>
                    <div className={style.action}>
                        <Link href={`/edit/${_id}`}>
                            <button style={{backgroundColor:'yellow',borderRadius:'.6rem',fontWeight:'700',cursor:'pointer'}}>EDIT</button>
                        </Link>
                        <Delete id={_id}/>
                    </div>
                </article>
            </section>
        </div>
    );
};

export default SingleTodo;
import CreateCrud from '@/components/CreateCrud/CreateCrud';
import style from './crud.module.css';
import { getData } from '@/utilities/getData';
import Link from 'next/link';
import Delete from '@/components/DeleteItem/Delete';


const CrudApp = async() => {

   const {data}= await getData();
    // console.log(data);
    return (
        <div>
            <CreateCrud/>
            <section className={style.todos}>
                {
                    data.reverse().map((item,index)=>(
                        <article key={item._id}>
                            <div className={style.todoBody}>
                                <h2>ID : {index+1}</h2>
                                <h4>{item.title}  </h4>
                                <Link href={`/crudapp/${item._id}`} style={{color:'whitesmoke'}} >more....</Link>
                            </div>
                            <div className={style.action}>
                                <Link href={`/edit/${item._id}`}>
                                    <button style={{backgroundColor:'yellow',borderRadius:'.6rem',fontWeight:'700',cursor:'pointer'}}>EDIT</button>
                                </Link>
                                <Delete id={item._id}/>
                            </div>
                        </article>
                    ))
                }
            </section>
        </div>
    );
};

export default CrudApp;
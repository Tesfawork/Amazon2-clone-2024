/** @format */

// import style from './Category.module.css'

// function CategoryCard({data}) {
//   return (
//     <div className={ style.category}>
//         <a href="">
//             <span>
//                 <h2>{data.title}</h2>
//             </span>
//             <img src={data.imgLink} alt="" />
//             <p>shop now</p>
//         </a>
//     </div>
//   )
// }

// export default CategoryCard;

import style from "./Category.module.css";
import { Link } from "react-router-dom";
function CategoryCard({ data }) {
  // console.log(data)
  return (
    <div className={style.category}>
      <Link to={`/category/${data.name}`}>
        <span>
          <h2>{data?.title}</h2>
        </span>
        <img src={data?.imgLink} alt={data.name} />
        <p>Shop now</p>
      </Link>
    </div>
  );
}

export default CategoryCard;

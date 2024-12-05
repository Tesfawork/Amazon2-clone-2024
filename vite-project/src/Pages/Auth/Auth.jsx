import {Link } from 'react-router-dom'
import style from "./Auth.module.css";
function Auth() {
  return (
    <>
      <section className={style.login}>
        {/* logo */}
        <Link>
          <img
            src="https://en.wikichip.org/w/images/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png"
            alt=""
          />
        </Link>

        {/* form  */}
        <div>

          <h1>Sign-In</h1>
          <form action="">
            <div></div>





          </form>
        </div>
      </section>
    </>
  );
}

export default Auth;
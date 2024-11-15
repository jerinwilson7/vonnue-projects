import { Link, useNavigate } from "react-router-dom";

type LinkBtnType = {
    children:React.ReactNode;
    to:string
}

export const LinkButton = ({children,to}:LinkBtnType) => {

    const navigate = useNavigate()

    const className = "text-sm text-blue-500 hover:text-blue-600 hover:underline"

    if(to === '-1')
        return <button className={className} onClick={() => navigate(-1)}>{children}</button>


  return (
    <Link
    to={to}
    className={className}
  >
    {children}
  </Link>
  )
}

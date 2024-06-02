import "../App.css"

interface PageProps{
    children?: React.ReactNode;
    className?: string
}

const Overlay:React.FC<PageProps> = ({children,className='',...rest}) =>{
    return(
        <div className={`overlay ${className}`}{...rest}>
            {children}
        </div>
    )
}

export default Overlay;
import "../App.css"

interface PageProps{
    name: string,
    price?: string,
    size?: string,
    img?: string,
    className?:string;
}

const Card:React.FC<PageProps> = ({name,price,size,img,className='',...rest}) =>{
    return(
        <div className={`card ${className}`}{...rest} > 
        <div className="img">
            <img src={img} />
        </div>
        <div className="details">
        <h1>{name}</h1>
        <p className="price" >{price}</p>
        <p className="size" >{size}</p>
        </div>
        </div>
    )
}

export default Card;
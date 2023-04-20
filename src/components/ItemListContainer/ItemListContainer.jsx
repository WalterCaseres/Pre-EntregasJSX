import "./ItemListContainer.scss"
import imagen1 from "../../assets/image1.jpg"


export const ItemLitCointainer = ( {saludo}) => {

    return (
        <div className="card">
            <img src={"/image1.jpg"} alt='Card' />
            <div className='card-body'>
                <h2 className="card-title">Mi Titulo</h2>
                <p className='card-text text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel consectetur, quia perspiciatis itaque necessitatibus aspernatur error esse facere at? At iste dicta sequi impedit, exercitationem voluptatum maxime accusamus rerum ab.</p>
            </div>
            <p>{saludo}</p>
        </div>
    )
}
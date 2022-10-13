
function Card(props) {
    
    return (
        <div className="card">
            <img className="card-img" height = {237.07} width = {219.61} src = {props.img} alt ="" />            
            <div className="d-flex justify-between">
                <div className="d-flex flex-column">
                    <div className="favorite">
                        <h5>{props.title}</h5>
                        <img className="favoriteIcon" src = "/img/star.png" alt = ""/>
                    </div>           
                </div>
                <div className="d-flex flex-column price">   
                    <h5>{props.price}</h5>
                    <a  href="#">Купить</a> 
                </div>
            </div>   
        </div>
    )
}
export {Card}
import {Header} from './Header'
import {Footer} from './Footer'
import {Content} from './Content'
import {Order} from './Order'
const headphones =[
    {   
        id: 1,
        img: "/img/1.png",
        title: "Apple BYZ S852I",
        price: 2997,
        rate: 4.7,
    },
    {
        id: 1,
        img: "/img/1.png",
        title: "Apple BYZ S852I",
        price: 2997,
        rate: 4.7,
    }

]
function Basket (){
    return(
        <>
            <Header />
            <div className='d-flex justify-between m-w'>
                <div className="d-flex flex-wrap m-w">
                
                    {headphones.map((obj) => (
                        <Content title = {obj.title} price = {obj.price} 
                            rate = {obj.rate} img = {obj.img} />
                        
                    ))}
                </div>
                <Order />
            </div>
            
            <Footer />
        </>
    )

}

export{Basket}
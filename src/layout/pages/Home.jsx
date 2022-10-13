import {Header} from './Header'
import {Card} from './Card'
import {Footer} from './Footer'
import {Basket} from './Basket'
function Home(){
    const headphones =[
        {   
            id: 1,
            img: "/img/1.png",
            title: "Apple BYZ S852I",
            price: 2997,
            rate: 4.7,
        },
        {   
            id: 2,
            img: "/img/2.png",
            title: "Apple EarPods",
            price: 2327,
            rate: 4.5,
        },
        { 
            id: 3,
            img: "/img/3.png",
            title: "Apple BYZ S852I",
            price: "2327 ₽",
            rate: 4.5,
        },
        {   
            id:4,
            img: "/img/1.png",
            title: "Apple BYZ S852I",
            price: "2997 ₽",
            rate: 4.7,
        },
        {
            id:5,
            img: "/img/2.png",
            title: "Apple EarPods",
            price: "2327 ₽",
            rate: 4.5,
        },
        {
            id:6,
            img: "/img/3.png",
            title: "Apple BYZ S852I",
            price: "2327 ₽",
            rate: 4.5,
        }
    ]
 return (
    <>
      <Header />
      <div className="d-flex flex-wrap m-w">
      {headphones.map((obj) => (
        <Card title = {obj.title} price = {obj.price} 
        rate = {obj.rate} img = {obj.img} />
      ))}
    </div>
    <Footer />
    </>
  );
}
export {Home}
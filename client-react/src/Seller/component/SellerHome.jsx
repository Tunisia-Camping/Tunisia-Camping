import Navbar from './Navbar.jsx'



const SellerHome=({products,showProduct})=>{


    
    return(
    <div>
    <Navbar/>
    <div className="AllProduct">
      {products.map((el,i)=>(
          <div key={i}>
       <img className="" src={el.images} alt="" />
        <h4 onClick={()=>{showProduct(el)}}>{el.name}</h4>
        <div>{el.price}</div>
        </div>
))}
    </div>
    </div>
    )
 
}
export default SellerHome
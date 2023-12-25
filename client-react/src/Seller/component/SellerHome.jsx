import SellerNavbar from './SellerNavbar.jsx'
import './cssFiles/SellerHome.css'


const SellerHome=({products,showProduct})=>{


    
    return(
    <div>
    <SellerNavbar/>
    <div className="Container">
      {products.map((el,i)=>(
          <div key={i} className="Card">
       <img className="image" src={el.images} alt={el.name} />
        <h4 id="Title" onClick={()=>{showProduct(el)}}>{el.name}</h4>
        <div id="price">{el.price}</div>
        </div>
))}
    </div>
    </div>
    )
 
}
export default SellerHome
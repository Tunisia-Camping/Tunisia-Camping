import "./EDIT.css"

const EditProfile= ()=>{


    return (
        <div  className="home">
          <div  className="name"> 
<div className="firstName">
<h6  style={{
              color: 'black',
              fontSize: '16px',
              fontFamily: 'Poppins',
              fontWeight: '400',
              lineHeight: '24px',
              wordWrap: 'break-word',
            }}
> First Name</h6>
<input  style={{

width: '330px',
height: '50px',
left: '0px',
top: '0px',
background: '#F5F5F5',
borderRadius: '4px',
}}placeholder="MP"></input>
</div>
<div className="lastName">
<h6   style={{
              color: 'black',
              fontSize: '16px',
              fontFamily: 'Poppins',
              fontWeight: '400',
              lineHeight: '24px',
              wordWrap: 'break-word',
            }}> Last Name</h6>
<input  style={{

width: '330px',
height: '50px',
left: '0px',
top: '0px',
background: '#F5F5F5',
borderRadius: '4px',
}}placeholder="MP"></input>
</div>



          </div>

          <div  className="name"> 
<div className="firstName">
<h6  style={{
              color: 'black',
              fontSize: '16px',
              fontFamily: 'Poppins',
              fontWeight: '400',
              lineHeight: '24px',
              wordWrap: 'break-word',
            }}
> Email</h6>
<input  style={{

width: '330px',
height: '50px',
left: '0px',
top: '0px',
background: '#F5F5F5',
borderRadius: '4px',
}}placeholder="MP"></input>
</div>
<div className="lastName">
<h6   style={{
              color: 'black',
              fontSize: '16px',
              fontFamily: 'Poppins',
              fontWeight: '400',
              lineHeight: '24px',
              wordWrap: 'break-word',
            }}> Adress</h6>
<input  style={{

width: '330px',
height: '50px',
left: '0px',
top: '0px',
background: '#F5F5F5',
borderRadius: '4px',
}}placeholder="MP"></input>
</div>




          </div>

          <div className="password">
<h6   style={{
              color: 'black',
              fontSize: '16px',
              fontFamily: 'Poppins',
              fontWeight: '400',
              lineHeight: '24px',
              wordWrap: 'break-word',
            }}> changePassword</h6>
<input  style={{

width: '330px',
height: '50px',
left: '0px',
top: '0px',
background: '#F5F5F5',
borderRadius: '4px',
}}placeholder="current Password"></input>
<input  style={{

width: '330px',
height: '50px',

background: '#F5F5F5',
borderRadius: '4px',
}}placeholder="New Password"></input>
<input  style={{

width: '550px',
height: '90px',

background: '#F5F5F5',
borderRadius: '4px',
}}placeholder="Confirm Password"></input>
</div>
<div>
    <button>Cancel</button>
    {/* <button onClick={()=>{updated({email:email,newPassword:newPassword,currentPassword:currentPassword})}}>SaveChanges</button> */}
</div>
            </div  >
    )
    
    
    }
    
    
    export default EditProfile
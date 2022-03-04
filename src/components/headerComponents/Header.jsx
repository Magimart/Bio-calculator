import React from "react";


const Header =  () => {

   
    return (
        <>
        <header className="App-header">
        <div className="NavWrapper">
            <div className="brandWrapper">
                       <a href="/" 
                            className="brandLink"> 
                            MagimArt
                       </a>
            </div>
             <div className="bigTitleWrap">
                    <p>
                        buy your favarite pokemon 
                    </p>
                    
             </div>
            <div className="miniCartAddFavouriteWrapper">
                  <div className="addTowishList"> 
                        <a href="/wishlists" 
                            className="addTowishList"> 
                            list1
                        </a>
                </div>
                <div className="addTowishList"> 
                     <a href="/cart" 
                            className="addTowishList"> 
                            list2
                     </a>
                </div>
            </div>
        </div>
       
      </header>
        </>
    )
  }

  export default Header;

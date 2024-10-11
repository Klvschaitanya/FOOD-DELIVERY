import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Cards from '../components/Card'
import Carousel from '../components/Carousel'


const Home = () => {

  const [search,setSearch] = useState("")
  const [foodcat, setFoodcat] = useState([]);
  const [fooditems, setFooditems] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      }

    });
    response = await response.json();
    // console.log(response[0],response[1])
    setFooditems(response[0])
    setFoodcat(response[1])
  }

  useEffect(() => {
    loadData();
  }, [])





  return (
    <div>

      <div> <Navbar /></div>
      <div>   <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">

          <div className='carousel-caption' style={{ zIndex: 10 }}>
            <div className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2 m-3" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
              {/* <button className="btn btn-outline-warning  my-2 my-sm-0 bg-secondary text-white" type="submit">Search</button> */}
            </div>
          </div>

          <div className="carousel-item active">
            <img src="https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D" style={{ filter: "brightness(40%)", height: "600px", objectFit: "cover" }} className="d-block w-100 " alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1499778003268-cbafc6d08bab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHxmb29kfGVufDB8fDB8fHww" style={{ filter: "brightness(40%)", height: "600px", objectFit: "cover" }} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1450862479751-84eeaf2fcca4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMxfHxmb29kfGVufDB8fDB8fHww" style={{ filter: "brightness(40%)", height: "600px", objectFit: "cover" }} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div></div>

      <div className='container'>

        <div>{
          foodcat.length > 0 ? foodcat.map((data) => {
            return (<div className='row mb-3 mt-3'> <div key={data._id}><h3>{data.CategoryName}</h3></div>
              <hr />
              {fooditems.filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLocaleLowerCase()))).map((filterItems) => {

                return (<div className='col-12 col-md-6 col-lg-3' key={filterItems._id}>
                  <Cards
                     foodItems = {filterItems}
                    options={filterItems.options[0]} 
                    
                     ></Cards></div>)

              })}

            </div>)
          }) : <div>no data</div>


        }</div>





      </div>


      <div> <Footer /></div>

    </div>
  )
}

export default Home







{/* foodcat.length > 0?foodcat.map((Category)=>{
                 return ( <div key={Category._id}><h3>{Category.CategoryName}</h3></div>)
            })
            {!fooditems ==[]?fooditems.filter((item)=>{item.CategoryName === Category.CategoryName})
            .map((filterItems)=>{
              return(
                <div key={filterItems._id}>
                  <Cards item={filterItems} /> */}
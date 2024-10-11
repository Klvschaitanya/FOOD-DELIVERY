import React from 'react'
import 'bootstrap/dist/js/bootstrap.bundle'

const Carousel = () => {
  return (
    <div>

      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">

          <div className='carousel-caption' style={{ zIndex: 10 }}>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2 m-3" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-warning  my-2 my-sm-0 bg-secondary text-white" type="submit">Search</button>
            </form>
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
      </div>


    </div>
  )
}

export default Carousel

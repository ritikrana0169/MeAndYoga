import React from 'react'
import styled from 'styled-components';

const Homepage = () => {
  return (
    <Div>
        <div id='container1'>
            <div >
                <h3>Yoga <br/> Studio</h3>
                <p>Amet, sodales ac congue fusce mattis quis praesent sollicitudin mauris est tortor pulvinar augue rhoncus nulla pellentesque nulla eget nunc.</p>
                <button>Join Class Today</button>
            </div>
            <div>
                <img src="https://img.freepik.com/free-photo/portrait-young-beautiful-sportive-girl-white-background_176420-5491.jpg?size=626&ext=jpg" alt="yoga" />
            </div>
        </div>
        <div id='container2'>
          <div>
            <h3>Many Styles Of Yoga To Suit Everyone</h3>
            <p>Morbi lobortis morbi dignissim sodales eget mauris turpis interdum sagittis sed cursus nunc nulla congue quis</p>
            <button>Learn More</button>
          </div>
          <div>
            <h3>ANUSARA</h3>
            <p>Eu egestas nunc, congue et mauris sed venenatis at volutpat gravida eros.</p>
            <h3>ASHTANGA</h3>
            <p>Ultrices senectus nec neque id sed ultricies massa tristique tellus.</p>
            <h3>BIKRAM</h3>
            <p>Imperdiet laoreet vulputate eu vestibulum maecenas tellus quisque eu blandit.</p>
            <h3>HATHA</h3>
            <p>Quis dui leo tellus vitae nisl, laoreet nullam lacinia velit.</p>
          </div>
          <div>
            <h3>HOT YOGA</h3>
            <p>Eu egestas nunc, congue et mauris sed venenatis at volutpat gravida eros.</p>
            <h3>IYENGAR</h3>
            <p>Pellentesque amet lectus mattis enim et ut nisi vel tempor.</p>
            <h3>RESTORATIVE</h3>
            <p>Nullam non egestas maecenas convallis etiam integer sed adipiscing vitae.</p>
            <h3>VINYASA</h3>
            <p>Odio proin facilisis ac feugiat leo aliquet nibh mauris sed.</p>
          </div>
        </div>
        <div id='container3'>
            <div>
                <h3>Yoga Studio in the City of New York</h3>
                <h3>123 5th Avenue, New York, NY 12004, USA.</h3>
            </div>
            <div>
                <p>Commodo eu hendrerit facilisis viverra vulputate sed turpis odio natoque justo semper mauris enim lorem mattis risus imperdiet pretium, sed vel facilisi arcu, turpis pharetra, eu euismod amet, vestibulum scelerisque bibendum massa.</p>
                <p>Neque felis cras nunc magna turpis tincidunt enim facilisi orci sed id est mauris felis parturient accumsan sapien nunc nibh dignissim neque nec, molestie vel magna at et urna vulputate ut etiam in mattis est egestas penatibus vitae maecenas interdum sed arcu donec risus vestibulum aliquet auctor quam.</p>
            </div>
        </div>
    </Div>
  )
}


const Div = styled.div`
    width: 85%;
    margin: auto;
  
  #container1{
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  #container1 img{
    height: 500px;
  }
   
 #container2{
    display: flex;
    justify-content: space-between;
 }

 #container3{
    display: flex;
    justify-content: space-between;
 }

`



export default Homepage;
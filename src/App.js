import i1 from './HW7_photo1.jpeg';
import i2 from "./HW7_photo2.jpg"
import i3 from "./HW7_photo3.jpeg"
import i4 from "./HW7_photo4.jpeg"
import i5 from "./HW7_photo5.jpeg"

import {format} from 'date-fns'

import "./App.css";
function App() {

  const formDate = format(new Date(), 'dd.MM.yyy hh:mm')

  return (
    <div className='container'>
      <div className='header'>
        <div className='icon'>
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
        </svg>
        <input type="text" className="label" readOnly></input>
        </div>
        <h1 className='data'>{formDate}</h1>
      </div>

      <div className='image_block'>
        <div className="each_image_block1" >HEY</div>
        <div className="each_image_block2"> Let's</div>
        <div className="each_image_block3"> Give</div>
        <div className="each_image_block4"> All</div>
        <div className="each_image_block5"> You can</div>
      </div>
    </div>
  );
}

export default App;
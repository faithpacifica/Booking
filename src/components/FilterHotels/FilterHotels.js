import React from "react";
import "./FilterHotels.css";
import Checkbox from "@material-ui/core/Checkbox";

const FilterHotels = () => {
  // TODO:Class larini tugirlash
  return (
    <div className="filter-hotels">
      <div className="container filter-container">
        <div className="left-column-wrapper left-column">
          <h3 className="left-column">Filtered by:</h3>

          <hr />
          <h4 className="star-rating">Star Rating</h4>
          <div className="star-box">
            <div>
              <Checkbox
                inputProps={{ "aria-label": "uncontrolled-checkbox" }}
              />
              <span className="star-box-text">5 stars</span>
            </div>
            <div>
              <span className="star-box-result">34</span>
            </div>
          </div>
          <div className="star-box">
            <div>
              <Checkbox
                inputProps={{ "aria-label": "uncontrolled-checkbox" }}
              />
              <span className="star-box-text">4 stars</span>
            </div>
            <div>
              <span className="star-box-result">70</span>
            </div>
          </div>
          <div className="star-box">
            <div>
              <Checkbox
                inputProps={{ "aria-label": "uncontrolled-checkbox" }}
              />
              <span className="star-box-text">3 stars</span>
            </div>
            <div>
              <span className="star-box-result">90</span>
            </div>
          </div>
          <div className="star-box">
            <div>
              <Checkbox
                inputProps={{ "aria-label": "uncontrolled-checkbox" }}
              />
              <span className="star-box-text">2 stars</span>
            </div>
            <div>
              <span className="star-box-result">10</span>
            </div>
          </div>
          <hr />

          <h4 className="star-rating">Deals</h4>
          <div className="star-box">
            <div>
              <Checkbox
                inputProps={{ "aria-label": "uncontrolled-checkbox" }}
              />
              <span className="star-box-text">Free cancellation </span>
            </div>
          </div>
          <div className="star-box">
            <div>
              <Checkbox
                inputProps={{ "aria-label": "uncontrolled-checkbox" }}
              />
              <span className="star-box-text">Reserve now, pay at stay </span>
            </div>
          </div>
          <hr />

          <h4 className="star-rating">Price</h4>
          {/* TODO:Range ni qilish */}
          <hr />

          <h4 className="star-rating">Property Type</h4>
          <div className="star-box">
            <div>
              <Checkbox
                inputProps={{ "aria-label": "uncontrolled-checkbox" }}
              />
              <span className="star-box-text">Hotels</span>
            </div>
            <div>
              <span className="star-box-result">134</span>
            </div>
          </div>
          <div className="star-box">
            <div>
              <Checkbox
                inputProps={{ "aria-label": "uncontrolled-checkbox" }}
              />
              <span className="star-box-text">Apartments</span>
            </div>
            <div>
              <span className="star-box-result">77</span>
            </div>
          </div>
          <div className="star-box">
            <div>
              <Checkbox
                inputProps={{ "aria-label": "uncontrolled-checkbox" }}
              />
              <span className="star-box-text">Hostels</span>
            </div>
            <div>
              <span className="star-box-result">19</span>
            </div>
          </div>
          <div className="star-box">
            <div>
              <Checkbox  inputProps={{ "aria-label": "uncontrolled-checkbox" }}/>
              <span className="star-box-text">Guesthouses</span>
            </div>
            <div>
              <span className="star-box-result">9</span>
            </div>
          </div>
          <hr />

          
          <h4 className="star-rating">Review Score</h4>
          <div className="star-box">
            <div>
              <Checkbox
                inputProps={{ "aria-label": "uncontrolled-checkbox" }}
              />
              <span className="star-box-text">Wonderful:9+ </span>
            </div>
            <div>
              <span className="star-box-result">90</span>
            </div>
          </div>
          <div className="star-box">
            <div>
              <Checkbox
                inputProps={{ "aria-label": "uncontrolled-checkbox" }}
              />
              <span className="star-box-text">Very Good:8+</span>
            </div>
            <div>
              <span className="star-box-result">172</span>
            </div>
          </div>
          <div className="star-box">
            <div>
              <Checkbox
                inputProps={{ "aria-label": "uncontrolled-checkbox" }}
              />
              <span className="star-box-text">Good:7+ </span>
            </div>
            <div>
              <span className="star-box-result">198</span>
            </div>
          </div>
          <div className="star-box">
            <div>
              <Checkbox  inputProps={{ "aria-label": "uncontrolled-checkbox" }}/>
              <span className="star-box-text">Pleasant: 6+</span>
            </div>
            <div>
              <span className="star-box-result">203</span>
            </div>
          </div>
          <hr />

          <h4 className="star-rating">Facilities</h4>
          <div className="star-box">
          <div>
              <Checkbox  inputProps={{ "aria-label": "uncontrolled-checkbox" }}/>
              <span className="star-box-text">Parking </span>
            </div>
            <div><span className="star-box-result">227</span></div>
          </div>

          <div className="star-box">
          <div>
              <Checkbox  inputProps={{ "aria-label": "uncontrolled-checkbox" }}/>
              <span className="star-box-text">Restaurant</span>
          </div>
            <div><span className="star-box-result">102</span></div>
          </div>

          <div className="star-box">
            <div>
              <Checkbox  inputProps={{ "aria-label": "uncontrolled-checkbox" }}/>
              <span className="star-box-text">Room Service</span>
            </div>
            <div><span className="star-box-result">160</span></div>
          </div>

          <div className="star-box">
            <div>
              <Checkbox  inputProps={{ "aria-label": "uncontrolled-checkbox" }}/>
              <span className="star-box-text">Fitness center</span>
            </div>
            <div><span className="star-box-result">48</span></div>
          </div>

          <div className="star-box">
            <div>
              <Checkbox  inputProps={{ "aria-label": "uncontrolled-checkbox" }}/>
              <span className="star-box-text">Breakfast included</span>
            </div>
            <div><span className="star-box-result">121</span></div>
          </div>

          <div className="star-box">
            <div>
              <Checkbox  inputProps={{ "aria-label": "uncontrolled-checkbox" }}/>
              <span className="star-box-text">Non-smoking rooms</span>
            </div>
            <div><span className="star-box-result">222</span></div>
          </div>

          <div className="star-box">
            <div>
              <Checkbox  inputProps={{ "aria-label": "uncontrolled-checkbox" }}/>
              <span className="star-box-text">Airport shuttle</span>
            </div>
            <div><span className="star-box-result">222</span></div>
          </div>
          <div className="star-box">
            <div>
              <Checkbox  inputProps={{ "aria-label": "uncontrolled-checkbox" }}/>
              <span className="star-box-text">Free WiFi</span>
            </div>
            <div><span className="star-box-result">225</span></div>
          </div>
          <div className="star-box">
            <div>
              <Checkbox  inputProps={{ "aria-label": "uncontrolled-checkbox" }}/>
              <span className="star-box-text">Swimming Pool</span>
            </div>
            <div><span className="star-box-result">225</span></div>
          </div>
          <div className="star-box">
            <div>
              <Checkbox  inputProps={{ "aria-label": "uncontrolled-checkbox" }}/>
              <span className="star-box-text">SPA</span>
            </div>
            <div><span className="star-box-result">42</span></div>
          </div>
          <div className="star-box">
            <div>
              <Checkbox  inputProps={{ "aria-label": "uncontrolled-checkbox" }}/>
              <span className="star-box-text">Family rooms</span>
            </div>
            <div><span className="star-box-result">181</span></div>
          </div>

          <button>
            <span className="show-less">Show less</span>
            <i className="fas fa-chevron-down"></i>
          </button>
        
          <hr />





        </div>
      </div>
    </div>
  );
};

export default FilterHotels;

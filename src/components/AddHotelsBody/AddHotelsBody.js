import React from 'react';
import './AddHotelsBody.css';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const AddHotelsBody = () => {
    return (
        <div>
            <h2>Add Hotels</h2>
            <div>
                <div>
                    <InsertDriveFileIcon />
                    <h3>Basic Informations </h3>
                </div>
                <form>
                    <label>Listing Title</label>
                    <input type='text'/>
                </form>
                <form>
                    <label>Category</label>
                    <select>
                        <option>Select Category</option>
                        <option>Hotels</option>
                        <option>Restaurants</option>
                        <option>Shops</option>
                    </select>
                </form>
            </div>
            <div>
                <div>
                    <LocationOnIcon />
                    <h3>Location</h3>
                </div>
              <form>
                  <label>City</label>
                  <select>
                      <option>Select City</option>
                  </select>
                  </form>  
                  <form>
                      <label>Address</label>
                      <input type='text' placeholder='Street' />
                  </form>
            </div>
            
        </div>
    );
};

export default AddHotelsBody;
import React, { useState } from 'react';
import PropTypes from 'prop-types';

NotFound.propTypes = {

};

function NotFound(props) {

    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageUpload = (event) => {

        const file = event.target.files[0];
        setSelectedImage(URL.createObjectURL(file));
        // You can also perform additional operations such as file validation or upload to a server

        console.log(URL.createObjectURL(file))
    };

    return (
        <div>
            <h1>Load</h1>
            <input type="file" onChange={handleImageUpload} />
            <h1>{selectedImage}</h1>
            {/* {selectedImage && <img src={selectedImage} alt="Selected" />} */}
        </div>
    );
}

export default NotFound;
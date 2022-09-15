import { useState } from "react";
import { Img } from "./ImageWithCheck.styled";
import imgNotFound from "../../images/imgNotFound.png"
import PropTypes from 'prop-types';

const ImageWithCheck = ({ src, alt, check, maxWidth }) => {
    const [imgSrc, setImgSrc] = useState(src);
    const errorHandler = () => {
        setImgSrc(imgNotFound);
    }

    return (
        <>
            {!check && <Img maxWidth={maxWidth} src={imgNotFound} alt={alt} />}
            {check && <Img maxWidth={maxWidth} onError={errorHandler} src={imgSrc} alt={alt} />}
        </>
    );
};

ImageWithCheck.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    check: PropTypes.string,
    maxWidth: PropTypes.string,
};

export default ImageWithCheck;
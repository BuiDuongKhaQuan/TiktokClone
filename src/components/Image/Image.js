import PropTypes from 'prop-types';
import { forwardRef, useState } from 'react';
import images from '~/asstes/images';

const Image = forwardRef(({ className, fallBack: customFallBack = images.noImage, src, alt, ...props }, ref) => {
    const [fallBack, setFallback] = useState('');

    const handleError = () => {
        setFallback(customFallBack);
    };

    return <img className={className} src={fallBack || src} alt={alt} ref={ref} {...props} onError={handleError} />;
});

Image.propTypes = {
    className: PropTypes.string,
    fallBack: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string,
};

export default Image;

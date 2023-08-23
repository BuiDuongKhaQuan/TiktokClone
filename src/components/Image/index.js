import { forwardRef, useState } from 'react';
import images from '~/asstes/images';

const Image = forwardRef(({ className, fallBack: customFallBack = images.noImage, src, alt, ...props }, ref) => {
    const [fallBack, setFallback] = useState('');

    const handleError = () => {
        setFallback(customFallBack);
    };

    return <img className={className} src={fallBack || src} alt={alt} ref={ref} {...props} onError={handleError} />;
});

export default Image;

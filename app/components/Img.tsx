import { FC } from 'react';
import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface ImgProps {
    src: StaticImageData;
    alt: string;
    className?: string;
    type?: string;
}

const Img: FC<ImgProps> = props => {
    const { src, alt, className, type } = props;

    const imgValues = type === 'flag' ? 20 : 30;

    return (
        <>
            <Image
                src={src}
                width={imgValues}
                height={imgValues}
                alt={`Picture of the ${alt}`}
                className={className + ' object-contain'}
            />
        </>
    );
};

export default Img;

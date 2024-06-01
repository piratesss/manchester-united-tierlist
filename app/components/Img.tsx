import React from 'react';
import Image, { StaticImageData } from 'next/image';

import { FC } from 'react';

interface ImgProps {
    src: StaticImageData;
    alt: string;
}

const Img: FC<ImgProps> = props => {
    const { src, alt } = props;

    return (
        <>
            <Image src={src} width={30} height={30} alt={`Picture of the ${alt}`} />
        </>
    );
};

export default Img;

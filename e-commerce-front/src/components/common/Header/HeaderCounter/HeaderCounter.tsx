import styles from './styles.module.css'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type HeaderCounterProps = {
    totalQuantity: number,
    imgSrc: string,
    pageNavigate: string
}

const { container, totalNum , flexCenter,pumpAnimate} = styles

export const HeaderCounter = ({pageNavigate,totalQuantity,imgSrc}: HeaderCounterProps) => {
    const navigate = useNavigate();
    // cartItems that be as total quantity
    const [isAnimated,setIsAnimated] = useState(false);
    const quantityStyle = `${totalNum} ${ isAnimated ? pumpAnimate : '' }`;


    useEffect(() => {
        if(!totalQuantity) return;
        setIsAnimated(true);

        const debounce = setTimeout(() => {
            setIsAnimated(false);
        } , 300);

        return () => clearTimeout(debounce);
    },[totalQuantity])

    return (
        <div className={container} onClick={() => navigate(`/${pageNavigate}`)}>
            <img src={imgSrc} alt={`icon`} />
            {pageNavigate}
            {
                totalQuantity > 0 && (
                    <div className={`${quantityStyle} ${flexCenter}`}>{totalQuantity}</div>
                )
            }

        </div>
    )
}
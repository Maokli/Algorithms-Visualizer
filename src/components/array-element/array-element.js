import styles from "./array-element.module.css"

const ArrayElement = ({value, colorFactor}) => {
    const colorVal = 3.14*((value/70)+2*colorFactor);
    return ( 
        <div className={styles.element} style={{height: value+ "vh",
        //Generates Gradient for colors 
        backgroundColor: `rgb(
            ${(Math.sin(colorVal)+1)*127},
            ${(Math.sin(colorVal+6.283/3)+1)*127},
            ${(Math.sin(colorVal+4*3.1415/3)+1)*127})`}}>

        </div>
     );
}
 
export default ArrayElement;
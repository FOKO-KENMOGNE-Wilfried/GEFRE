import styled from "styled-components";
import atout from "../../assets/img/atout.jpg";
import colors from "../../utils/style";
import check from "../../assets/icon/check.png"

const StyledMainDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 100px;
    height: 60vh;
    margin-top: 230px;
`
const StyledImg = styled.img`
    width: 400px;
    height: 300px;
`
const StyledText1 = styled.p`
    position: absolute;
    top: 250px;
    left: 800px;
    color: ${colors.secondary};
    font-weight: bold;
    text-align: center;
    font-size: 2em;
`
const StyledText2 = styled.p`
    text-align: center;
    font-size: 1.5em;
`
const StyledText3 = styled.p`
    text-align: left;
`
const StyledLi = styled.li`
    list-style-type: none;
    display: flex;
    flex-direction: row;
    gap: 30px;
`
const StyledCheck = styled.img`
    width: 40px;
    height: 40px;
    margin-top: 20px;
`

function Atouts(){
    return(
        <StyledMainDiv>
            <div>
                <StyledText1>NOS ATOUTS</StyledText1>
                <StyledText2>
                    <StyledText3>Nous disposons:</StyledText3>
                    <StyledLi>
                        <StyledCheck src={check} alt="check" />
                        <p>
                            D’un cadre securisé, propre, alimenté en énergie et eau;
                        </p>
                    </StyledLi>
                    <StyledLi>
                        <StyledCheck src={check} alt="check" />
                        <p>
                            Des salles spacieuses où sont dispensés les cours.
                        </p>
                    </StyledLi>
                </StyledText2>
            </div>
            <StyledImg src={atout} alt="home_img"/>
        </StyledMainDiv>
    )
}

export default Atouts;
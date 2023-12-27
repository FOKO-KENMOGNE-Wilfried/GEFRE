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
    @media only screen and (max-width: 862px){
        margin-top: 130px;
    }
`
const StyledImg = styled.img`
    width: 350px;
    height: 300px;
    @media only screen and (max-width: 1222px){
        width: 250px;
        height: 200px;
    }
    @media only screen and (max-width: 862px){
        width: 150px;
        height: 100px;
    }
`
const StyledText1 = styled.p`
    left: 800px;
    color: ${colors.secondary};
    font-weight: bold;
    text-align: center;
    font-size: 2em;
    @media only screen and (max-width: 1222px){
        font-size: 1.5em;
    }
    @media only screen and (max-width: 862px){
        font-size: 1em;
    }
`
const StyledText2 = styled.p`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-size: 1.5em;
    margin-top: 150px;
`
const StyledText3 = styled.p`
    text-align: left;
    @media only screen and (max-width: 1222px){
        font-size: 0.8em;
    }
    @media only screen and (max-width: 862px){
        font-size: 0.5em;
    }
`
const StyledLi = styled.li`
    list-style-type: none;
    display: flex;
    flex-direction: row;
    gap: 30px;
    @media only screen and (max-width: 1222px){
        font-size: 0.8em;
    }
    @media only screen and (max-width: 862px){
        font-size: 0.5em;
    }
`
const StyledCheck = styled.img`
    width: 40px;
    height: 40px;
    margin-top: 20px;
    @media only screen and (max-width: 1222px){
        width: 20px;
        height: 20px;
    }
    @media only screen and (max-width: 862px){
        width: 15px;
        height: 15px;
        margin-top: 13px;
    }
`
const StyledBox1 =styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

function Atouts(){
    return(
        <StyledMainDiv>
            <div>
                <StyledText2>
                    <StyledText1>NOS ATOUTS</StyledText1>
                    <StyledBox1>
                        <div>
                            <StyledText3>Nous disposons:</StyledText3>
                            <StyledLi>
                                <StyledCheck src={check} alt="check" />
                                <p>
                                    D&apos;un cadre securisé, propre, alimenté en énergie et eau;
                                </p>
                            </StyledLi>
                            <StyledLi>
                                <StyledCheck src={check} alt="check" />
                                <p>
                                    Des salles spacieuses où sont dispensés les cours.
                                </p>
                            </StyledLi>
                        </div>
                        <StyledImg src={atout} alt="home_img"/>
                    </StyledBox1>
                </StyledText2>
            </div>
        </StyledMainDiv>
    )
}

export default Atouts;
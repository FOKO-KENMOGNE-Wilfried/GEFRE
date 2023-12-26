import styled from "styled-components";
import cible from "../../assets/img/cibles.png";
import colors from "../../utils/style";
import check from "../../assets/icon/check.png"

const StyledMainDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 100px;
    height: 60vh;
    margin-top: 200px;
`
const StyledImg = styled.img`
    width: 300px;
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

function Cibles(){
    return(
        <StyledMainDiv>
            <div>
                <StyledText1>NOS CIBLES</StyledText1>
                <StyledText2>
                    <StyledLi>
                        <StyledCheck src={check} alt="check" />
                        <p>
                            Les eleves scolarises ou non residants a Ndogpassi et ses environs
                        </p>
                    </StyledLi>
                    <StyledLi>
                        <StyledCheck src={check} alt="check" />
                        <p>
                            Les candidats aux concours dans les grandes ecoles.
                        </p>
                    </StyledLi>
                </StyledText2>
            </div>
            <StyledImg src={cible} alt="home_img"/>
        </StyledMainDiv>
    )
}

export default Cibles;
import styled from "styled-components";
import colors from "../../utils/style";
import telephone from "../../assets/icon/telephone.png";
import mail from "../../assets/icon/mail.png";
import whatsapp from "../../assets/icon/whatsapp.png";

const StyledMainDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 100px;
    height: 60vh;
    margin-top: 200px;
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
const StyledSubText = styled.p`
    margin-top: 0px;
    margin-left: 20px;
    font-size: 0.4em;
    color: black;
    width: 250px;
`
const StyledBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 150px;
    gap: 100px;
`
const StyledSubBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${colors.five};
    padding: 30px;
    border-radius: 20px;
    &:hover{
        box-shadow: 2px 2px 2px 2px #878787;
    }
`
const StyledImg = styled.img`
    width: 40px;
    height: 50px;
`
const StyledImg2 = styled.img`
    width: 80px;
    height: 80px;
`
const StyledImg3 = styled.img`
    width: 80px;
    height: 80px;
`
const StyledP = styled.p`
    color: ${colors.secondary};
    text-align: center;
`
const StyledSubP = styled.p`
    color: black;
    width: 300px;
`
function Contacter(){
    return(
        <StyledMainDiv>
            <div>
                <StyledText1>
                    CONTACTEZ-NOUS <br />
                    <StyledSubText>Nous sommes disponibles du lundi au samedi</StyledSubText>
                </StyledText1>
                <StyledBox>
                    <StyledSubBox>
                        <StyledImg src={telephone} alt="phone" />
                        <StyledP>
                            Par telephone
                            <StyledSubP>
                                Appelez-nous : (du lundi au samedi) <br />
                                <br />
                                695719604 / 693906290
                            </StyledSubP>
                        </StyledP>
                    </StyledSubBox>
                    <StyledSubBox>
                        <StyledImg2 src={mail} alt="phone" />
                        <StyledP>
                            Par mail
                            <StyledSubP>
                                Ecrivez-nous sur l&apos;adresse mail <br />
                                <br />
                                gefre.edu@gmail.com
                            </StyledSubP>
                        </StyledP>
                    </StyledSubBox>
                    <StyledSubBox>
                        <StyledImg3 src={whatsapp} alt="phone" />
                        <StyledP>
                            Par whatsapp
                            <StyledSubP>
                                Posez-nous toutes vos questions en nous ecrivants sur whatsapp via ces contacts <br />
                                <br />
                                675052790 / 674283535
                            </StyledSubP>
                        </StyledP>
                    </StyledSubBox>
                </StyledBox>
            </div>
        </StyledMainDiv>
    )
}

export default Contacter;
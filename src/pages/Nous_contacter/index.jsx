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
    margin-top: 200px;
`
const StyledText1 = styled.div`
    left: 800px;
    color: ${colors.secondary};
    font-weight: bold;
    text-align: center;
    font-size: 2.5em;
    margin-top: 150px;
    @media only screen and (max-width: 597px){
        font-size: 1.5em;
        margin-top: -80px;
    }
`
const StyledSubText = styled.p`
    font-size: 0.4em;
    width: 300px;
    margin-top: 0px;
    margin-left: 480px;
    color: black;
    @media only screen and (max-width: 1400px){
        margin-left: 400px;
    }
    @media only screen and (max-width: 1186px){
        margin-left: 50px;
    }
    @media only screen and (max-width: 593px){
        margin-left: 25px;
    }
`
const StyledBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 100px;
    @media only screen and (max-width: 1400px){
        padding: 25px;
    }
    @media only screen and (max-width: 1186px){
        flex-direction: column;
    }
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
    @media only screen and (max-width: 1400px){
        padding: 25px;
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
const StyledP = styled.div`
    color: ${colors.secondary};
    text-align: center;
    height: 150px;
`
const StyledSubP = styled.p`
    color: black;
    width: 300px;
    @media only screen and (max-width: 1400px){
        width: 250px;
    }
`
const StyledMainBox = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 100px;
`
const StyledA = styled.a`
    text-decoration: none;
`

function Contacter(){
    return(
        <StyledMainDiv>
            <StyledMainBox>
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
                    <StyledA href="mailto:gefre.edu@gmail.com">
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
                    </StyledA>
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
            </StyledMainBox>
        </StyledMainDiv>
    )
}

export default Contacter;
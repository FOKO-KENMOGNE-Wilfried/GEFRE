import styled from "styled-components";
import colors from "../../utils/style";
import telephone from "../../assets/icon/telephone.png";
import mail from "../../assets/icon/mail.png";
import whatsapp from "../../assets/icon/whatsapp.png";

const StyledDiv = styled.div`
    width: 100%;
    height: 200px;
    position: relative;
    bottom: -200px;
    margin-left: -42px;
    padding-left: 50px;
    background-color: ${colors.primary};
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 40%;
    @media only screen and (max-width: 1200px){
        gap: 30%;
    }
    @media only screen and (max-width: 920px){
        gap: 20%;
    }
    @media only screen and (max-width: 820px){
        gap: 5%;
    }
    @media only screen and (max-width: 620px){
        gap: 0%;
        padding-left: 70px;
    }
`
const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: ${colors.four};
    font-size: 14px;
    @media only screen and (max-width: 620px){
        font-size: 12px;
    }
    @media only screen and (max-height: 800px){
        font-size: 12px;
    }
    @media only screen and (max-height: 680px){
        font-size: 10px;
    }
`
const StyledContact = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`
const StyledContact1 = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    border-right: 1px solid ${colors.four};
    height: 40%;
    padding-right: 40px;
    color: ${colors.four};
    @media only screen and (max-width: 620px){
        padding-right: 10px;
        font-size: 12px;
    }
`
const StyledImgBox = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    margin-left: 40px;
    @media only screen and (max-width: 620px){
        flex-direction: column;
        margin-left: 10px;
        gap: 0px;
    }
`
const StyledPhone = styled.img`
    width: 29px;
    height: 35px;
    padding: 10px;
    @media only screen and (max-width: 620px){
        width: 12px;
        height: 16px;
    }
`
const StyledSapp = styled.img`
    width: 60px;
    height: 60px;
    @media only screen and (max-width: 620px){
        width: 30px;
        height: 30px;
    }
`
const StyledMail = styled.img`
    width: 60px;
    height: 60px;
    @media only screen and (max-width: 620px){
        width: 30px;
        height: 30px;
    }
`

function Footer(){
    return(
        <StyledDiv>
            <StyledContainer>
                <p>A propos</p>
                <div>
                    <p>Accueil</p>
                    <p>Nos formations</p>
                    <p>Nos cibles</p>
                    <p>Nos atouts</p>
                    <p></p>
                    <p></p>
                </div>
            </StyledContainer>
            <StyledContact>
                <StyledContact1>
                    <p>Nous contacter</p>
                </StyledContact1>
                <StyledImgBox>
                    <StyledPhone src={telephone} alt="telephone"/>
                    <a href="mailto:gefre.edu@gmail.com"><StyledMail src={mail} alt="mail"/></a>
                    <StyledSapp src={whatsapp} alt="whatsapp"/>
                </StyledImgBox>
            </StyledContact>
        </StyledDiv>
    )
}

export default Footer;
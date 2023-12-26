import styled from "styled-components";
import colors from "../../utils/style";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import cross from "../../assets/icon/cross.png"
import menu from "../../assets/icon/menu.png"
import logo from "../../assets/img/logo.png"

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    padding-top: 20px;
    background-color: ${colors.primary};
`
const StyledDivMobile = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    padding: 20px 0px 20px 20px;
    background-color: ${colors.primary};
`
const StyledSubDivOne = styled.div`
    border-radius: 20px;
    display: flex;
    flex-direction: rows;
    justify-content: center;
    background-color: ${colors.four};
    width: 70%;
    align-items: center;
`
const StyledSubDivOneMobile = styled.div`
    border-radius: 20px;
    display: flex;
    flex-direction: rows;
    justify-content: center;
    background-color: ${colors.four};
    width: 30%;
    align-items: center;
    @media only screen and (max-width: 460px){
        height: 50px;
    }
`
const StyledImg = styled.img`
    width: 100px;
    height: 100px;
    @media only screen and (max-width: 1120px){
        width: 60px;
        height: 60px;
    }
    @media only screen and (max-width: 460px){
        width: 40px;
        height: 40px;
    }
`
const StyledSubDivTwo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 50px;
    color: ${colors.four};
    @media only screen and (max-width: 1438px){
        gap: 40px;
    }
    @media only screen and (max-width: 1120px){
        gap: 30px;
    }
    @media only screen and (max-width: 947px){
        gap: 20px;
    }
    @media only screen and (max-width: 841px){
        gap: 10px;
    }
    @media only screen and (max-width: 668px){
        gap: 5px;
    }
`
const StyledSubDivTwoMobile = styled.div`
    display: flex;
    position: fixed;
    top: -30px;
    right: -1px;
    flex-direction: column;
    align-items: center;
    padding-top: 35px;
    margin-top: 100px;
    height: 70%;
    width: 148px;
    gap: 40px;
    background-color: ${colors.primary};
    color: ${colors.four};
`
const StyledContainerOne = styled.div`
    
`
const StyledContainerTwo = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 60px;
    @media only screen and (max-width: 1438px){
        padding-top: 40px;
    }
    @media only screen and (max-width: 1120px){
        padding-top: 0px;
    }
    @media only screen and (max-width: 620px){
        
    }
`
const StyledLink = styled(Link)`
    font-size: 1em;
    text-decoration: none;
    color: ${colors.four};
    padding-top: 15px;
    @media only screen and (max-width: 1438px){
        font-size: 0.7em;
        padding-top: 20px;
    }
`
const StyledP = styled.p`
    font-size: 2.6em;
    @media only screen and (max-width: 1783px){
        font-size: 2em;
    }
    @media only screen and (max-width: 1438px){
        font-size: 1.5em;
    }
    @media only screen and (max-width: 1120px){
        font-size: 1em;
    }
    @media only screen and (max-width: 762px){
        font-size: 0.8em;
    }
`
const StyleMenuImg = styled.img`
    position: fixed;
    right: 30px;
    width: 40px;
    height: 40px;
`
const StyledHeader = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
    gap: 8em;
`
function Header(){

    const [isVisible, setVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const updateIsMobile = () => {
        if(window.innerWidth >= 620){
            setIsMobile(false);
        } else if(window.innerWidth <= 620){
            setIsMobile(true);
        }
    }

    useEffect(() => {
        updateIsMobile();
      }, []);
    
    useEffect(() => {
        window.addEventListener('resize', updateIsMobile);
    }, []);

    function toggle(){
        setVisible(!isVisible);
        console.log(isVisible);
    }

    return isMobile ? (
        <StyledDivMobile>
            <StyledHeader>
                <StyledSubDivOneMobile>
                    <StyledImg src={logo}/>
                    <StyledP>
                        GEFRE
                    </StyledP>
                </StyledSubDivOneMobile>
                { isVisible ? (
                    <StyledContainerOne>
                            <StyleMenuImg src={cross} alt="close-menu" onClick={() => toggle()}/>
                            <StyledSubDivTwoMobile>
                                <StyledContainerTwo>
                                    <StyledLink to={"/"}>Accueil</StyledLink>
                                    <StyledLink to={"/formations"}>Nos Formations</StyledLink>
                                    <StyledLink to={"/contacter"}>Nous contacter</StyledLink>
                                    <StyledLink to={"/cibles"}>Nos cibles </StyledLink>
                                    <StyledLink to={"/atouts"}>Nos atouts</StyledLink>
                                </StyledContainerTwo>
                            </StyledSubDivTwoMobile>
                    </StyledContainerOne>
                ) : (
                    <StyledContainerOne>
                        <StyleMenuImg src={menu} alt="open-menu" onClick={() => toggle()}/>
                    </StyledContainerOne>
                )}
            </StyledHeader>
                
        </StyledDivMobile>
    ) : (
        <StyledDiv>
            <StyledSubDivOne>
                <StyledImg src={logo}/>
                <StyledP>
                    Groupe des Enseignants pour la Formation et la Reussite
                </StyledP>
            </StyledSubDivOne>
            <StyledSubDivTwo>
                <StyledLink to={"/"}>Accueil</StyledLink>
                <p>|</p>
                <StyledLink to={"/formations"}>Nos Formations</StyledLink>
                <p>|</p>
                <StyledLink to={"/contacter"}>Nous contacter</StyledLink>
                <p>|</p>
                <StyledLink to={"/cibles"}>Nos cibles </StyledLink>
                <p>|</p>
                <StyledLink to={"/atouts"}>Nos atouts</StyledLink>
            </StyledSubDivTwo>
        </StyledDiv>
    )
}

export default Header;
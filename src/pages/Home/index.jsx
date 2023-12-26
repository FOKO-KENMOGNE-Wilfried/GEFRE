import styled from "styled-components";
import home_img from "../../assets/img/home_img.jpg";
import colors from "../../utils/style";

const StyledMainDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 500px;
    height: 60vh;
    margin-top: 200px;
`
const StyledImg = styled.img`
    width: 300px;
    height: 300px;
`
const StyledText1 = styled.p`
    color: ${colors.secondary};
    font-weight: bold;
    text-align: center;
    font-size: 2em;
`
const StyledText2 = styled.p`
    width: 200px;
    text-align: center;
    font-size: 1.5em;
`

function Home(){
    return(
        <StyledMainDiv>
            <div>
                <StyledText1>GEFRE ?</StyledText1>
                <StyledText2>
                    C&apos;est une groupe d&apos;enseignants experimentes
                    de l&apos;enseignement secondaire
                </StyledText2>
            </div>
            <StyledImg src={home_img} alt="home_img"/>
        </StyledMainDiv>
    )
}

export default Home;
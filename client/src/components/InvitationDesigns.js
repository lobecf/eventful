import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Birthday, Halloween, Holiday, NewYears, Thanksgiving } from "../styles";


function InvitationDesign () {
    const [showDesign, setShowDesign] = useState("")
    
    const handleClick = (e) => {
        if (showDesign === e.target.name) {
          setShowDesign (null)
        }
        else {
          setShowDesign (e.target.name)
        }
      }

    return (
        <div>
        <Wrapper>
                <Button onClick={handleClick} name="holiday">Holiday</Button>
                <Button onClick={handleClick} name="thanksgiving">Thanksgiving</Button>
                <Button onClick={handleClick} name="halloween">Halloween</Button>
                <Button onClick={handleClick} name="new years">New Years</Button>
                <Button onClick={handleClick} name="birthday">Birthday</Button>
        </Wrapper>
        <Wrapper>
                { showDesign === "holiday" &&
                <div> 
                <Button as={Link} to="/login">
                  <Wrapper2>
                    <IMG src="https://i.imgur.com/d2vPovy.png"/>
                  </Wrapper2>
                </Button>
                <Button as={Link} to="/login">
                  <Wrapper2>
                    <IMG src="https://i.imgur.com/AYuysOJ.png"/>
                  </Wrapper2>
                </Button>
                <Button as={Link} to="/login">
                  <Wrapper2>
                    <IMG src="https://i.imgur.com/ihSpfgz.png"/>
                  </Wrapper2>
                </Button>
                <Button as={Link} to="/login">
                  <Wrapper2>
                    <IMG src="https://i.imgur.com/1SCyt6t.png"/>
                  </Wrapper2>
                </Button>
                <Button as={Link} to="/login">
                  <Wrapper2>
                    <IMG src="https://i.imgur.com/JRnTaSt.png"/>
                  </Wrapper2>
                </Button>
                </div>}
                { showDesign === "thanksgiving" && 
                <div> 
                <Button as={Link} to="/login">
                  <Wrapper2>
                    <IMG src="https://i.imgur.com/FrkUINB.png"/>
                  </Wrapper2>
                </Button>
                <Button as={Link} to="/login">
                  <Wrapper2>
                    <IMG src="https://i.imgur.com/ZE0x04Y.png"/>
                  </Wrapper2>
                </Button>
                <Button as={Link} to="/login">
                  <Wrapper2>
                    <IMG src="https://i.imgur.com/p3N9e6g.png"/>
                  </Wrapper2>
                </Button>
                <Button as={Link} to="/login">
                  <Wrapper2>
                    <IMG src="https://i.imgur.com/rwKCI5o.png"/>
                  </Wrapper2>
                </Button>
                </div>}
                { showDesign === "halloween" && 
                <div> 
                <Button as={Link} to="/login">
                  <Wrapper2>
                    <IMG src="https://i.imgur.com/zhcxrLh.png"/>
                  </Wrapper2>
                </Button>
                <Button as={Link} to="/login">
                  <Wrapper2>
                    <IMG src="https://i.imgur.com/VtxhRbm.png"/>
                  </Wrapper2>
                </Button>
                <Button as={Link} to="/login">
                  <Wrapper2>
                    <IMG src="https://i.imgur.com/uNO4qei.png"/>
                  </Wrapper2>
                </Button>
                <Button as={Link} to="/login">
                  <Wrapper2>
                    <IMG src="https://i.imgur.com/MtICVEE.png"/>
                  </Wrapper2>
                </Button>
                <Button as={Link} to="/login">
                  <Wrapper2>
                    <IMG src="https://i.imgur.com/3dTj3Xv.png"/>
                  </Wrapper2>
                </Button>
                <Button as={Link} to="/login">
                  <Wrapper2>
                    <IMG src="https://i.imgur.com/vdRefZ6.png"/>
                  </Wrapper2>
                </Button>
                </div>}
                { showDesign === "new years" && 
                <div> 
                <Button as={Link} to="/login">
                  <Wrapper2>
                    <IMG src="https://i.imgur.com/5HwJWUS.png"/>
                  </Wrapper2>
                </Button>
                <Button as={Link} to="/login">
                  <Wrapper2>
                    <IMG src="https://i.imgur.com/AYuysOJ.png"/>
                  </Wrapper2>
                </Button>
                <Button as={Link} to="/login">
                  <Wrapper2>
                    <IMG src="https://i.imgur.com/y86975y.png"/>
                  </Wrapper2>
                </Button>
                <Button as={Link} to="/login">
                  <Wrapper2>
                    <IMG src="https://i.imgur.com/1SCyt6t.png"/>
                  </Wrapper2>
                </Button>
                <Button as={Link} to="/login">
                  <Wrapper2>
                    <IMG src="https://i.imgur.com/3dTj3Xv.png"/>
                  </Wrapper2>
                </Button>
                </div>}
                { showDesign === "birthday" && 
                <div> 
                <Button as={Link} to="/login">
                  <Wrapper2>
                    <IMG src="https://i.imgur.com/d2vPovy.png"/>
                  </Wrapper2>
                </Button>
                <Button as={Link} to="/login">
                  <Wrapper2>
                    <IMG src="https://i.imgur.com/AYuysOJ.png"/>
                  </Wrapper2>
                </Button>
                <Button as={Link} to="/login">
                  <Wrapper2>
                    <IMG src="https://i.imgur.com/ihSpfgz.png"/>
                  </Wrapper2>
                </Button>
                <Button as={Link} to="/login">
                  <Wrapper2>
                    <IMG src="https://i.imgur.com/1SCyt6t.png"/>
                  </Wrapper2>
                </Button>
                </div>}  
        </Wrapper>
        </div>
    )
}

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  position: relative;
`;

const Wrapper2 = styled.section`
    width: 300px;
    height: 360px;
    margin-top: 50px;
    position: relative;
`;

const IMG = styled.img`
    width: auto;
    float: left;
    padding: 20px;
`

const Button = styled.button`
    width: auto;
    float: left;
    padding: 20px;
    font-family: 'Quicksand', sans-serif;
`;

const H1 = styled.h1 `
position: relative;
padding-top: 30px;
padding-bottom: 30px;
font-family: Arial;
font-size: 30px;
`

const P = styled.p `
font-family: Arial;
font-size: 20px;
`

export default InvitationDesign
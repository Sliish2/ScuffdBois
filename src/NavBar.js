import React from "react";
import { Box, Button,Flex, Image, Link} from '@chakra-ui/react';
import Opensea from "./assets/social-media-icons/scuffdOpensea.png";
import Twitter from "./assets/social-media-icons/scuffdTwitter.png";
import Etherscan from "./assets/social-media-icons/scuffdEtherscan.png";



const NavBar = ({accounts, setAccounts}) => {
    const isConnected = Boolean(accounts[0]);

    async function connectAccount() {
        if(window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setAccounts(accounts);
        }
    }
    return (
      
         <Flex justify="space-between" align="center" padding="30px 30px">
             {/*Left Side - Social Media Icons */}
             <Flex justify="space-around" width="20%" padding="0 75px"v>
                 <Link href="https:www.opensea.com">
                     <Image src={Opensea} boxSize="42px" margin="0 15px" />
                 </Link>
                 <Link href="https://twitter.com/scuffdboiswtf">
                     <Image src={Twitter} boxSize="42px" margin="0 15px" />
                 </Link>
                 <Link href="https://etherscan.io/address/0x38ac74728689299B4C8a14991d19A99218bfec55">
                     <Image src={Etherscan} boxSize="42px" margin="0 15px" />
                 </Link>
                </Flex>
     
         
             {/*Connect*/}
             {isConnected ? (
                 <Box 
                 margin="0 15px"
                 fontSize="30px"
                 >CONNECTD</Box>
             ) : (
                 <Button 
                 fontSize="20px"
                 size="md"
                 width="150px"
                 variant = "unstyled"
                 backgroundColor="white"
                 borderRadius="100px"
                 color="black"
                 cursor="pointer"
                 fontFamily="mg_brush_version_2regular"
                 padding="15px"
                 margin="0 15px"
                 onClick={connectAccount}>CONNECT</Button>
             )}
         </Flex>
     
    )
};

export default NavBar;
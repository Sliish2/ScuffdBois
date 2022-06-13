import { useState } from "react";
import {ethers, BigNumber} from 'ethers';
import scuffdbois from './scuffdbois.json';
import { Box, Button, Flex, Input, Text, Image, Stack} from '@chakra-ui/react';
import scffdeyes from "./assets/scuffdBG.gif";
import gif1 from "./assets/scuffdGIF1.gif"
import gif2 from "./assets/scuffdGIF2.gif"

//add contract address after its deployed on etherscan
const scuffdboisAddress = "0x38ac74728689299B4C8a14991d19A99218bfec55"

const MainMint = ({accounts, setAccounts}) => {
    const [mintAmount, setMintAmount] = useState(1);
    const isConnected = Boolean(accounts[0]);

    async function handleMint() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                scuffdboisAddress,
                scuffdbois.abi,
                signer

            );
            try {
                //calls minting function from contract
                const response = await contract.mint(BigNumber.from(mintAmount), {
                value: ethers.utils.parseEther((0*mintAmount).toString()),
                });
                console.log('response: ',response);
            } catch (err) {
                console.log("error: ", err)
            }
        }
    }

    const handleDecrement = () => {
        if (mintAmount <= 1) return;
        setMintAmount(mintAmount - 1);
    };

    const handleIncrement = () => {
        if (mintAmount >= 2) return;
        setMintAmount(mintAmount + 1);
        
        
    };

    return (
        <Flex justify="center" align="center" height="100vh" paddingBottom="150px">
            <Box width="1600px">
                <div>
            <Text fontSize="120px" textsshadow="0 0px #000000">SCUFFD BOIS</Text>
            <Text
                fontSize="50px"
                letterSpacing="-5.5%"
                fontFamily="mg_brush_version_2regular"
                textShadow="0 0px 0px #000000"
                color="black"
            >
                ONLEE TWO SCUFFD BOIS PUR WALLT. MINTS FREE.</Text>
                </div>  
            {isConnected ? (
                <div>
                    <Flex align="center" justify="center">
                        <Button 
                        border='0px'
                        fontSize="30px"
                        backgroundColor="white"
                        borderRadius="10px"
                        colorScheme="black"
                        cursor="pointer"
                        fontFamily="zai_covid-19_vaccineregular"
                        padding="15px"
                        marginTop="10px" 
                        onClick={handleDecrement}>-
                        </Button>
                        <Input 
                        readOnly
                        fontSize="30px"
                        borderRadius="10px"
                        border="0px"
                        fontFamily="zai_covid-19_vaccineregular"
                        width="120px"
                        height="30px"
                        textAlign="center"
                        paddingLeft="19px"
                        marginTop="10px" 
                        type="number" 
                        value = {mintAmount} 
                        />
                        <Button
                         border='0px'
                         fontSize="30px"
                         backgroundColor="white"
                         borderRadius="10px"
                         colorScheme="black"
                         cursor="pointer"
                         fontFamily="zai_covid-19_vaccineregular"
                         padding="15px"
                         marginTop="10px" 
                         onClick={handleIncrement}>+
                        </Button>
                    </Flex>
                    <Button 
                        size="md"
                        height="50px"
                        width="150px"
                        fontSize="30px"
                        variant="link"
                        backgroundColor="white"
                        borderRadius="15px"
                        color="black"
                        cursor="pointer"
                        fontFamily="mg_brush_version_2regular"
                        padding="15px"
                        marginTop="10px" 
                        onClick={handleMint}>MINT PLS
                    </Button>
                </div>
            ) : (
                <Text 
                marginTop="70px"
                fontSize="50px"
                letterSpacing="-5.5%"
                fontFamily="mg_brush_version_2regular"
                textShadow="0 0px #000000"
                color="black"
                >U MUS B CONNECTD TO MINT
                </Text>
            )}
            <Stack direction={['row']} spacing="152" align="center" justify="center">
                <Box position="relative" left="-230px"><Image src={gif1}  boxSize="369px" margin="5 150px"/></Box>
                <Box position="relative"><Image src={scffdeyes} boxSize="369px" margin="5 150px" /></Box>
                <Box position="relative" right="-230px"><Image src={gif2} boxSize="369px" margin="5 150px"/></Box>
            </Stack>
        </Box>
    </Flex>

    );
};

export default MainMint;
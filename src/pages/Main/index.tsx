import styled from "styled-components";
import { Button } from "./components/Button";
import { useHistory } from "react-router";
import Background from "./components/Background";
import { AiFillGithub } from "react-icons/ai";

const blue = "#2254c9";

const Head = styled.div`
    background: rgb(0,86,231);
    background: linear-gradient(180deg, rgba(0,86,231,1) 0%, rgba(0,65,129,1) 100%);
    min-height: 500px;
    padding: 100px 0;
`

export default function Main() {
    const history = useHistory()
    return (
        <Background>
            <Head>
                <div className="container py-3">
                    <div className="row m-0">
                        <div className="col-lg text-center">
                            <img src="https://mystickermania.com/cdn/stickers/memes/sticker_2110.png" onClick={() => { window.location.href = "https://mystickermania.com/sticker-packs/memes/drake-hotline-bling-yes-meme" }} />
                        </div>
                        <div className="col-lg d-flex align-items-end">
                            <div>
                                <h1 className="text-white mb-3">Swap Pools is here</h1>
                                <p className="text-white mb-4">Welcome to Nutchanon's DEX. This is just my playground. None of the tokens are valuable.</p>
                                <div className="d-flex">
                                    <Button color={blue} backgroundColor="#fff" onClick={() => history.push("/app")}>Trade now</Button>
                                    <Button color="#000" backgroundColor="#fff" onClick={() => history.push("/app")}><AiFillGithub className="me-1" size="22px" />Github</Button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </Head>
            <div className="container">
                <div className="mt-5 text-center">
                    <h5>Created by Nutchanon C.</h5>
                </div>
            </div>
        </Background>
    )
}
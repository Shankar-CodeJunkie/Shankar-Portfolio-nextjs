import React, { useEffect, useState } from "react";
import { Button, Row, Column, Tile, Grid, Tag, Layer, RadioTile, TileGroup } from "@carbon/react";
import AOS from "aos";
import '../../../node_modules/aos/dist/aos.css';
import reactpicture from './icons8-react-50.png';
import js from './icons8-javascript-50.png';
import expressjs from './expressjs.png'
import typescript from './icons8-typescript-50.png';
import nextjs from './next.png';
import docker from './docker1.png';
import kubernetes from './kubernetes.png';
import heroku from './heroku.png';
import mongodb from './mongodb.png';
import nodejs from './nodejs.png';
import ibm_cloud from './icons8-ibm-watson-50.png';
import redux from './icons8-redux-50.png'
import travis_ci from './icons8-travis-ci-50.png';
import { Text } from "@carbon/react/lib/components/Text";
import './_skill.scss';
import '../../../node_modules/aos/dist/aos.css';
import Image from 'next/image'

const Skills = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <Grid >
                <Column lg={5} md={8} sm={4} >
                    <Tile className={'skill-container'} data-aos={'fade-right'} data-aos-once="false" data-aos-duration={3000} >
                        <div className={'tile-headerv1'}>
                            FrontEnd
                        </div>
                        <hr />
                        <div className={'tile-body'}  >
                            <Grid>
                                <Column lg={{ span: 1 }} md={2} sm={2}>
                                    <Image src={reactpicture} alt={'javascript'} />
                                    <div className={"skill-header"} >React</div>
                                </Column>
                                <Column lg={1} md={2} sm={2}>
                                    <Image src={js} alt={'javascript'} />
                                    <div className={'skill-header'} >Javascript</div>
                                </Column>
                                <Column lg={1} md={2} sm={2}>
                                    <Image src={nextjs} alt={'NextJS'} height={'50'} width={'50'} />
                                    <div className={'skill-header'}  >NextJS</div>
                                </Column>
                                <Column lg={1} md={2} sm={2}>
                                    <Image src={typescript} alt={'typescript'} />
                                    <div className={'skill-header'}  >Typescript</div>
                                </Column>
                                <Column lg={1} md={2} sm={2}>
                                    <Image src={redux} alt={'typescript'} />
                                    <div className={'skill-header'}  >Redux</div>
                                </Column>
                            </Grid>

                        </div>

                    </Tile>

                </Column>



                <Column lg={5} md={8} sm={4}>
                    <Tile className={'skill-container'} data-aos={'fade-right'} data-aos-once="false" data-aos-duration={3000}>
                        <div className={'tile-headerv1'}>
                            BackEnd
                        </div>
                        <hr />

                        <div className={'tile-body'} >
                            <Grid>
                                <Column lg={1} md={2} sm={2}>
                                    <Image src={expressjs} alt={'express-js'} onHover={'expressjs'} height={'50'} width={'50'} />
                                    <div className={'skill-header'} >ExpressJS</div>

                                </Column>
                                <Column lg={1} md={2} sm={2}>
                                    <Image src={mongodb} alt={'mongodb'} height={'50'} width={'50'} />
                                    <div className={'skill-header'} >MongoDB</div>

                                </Column>

                                <Column lg={1} md={2} sm={2}>
                                    <Image src={nodejs} alt={'nodejs'} height={'50'} width={'50'}/>
                                    <div className={'skill-header'} >NodeJS</div>
                                </Column>
                            </Grid>


                        </div>

                    </Tile></Column>

                <Column lg={5} md={8} sm={4} >
                    <Tile className={'skill-container'} data-aos={'fade-right'} data-aos-once="false" data-aos-duration={3000}>
                        <div className={'tile-headerv1'}>
                            Cloud / CI-CD
                        </div>
                        <hr />
                        <div className={'tile-body'}>
                            <Grid>
                                <Column lg={1} md={2} sm={2}>
                                    <Image src={docker} alt={'Docker'} height={'50'} width={'50'} />
                                    <div className={'skill-header'} >Docker</div>

                                </Column>
                                <Column lg={1} md={2} sm={2}>
                                    <Image src={kubernetes} alt={'Kubernetes'} height={'50'} width={'50'} />
                                    <div className={'skill-header'} >Kubernetes</div>

                                </Column>
                                <Column lg={1} md={2} sm={2}>
                                    <Image src={heroku} alt={'Heroku'} height={'50'} width={'50'} />
                                    <div className={'skill-header'} >Heroku</div>

                                </Column>
                                <Column lg={1} md={2} sm={2} >
                                    <Image src={ibm_cloud} alt={'IBM Cloud'} height={'50'} width={'50'}/>
                                    <div className={'skill-header'} >IBMCloud</div>
                                </Column>
                            </Grid>

                        </div>

                    </Tile>
                </Column>
            </Grid>

        </>
    )
}

export default Skills;
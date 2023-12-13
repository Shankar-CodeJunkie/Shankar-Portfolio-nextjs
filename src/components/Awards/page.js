import React from "react";
import {Grid, Column, TileGroup, Tile, RadioTile} from '@carbon/react'
import './_awards.scss'
import { Trophy } from "@carbon/icons-react";

export default function Awards() {
    return (
        <>
            <Grid className={"award-tile-background"}>

                  
                  <Column lg={4} md={4} sm={4} >
                    <Tile className={'award-tile'} >
                        <Grid>
                            <Column lg={{span:1}} sm={1} md={1}>
                                <Trophy size={48} />
                            </Column>
                            <Column lg={4} sm={4} md={4} className="tile-header">
                                Outstanding Technical Achievement Award (OTAA)
                            </Column>
                            <br />
                            <br />
                            <Column lg={4} sm={4} md={4} className="tile-footer">
                                Sep 2015

                            </Column>

                        </Grid>

                    </Tile>
                
                  </Column>
                  <Column lg={4} md={4} sm={4} >
                  <Tile className={'award-tile'} >
                        <Grid>
                            <Column lg={{span:1}} sm={1} md={1}>
                                <Trophy size={48} />
                            </Column>
                            <Column lg={4} sm={4} md={4} className="tile-header">
                                Excellence & Eminence Award
                            </Column>
                            <br />
                            <br />
                            <Column lg={4} sm={4} md={4} className="tile-footer">
                                Aug 2014 & 2019

                            </Column>

                        </Grid>

                    </Tile>
                  </Column>
                  <Column lg={4} md={4} sm={4} >
                  <Tile className={'award-tile'} >
                        <Grid>
                            <Column lg={{span:1}} sm={1} md={1}>
                                <Trophy size={48} />
                            </Column>
                            <Column lg={4} sm={4} md={4} className="tile-header">
                                IBM Manager Choice  &ensp;                  
                                Award
                            </Column>
                            <br />
                            <br />
                            <Column lg={4} sm={4} md={4} className="tile-footer">
                                2013 , 2017, 2018

                            </Column>

                        </Grid>

                    </Tile>
                  </Column>
                  <Column lg={4} md={4} sm={4} >
                  <Tile className={'award-tile'} >
                        <Grid>
                            <Column lg={{span:1}} sm={1} md={1}>
                                <Trophy size={48} />
                            </Column>
                            <Column lg={4} sm={4} md={4} className="tile-header">
                                IBM Bravo Award
                                <br />
                                <br />
                            </Column>
                            <br />
                            <br />
                            <Column lg={4} sm={4} md={4} className="tile-footer">
                                Aug 2008 & 2009

                            </Column>

                        </Grid>

                    </Tile>
                  </Column>
            </Grid>

        </>
    )
}
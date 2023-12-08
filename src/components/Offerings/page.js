import React from "react";
import { Grid, Column, Tile } from "@carbon/react";
import { CheckmarkFilled } from "@carbon/react/icons"
import "./_offering.scss";

const Offerings = () => {
  return (
    <Grid>
      <Column lg={{ span: 5 }} md={8} sm={4}>
        <Tile className={'TileLayout'}>
          <div className="TileHeader">
            Web Development

          </div>

          <hr />

          <div className={"TileBody"}>
            Since 2020, I have been actively engaged in the field of frontend development, consistently delivering exceptional results in application development and deployment.
            My primary focus lies in crafting engaging and seamless user interfaces that elevate the overall user experience
            <br />
            <br />

            <div className={'OfferingTileList'}>
              <ul className="OfferingTileList TileBody-ListItems">
                <li>
                  <CheckmarkFilled /> Proficient in developing captivating user interfaces.
                </li>
                <li>
                  <CheckmarkFilled /> Extensive experience in developing web applications using a diverse range of frameworks, including React, NextJS, and Angular, allowing me to tailor solutions to meet specific project needs.
                </li>
                <li>
                  <CheckmarkFilled /> With a strong grasp of popular frameworks including Redux, Redis, Bootstrap, Webpack and IBM Carbon, I possess a versatile skill set ready to tackle frontend development projects
                </li>
              </ul>
            </div>
          </div>
        <br />

        </Tile>

      </Column>
      <Column lg={{ span: 5 }} md={8} sm={4}>
        <Tile className={'TileLayout'}>
          <div className="TileHeader">
            Backend Engineer

          </div>
          <hr />
          <div className={"TileBody"}>
          As a skilled backend engineer, I bring expertise in developing robust and scalable server-side solutions. With a focus on performance optimization and seamless data management, I strive to deliver high-quality backend systems that power efficient and reliable applications

            <br />
            <br />

            <div className={'OfferingTileList'}>
              <ul className="OfferingTileList TileBody-ListItems">
                <li>
                  <CheckmarkFilled  /> Extensive experience across multiple cloud platforms, demonstrating a strong understanding of cloud architecture and infrastructure..
                </li>
                <li>
                  <CheckmarkFilled /> Proficient in developing applications using NodeJS, expressJS, and NestJS, delivering robust and scalable backend solutions.
                </li>
                <li>
                  <CheckmarkFilled /> Hands-on experience with Docker, Kubernetes, Tekton, and Travis, enabling efficient containerization, orchestration, and continuous integration for seamless application deployment.
                </li>
              </ul>
            </div>
          </div>

        </Tile>

      </Column>
      <Column lg={{ span: 5 }} md={8} sm={4}>
        <Tile className={'TileLayout'}>
          <div className="TileHeader">
            Innovations

          </div>
          <hr />
          <div className={"TileBody"}>
            I am an avid advocate of automation, constantly seeking opportunities to enhance efficiency and productivity for both myself and my team. Throughout my journey, I have successfully automated numerous tasks, showcasing my passion for streamlining processes and driving impactful results.
            <br />
            <br />

            <div className={'OfferingTileList'}>
              <ul className="OfferingTileList TileBody-ListItems">
                <li>
                  <CheckmarkFilled /> Slack Bots: I have designed and deployed multiple Slack bots that streamline manual tasks. 
                </li>
                <li>
                  <CheckmarkFilled /> VSCode Plugin: Recognizing the importance of seamless collaboration and productivity, I have developed a VSCode plugin that seamlessly incorporates the Zenhub board directly into the editor. This integration enables team members to efficiently manage their projects within the familiar VSCode environment, enhancing collaboration and productivity.
                </li>

              </ul>
            </div>
          </div>
          <br />


        </Tile>
      </Column>
    </Grid>
  )
}

export default Offerings;
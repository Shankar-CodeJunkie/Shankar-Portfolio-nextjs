import {
    Grid,
    Column,
    Tile, Tag, Link,
} from '@carbon/react';
import { InfoSection, InfoCard } from '../Info/page';
import { Globe, Application, PersonFavorite, Enterprise, LogoLinkedin, LogoGithub, Email } from '@carbon/react/icons';
import images2 from './../../../public/images2.png'
//import { CardHeader } from "@carbon/ibm-products/lib/components/Card";
//import { ListItem, UnorderedList } from "@carbon/ibm-security";
import developer from './../../../public/developer.svg'
import Timeline from "../TimeLine/page";
//import TimeLine from "../TimeLine/TimeLine";
import ContributionGraph from '../ContributionGraph/page';
import AOS from "aos";
import '../../../node_modules/aos/dist/aos.css';
import { useEffect } from 'react';
import Skills from '../Skills/page';
import Offerings from '../Offerings/page';
import './_homepage.scss';

const HomePage = () => {
    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <Grid className="landing-page" fullWidth>
            <Column lg={8} md={8} sm={4} style={{ paddingTop: '50px' }} className='landing-page__banner'  >

                <p>Hello, I am </p>

                <div className={'ds-heading-md-3'} >Shankar Venkatachalam</div>

                <div className={'landing-page__designation'}>Software Engineer |  Fullstack Developer</div>

                <Tile style={{ marginRight: '20px', marginTop: '40px' }} className={'landing-page__description'}>
                    I'm a passionate full stack developer, specialized in React (Frontend) and several javascript frameworks
                    for backend. I also like to contribute to open source development and active contributor to
                    many open source development projects.
                </Tile>

                <Grid>
                    <Column lg={{ span: 2, start: 2 }} md={{ span: 2, start: 1 }} sm={1}>
                        <Link href='https://www.linkedin.com/in/shankar-venkatachalam1-5047a970/' renderIcon={() => <LogoLinkedin style={{ margin: '3vh' }} size={36}  /> }></Link>
                        
                    </Column>
                    <Column lg={2} md={2} sm={1}>
                        <Link href='https://github.com/shankar-CodeJunkie' renderIcon={() => <LogoGithub style={{ margin: '3vh' }} size={36} /> }></Link>
                    </Column>
                    <Column lg={2} md={2} sm={1}>
                        <Link href='mailto:svenkat7@in.ibm.com' renderIcon={() => <Email style={{ margin: '3vh' }} size={36} /> }></Link>
                    </Column>
                </Grid>

            </Column>

            <Column lg={6} md={8} sm={4}>
                <img data-aos={'fade-left'} data-aos-once="false" data-aos-duration={3000} className={'responsive'} src={developer} alt={'fj'} />

            </Column>

            <Column lg={16} md={8} sm={4} className={'experience-layout'}>
                <h1 className={'experience-header'}>Skills</h1>
            </Column>

            <Column lg={{ span: 16, offset: 1 }} md={8} sm={4} style={{ margin: '1vh' }}>
                <Skills />
            </Column>

            <Column lg={16} md={8} sm={4} className={'experience-layout'}>
                <h1 className={'experience-header'}>My Offerings</h1>
            </Column>

            <Column lg={{ span: 16, offset: 1 }} md={8} sm={4} style={{ margin: '1vh' }}>
                <Offerings />
            </Column>


            <Column lg={16} md={8} sm={4} className={'experience-layout'}>
                <h1 className={'experience-header'}>Experience</h1>





            </Column>
            <Column lg={{ span: 16, offset: 1 }} md={8} sm={4} className={'experience-layout'}>
                {
                    /**
                     * <div className={'dotted-line center'}>
         
                     <div><Enterprise /></div>
         
                     </div>
                     <div className={'dotted-line center'}>
         
                     <div><Enterprise /></div>
         
                     </div>
                     <Timeline />
                     */
                    <Timeline />
                }


            </Column>

            {
                /**
                 * <Column lg={16} md={8} sm={4} className={'experience-layout'}>
                <Grid>
                  <Column lg={3} md={8} sm={4}>
                  <div className={'experience-header'}>
                      OpenSource Contributions
                    </div>
                  </Column>
                  <Column lg={12} md={8} sm={4}>
                    <ContributionGraph />
                  
                  </Column>
                </Grid>
              </Column>
                 */
            }
            <Column lg={16} md={8} sm={{ span: 4, start: 1 }} className="landing-page__r3 experience-layout" style={{ margin: '3vh' }}>
                <h1 className={'experience-header'}>OpenSource Contributions</h1>
            </Column>

            <Column lg={{ span: 16, offset: 1 }} md={8} sm={{ span: 4, start: 1 }} className="landing-page__r3 experience-layout" style={{ margin: '1vh' }}>
                <ContributionGraph />
            </Column>

        </Grid>
    )
}

const SplitText = (props) => {
    return (
        <>
            {props.copy.split("").map(function (char, index) {
                const style = { "animationDelay": (0.5 + index / 10) + "s" };
                return <span
                    aria-hidden="true"
                    key={index}
                    style={style}>
                    {char}
                </span>;
            })}
        </>
    )
}

export default HomePage
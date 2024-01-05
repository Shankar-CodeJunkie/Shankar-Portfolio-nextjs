import React from "react";
import { Tile, Grid, Column } from "@carbon/react";
//import Swiper from 'swiper';
//import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/scss';
//import 'swiper/swiper.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar, Mousewheel } from 'swiper/modules';
// eslint-disable-next-line
//import { Swiper, SwiperSlide } from 'swiper/swiper-react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import './_testimonal.scss';
import { UserAvatarFilled } from "@carbon/icons-react";


const Testimonals = () => {

    return (
        <Grid>
            <Column sm={4} md={{ start: 2, span: 6 }} lg={{ start: 3, span: 12 }}>

                {/* <Grid>
                        <Column sm={4} md={{ start: 2, span: 6 }} lg={{ start: 3, span: 8 }}>
                            
                        </Column>
                    </Grid> */}
                <Tile className="testimonal-title">
                    <Swiper
                        modules={[Pagination, Mousewheel, Navigation, Scrollbar]}
                        onSwiper={(swiper) => (window.swiper = swiper)}
                        slidesPerView={1}
                        threshold={2}
                        spaceBetween={10}
                        navigation={true}
                        scrollbar
                        mousewheel={{ forceToAxis: true, sensitivity: 0.1, releaseOnEdges: true }}
                        pagination={{ clickable: true }}
                    >
                        <SwiperSlide>
                            <Grid>
                                <Column sm={{ start: 2, span: 2 }} md={{ offset: 2, span: 4 }} lg={{ offset: 1, start: 6, span: 6 }}>
                                    <div className={'testimonal-image'}>
                                        <UserAvatarFilled size="100" />
                                    </div>
                                </Column>
                                <Column sm={4} md={{ offset: 2, span: 4 }} lg={{ offset: 1, start: 6, span: 6 }}>
                                    <Grid condensed>
                                        <Column sm={4} md={{ span: 4 }} lg={{ start: 1, span: 6 }}>
                                            <div className="testimonal-author">
                                                Srikanth Murali
                                            </div>
                                        </Column>
                                    </Grid>
                                </Column>

                                <Column sm={4} md={{ start: 2, span: 4 }} lg={{ start: 4, span: 6 }}>
                                    <Grid condensed>
                                        <Column sm={4} md={{ start: 3, span: 4 }} lg={6}>
                                            <div className="testimonal-author-company">
                                                Advisory Software Engineer, IBM Cloud
                                            </div>
                                        </Column>

                                    </Grid>
                                </Column>


                                <Column sm={4} md={{ span: 6 }} lg={{ span: 12 }}>
                                    <div className="testimonal-body">
                                        Thanks for all your efforts and contributions towards the Meraki Project - “Workflow based feature flag management in IBM Cloud App Configuration” in 1H 2023. Your dedication and willingness to contribute on initiatives beyond your day-to-day work is highly appreciated. The collateral created by you has been adopted into the IBM App Configuration service and is available for customer use. Thanks again for your contributions and looking forward to working with you in the future..
                                    </div>
                                </Column>
                            </Grid>

                        </SwiperSlide>
                        <SwiperSlide>
                            <Grid >
                                <Column sm={4} md={{ offset: 2, span: 4 }} lg={{ offset: 1, start: 6, span: 6 }}>
                                    <div className={'testimonal-image'}>
                                        <UserAvatarFilled size="100" />
                                    </div>
                                </Column>
                                <Column sm={4} md={{ offset: 2, span: 4 }} lg={{ offset: 1, start: 6, span: 6 }}>
                                    <Grid condensed>
                                        <Column sm={4} md={{ span: 4 }} lg={{ start: 1, span: 6 }}>
                                            <div className="testimonal-author">
                                                Kiran KBM
                                            </div>
                                        </Column>
                                    </Grid>
                                </Column>
                                <Column sm={4} md={{ start: 2, span: 4 }} lg={{ start: 4, span: 6 }}>
                                    <Grid condensed>
                                        <Column sm={4} md={{ start: 3, span: 4 }} lg={6}>
                                            <div className="testimonal-author-company">
                                                Offering Manager, IBM
                                            </div>
                                        </Column>

                                    </Grid>
                                </Column>
                                <Column sm={4} md={{ span: 6 }} lg={{ span: 12 }}>
                                    <div className="testimonal-body">
                                        Kudos! Shankar, It was an amazing work to get Self Care Deletion work to Production. I know that it had a lot of challenges and multiple changes. And I appreciate your dedication and commitment to the work we do. Thank you for all the great work you do.
                                    </div>
                                </Column>
                            </Grid>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Grid>
                                <Column sm={4} md={{ offset: 2, span: 4 }} lg={{ offset: 1, start: 6, span: 6 }}>
                                    <div className={'testimonal-image'}>
                                        <UserAvatarFilled size="100" />
                                    </div>
                                </Column>
                                <Column sm={4} md={{ span: 4 }} lg={{ start: 6, span: 6 }}>
                                    <Grid condensed>
                                        <Column sm={4} md={{ span: 4 }} lg={{ start: 1, span: 6 }}>
                                            <div className="testimonal-author">
                                                Keith M Wooten
                                            </div>
                                        </Column>
                                    </Grid>
                                </Column>
                                <Column sm={4} md={{ span: 4 }} lg={{ start: 4, span: 6 }}>
                                    <Grid condensed>
                                        <Column sm={4} md={{ start: 2, span: 4 }} lg={6}>
                                            <div className="testimonal-author-company">
                                                Senior Manager, IBM CIO Identity Services 2FAaaS & HSK
                                            </div>
                                        </Column>

                                    </Grid>
                                </Column>
                                <Column sm={4} md={{ span: 6 }} lg={{ span: 12 }} >
                                    <div className="testimonal-body">
                                        Shankar, congratulations for being recognized as a Champion for Carbon,an Outstanding accomplishment! Over the short period of being responsible for managing the Enterprise Profile Directory Service team, I have been impressed with your accomplishments and abilities to improve IBM’s products and capabilities. You have truly demonstrated your technical eminence! I look forward to your suggestions on improving the team’s productivity using Watsonx. Thank You for your Outstanding efforts!
                                    </div>
                                </Column>
                            </Grid>
                        </SwiperSlide>

                    </Swiper>
                </Tile>
            </Column>
        </Grid>
    )

}

export default Testimonals;

